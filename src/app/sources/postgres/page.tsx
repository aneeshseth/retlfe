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
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

function CardWithForm() {
  const [postgresURL, setPostgresURL] = useState<string>("");
  const [postgresTableName, setPostgresTableName] = useState<string>("");
  const [postgresFilter, setPostgresFilter] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const requestBody = {
      connector_type: "input",
      connector_name: "postgres-" + uuidv4().toString(),
      name: "postgres",
      config: {
        settings: {
          POSTGRES_TABLE: postgresTableName,
          POSTGRES_FILTER: postgresFilter,
        },
        secrets: {
          POSTGRES_URL: postgresURL,
        },
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/input/create",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status == 200 || response.status == 201) {
        alert("PostgreSQL source created successfully!");
        router.push("/dashboard");
      }
      console.log(response.data);
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
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png')",
        }}
      />
      <Card className="w-[350px] z-50">
        <CardHeader>
          <CardTitle>Create Postgres Source</CardTitle>
          <CardDescription>
            Retrieve data from Postgres to a destination in minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="postgresURL">Postgres URL</Label>
                <Input
                  id="postgresURL"
                  placeholder="Enter Postgres URL"
                  value={postgresURL}
                  onChange={(e) => setPostgresURL(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="tableName">Table Name</Label>
                <Input
                  id="tableName"
                  placeholder="Enter Postgres table name"
                  value={postgresTableName}
                  onChange={(e) => setPostgresTableName(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="filter">Filter</Label>
                <Input
                  id="filter"
                  placeholder="Enter Postgres filter"
                  value={postgresFilter}
                  onChange={(e) => setPostgresFilter(e.target.value)}
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
