"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/navigation";
function CardWithForm() {
  const [index, setIndex] = useState<string>("");
  const [appID, setAppID] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestBody = {
      connector_type: "Output",
      connector_name: "algolia-" + uuidv4().toString(),
      name: "algolia",
      config: {
        settings: {
          ALGOLIA_INDEX: index,
        },
        secrets: {
          ALGOLIA_APP_ID: appID,
          ALGOLIA_API_KEY: apiKey,
        },
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/output/create",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      if (response.status == 200 || response.status == 201) {
        alert("Algolia destination created successfully!");
        router.push("/dashboard");
      }
      console.log("Output created successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 h-screen justify-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://www.primarymarkets.com/wp-content/uploads/2024/09/Algolio-logo.png')",
        }}
      />
      <Card className="w-[350px] z-50">
        <CardHeader>
          <CardTitle>Create Algolia Destination</CardTitle>
          <CardDescription>
            Send data to Algolia from warehouses in minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="algoliaIndex">Algolia Index</Label>
                <Input
                  id="algoliaIndex"
                  placeholder="Enter Algolia Index"
                  value={index}
                  onChange={(e) => setIndex(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="appID">App ID</Label>
                <Input
                  id="appID"
                  placeholder="Enter Algolia app ID"
                  value={appID}
                  onChange={(e) => setAppID(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="apiKey">API Key</Label>
                <Input
                  id="apiKey"
                  placeholder="Enter API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              <Button type="submit">Deploy</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardWithForm;
