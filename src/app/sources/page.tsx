"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <div className="p-4 flex w-full gap-3 h-screen items-center flex-col md:flex-row justify-center">
      <Card className="h-1/2 flex flex-col items-center justify-between md:w-1/3 w-full bg-gray-900">
        <CardHeader className="text-center">
          <CardTitle>Snowflake</CardTitle>
          <CardDescription>Extract data from Snowflake</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <img
            src="https://download.logo.wine/logo/Snowflake_Inc./Snowflake_Inc.-Logo.wine.png"
            className="w-52 md:w-48"
          />
        </CardContent>
        <CardFooter className="w-full flex justify-center">
          <Button onClick={() => router.push("/sources/snowflake")}>
            Create (+)
          </Button>
        </CardFooter>
      </Card>

      <Card className="h-1/2 flex flex-col items-center justify-between md:w-1/3 w-full">
        <CardHeader className="text-center">
          <CardTitle>PostgreSQL</CardTitle>
          <CardDescription>Extract data from PostgreSQL</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <img
            src="https://download.logo.wine/logo/PostgreSQL/PostgreSQL-Logo.wine.png"
            className="w-24 md:w-32"
          />
        </CardContent>
        <CardFooter className="w-full flex justify-center">
          <Button onClick={() => router.push("/sources/postgres")}>
            Create (+)
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
