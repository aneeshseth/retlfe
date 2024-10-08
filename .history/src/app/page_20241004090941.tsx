"use client";
import { ModeToggle } from "../../components/mode-toggle/mode-toggle";
import { Button } from "@/components/ui/button";
import React from "react";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const imageUrls = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png",
    "https://download.logo.wine/logo/Snowflake_Inc./Snowflake_Inc.-Logo.wine.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png",
    "https://databricks.gallerycdn.vsassets.io/extensions/databricks/databricks/2.4.2/1725612920176/Microsoft.VisualStudio.Services.Icons.Default",
  ];
  const router = useRouter();
  const positions = [
    { top: "18%", left: "13%" },
    { top: "18%", right: "13%" },
    { bottom: "15%", left: "13%" },
    { bottom: "15%", right: "13%" },
  ];

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dhxeo4rvc/image/upload/v1727489839/Screen_Shot_2024-09-27_at_7.16.36_PM_u7gik0.png')",
        }}
      />

      <div className="z-50">
        <div className="flex flex-row w-full justify-between items-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl m-4 font-sans">
            RETL
          </h1>
        </div>

        <div className="flex w-full items-center justify-center lg:ml-4 lg:mr-2 mt-56 2xl:mt-80">
          <h1 className="sm:text3xl md:text-3xl font-extrabold tracking-tight lg:text-5xl text-2xl text-center">
            Pulling data from warehouses, into wherever you want it.
          </h1>
        </div>

        <div className="flex w-full items-center justify-center lg:ml-4 lg:mr-2 mt-10">
          <Button
            className="h-8 lg:h-12 lg:w-28 text-md z-50"
            variant="secondary"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            what & how?
          </Button>
        </div>
      </div>

      {imageUrls.map((url, index) => (
        <div
          key={index}
          className={styles.floatingImage}
          style={{
            ...positions[index],
            animationDelay: `${Math.random() * 2}s`,
            position: "absolute",
            zIndex: 30,
          }}
        >
          <img
            src={url}
            alt={`floating-image-${index}`}
            className="w-32 2xl:w-60"
          />
        </div>
      ))}
    </div>
  );
}
