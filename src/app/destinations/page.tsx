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
import * as Dialog from "@radix-ui/react-dialog";

function Page() {
  const router = useRouter();
  return (
    <div className="p-4 flex w-full gap-3 h-screen items-center flex-col md:flex-row justify-center">
      <Card className="h-1/2 flex flex-col items-center justify-between md:w-1/3 w-full">
        <CardHeader className="text-center">
          <CardTitle>Algolia</CardTitle>
          <CardDescription>Ingest data into Algolia</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center items-center">
          <img
            src="https://www.ironplane.com/hubfs/Partner%20Logos%20-%20Current/1.540x540/Algolia%20Logo_540x540.png"
            className="w-24 md:w-32"
          />
        </CardContent>
        <CardFooter className="w-full flex justify-center">
          <Button onClick={() => router.push("/destinations/algolia")}>
            Create (+)
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Page;
