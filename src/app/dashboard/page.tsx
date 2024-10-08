"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Overview } from "@/app/dashboard/components/overview";
import { RecentSales } from "@/app/dashboard/components/recent-sales";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function DashboardPage() {
  const router = useRouter();
  const [sources, setSources] = useState<any>([]);
  const [destinations, setDestinations] = useState<any>([]);
  const [pipelines, setPipelines] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const sourcesResponse = await axios.get("http://localhost:3001/inputs");
      const destinationsResponse = await axios.get(
        "http://localhost:3001/outputs"
      );
      const pipelinesResponse = await axios.get(
        "http://localhost:3001/pipelines"
      );
      setSources(sourcesResponse.data);
      setDestinations(destinationsResponse.data);
      setPipelines(pipelinesResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="md:flex flex-col flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div className="flex justify-between w-full">
          <div className="flex gap-2 justify-end w-full">
            <Button className="w-24" onClick={() => router.push("/docs")}>
              Docs
            </Button>
            {/* <Button
              className="w-28"
              onClick={() => router.push("/destinations")}
            >
              destination (+)
            </Button>
            <Button className="w-24" onClick={() => router.push("/pipelines")}>
              pipeline (+)
            </Button> */}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ClipLoader size={150} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Number of Records Ingested</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Pipelines</CardTitle>
                  <CardDescription>
                    A representation of source to destination.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {pipelines && pipelines.length > 0 ? (
                    <ul>
                      {pipelines.map((pipeline: any, index: number) => {
                        const source = sources.find(
                          (s: any) => s.id === pipeline.source
                        );
                        const destination = destinations.find(
                          (d: any) => d.id === pipeline.destination
                        );

                        const sourceName = source
                          ? source.connector_name
                          : "Unknown Source";
                        const destinationName = destination
                          ? destination.connector_name
                          : "Unknown Destination";

                        return (
                          <li key={pipeline.id}>
                            {index + 1}.{" "}
                            <span className="text-green-700">{sourceName}</span>{" "}
                            to{" "}
                            <span className="text-red-500">
                              {destinationName}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <p>No pipelines available.</p>
                  )}
                </CardContent>
              </Card>

              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Sources</CardTitle>
                  <CardDescription>
                    Data warehouses where the data comes from.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {sources && sources.length > 0 ? (
                    <ul>
                      {sources.map((source: any, index: number) => (
                        <li key={source.id}>
                          {index + 1}. {source.connector_name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No sources available.</p>
                  )}
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Destinations</CardTitle>
                  <CardDescription>
                    Supported platforms such as advertising or customer success
                    platforms.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {destinations && destinations.length > 0 ? (
                    <ul>
                      {destinations.map((destination: any, index: number) => (
                        <li key={destination.id}>
                          {index + 1}. {destination.connector_name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No destinations available.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
}
