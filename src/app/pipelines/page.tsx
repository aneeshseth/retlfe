"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default function CreatePipelinePage() {
  const router = useRouter();
  const [sources, setSources] = useState<any>([]);
  const [destinations, setDestinations] = useState<any>([]);
  const [selectedSource, setSelectedSource] = useState<string>("");
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const fetchData = async () => {
    try {
      const sourcesResponse = await axios.get("http://localhost:3001/inputs");
      const destinationsResponse = await axios.get(
        "http://localhost:3001/outputs"
      );
      setSources(sourcesResponse.data);
      setDestinations(destinationsResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const startPods = async () => {
    const uuidGen = uuidv4().toString();

    const selectedSourceObj = sources.find(
      (source: any) => source.id === selectedSource
    );
    const selectedDestinationObj = destinations.find(
      (destination: any) => destination.id === selectedDestination
    );

    const sourceConfig = selectedSourceObj?.config;
    const destinationConfig = selectedDestinationObj?.config;
    const sourceConnectorName = selectedSourceObj?.name;
    const destinationConnectorName = selectedDestinationObj?.name;
    console.log(selectedSource);
    const payloadInputConnector = {
      pipeline_name: uuidGen,
      connector_type: "Input",
      connector_name: sourceConnectorName,
      config: sourceConfig,
    };
    console.log(payloadInputConnector);
    const payloadOutputConnector = {
      pipeline_name: uuidGen,
      connector_type: "Output",
      connector_name: destinationConnectorName,
      config: destinationConfig,
    };
    console.log(payloadOutputConnector);
    try {
      await axios.post("http://localhost:3001/start", payloadInputConnector);
      await axios.post("http://localhost:3001/start", payloadOutputConnector);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSource || !selectedDestination) {
      alert("Please select both a source and a destination.");
      return;
    }

    const payload = {
      source_id: selectedSource,
      destination_id: selectedDestination,
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/pipeline/create",
        payload
      );
      if (response.status == 200 || response.status == 201) {
        alert("starting pods!");
        await startPods();
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error creating pipeline:", error);
      alert("Failed to create pipeline.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:flex flex-col flex-1 space-y-4 p-8 pt-6 h-screen items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Create a New Pipeline</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="source" className="block mb-2">
                Select Source:
              </label>
              <select
                id="source"
                value={selectedSource}
                onChange={(e) => setSelectedSource(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a source</option>
                {sources.map((source: any) => (
                  <option key={source.id} value={source.id}>
                    {source.connector_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="destination" className="block mb-2">
                Select Destination:
              </label>
              <select
                id="destination"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="">Select a destination</option>
                {destinations.map((destination: any) => (
                  <option key={destination.id} value={destination.id}>
                    {destination.connector_name}
                  </option>
                ))}
              </select>
            </div>
            <Button type="submit" className="w-full mt-4">
              Create Pipeline
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
