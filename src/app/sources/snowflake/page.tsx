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
import axios from "axios";
import { useRouter } from "next/navigation";

function CardWithForm() {
  const [snowflakeUsername, setSnowflakeUsername] = useState<string>("");
  const [snowflakePassword, setSnowflakePassword] = useState<string>("");
  const [snowflakeOrg, setSnowflakeOrg] = useState<string>("");
  const [snowflakeAcc, setSnowflakeAcc] = useState<string>("");
  const [snowflakeDB, setSnowflakeDB] = useState<string>("");
  const [snowflakeWarehouse, setSnowflakeWarehouse] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const requestBody = {
      connector_type: "input",
      connector_name: "snowflake-" + "wbn;cjwecewjc",
      name: "snowflake",
      config: {
        settings: {
          SNOWFLAKE_ORG: snowflakeOrg,
          SNOWFLAKE_ACC: snowflakeAcc,
          SNOWFLAKE_DB: snowflakeDB,
          SNOWFLAKE_WH: snowflakeWarehouse,
        },
        secrets: {
          SNOWFLAKE_USERNAME: snowflakeUsername,
          SNOWFLAKE_PASSWORD: snowflakePassword,
        },
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:3001/input/create",
        requestBody,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
      if (response.status == 200 || response.status == 201) {
        alert("Snowflake source created successfully!");
        router.push("/dashboard");
      }
      console.log("Input created successfully!");
    } catch (error) {
      console.error("Error creating input:", error);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 h-screen justify-center">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-illustration-of-3d-snowflake-png-image_10076165.png')",
        }}
      />
      <Card className="w-[350px] z-50">
        <CardHeader>
          <CardTitle>Create Snowflake Source</CardTitle>
          <CardDescription>
            Retrieve data from Snowflake to a destination in minutes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  placeholder="Enter Snowflake username"
                  value={snowflakeUsername}
                  onChange={(e) => setSnowflakeUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Snowflake password"
                  value={snowflakePassword}
                  onChange={(e) => setSnowflakePassword(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="org">Organization</Label>
                <Input
                  id="org"
                  placeholder="Enter Snowflake org"
                  value={snowflakeOrg}
                  onChange={(e) => setSnowflakeOrg(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="account">Account</Label>
                <Input
                  id="account"
                  placeholder="Enter Snowflake account"
                  value={snowflakeAcc}
                  onChange={(e) => setSnowflakeAcc(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="database">Database</Label>
                <Input
                  id="database"
                  placeholder="Enter Snowflake database"
                  value={snowflakeDB}
                  onChange={(e) => setSnowflakeDB(e.target.value)}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="warehouse">Warehouse</Label>
                <Input
                  id="warehouse"
                  placeholder="Enter Snowflake warehouse"
                  value={snowflakeWarehouse}
                  onChange={(e) => setSnowflakeWarehouse(e.target.value)}
                />
              </div>
              <Button type="submit" className="mt-4">
                Deploy
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardWithForm;
