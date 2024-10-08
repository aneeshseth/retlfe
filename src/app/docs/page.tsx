import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Component() {
  return (
    <div className="bg-[#121212] text-white p-8 h-full overflow-auto">
      <h1 className="text-4xl font-bold mb-4">
        The <span className="text-blue-500">RETL</span> implementation.
      </h1>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjI0LjMzX0FNX295ZWVtMg==/drilldown"
          className="rounded-md h-[200px] lg:h-[630px]"
        />
      </div>
      <p className="mb-3 text-md">
        The idea is simple: to allow analyzed and queried data extracted from
        Data Warehouses, put into customer success platforms, ad platforms, etc
        for marketing teams/others to act on the data.
      </p>
      <div className="flex justify-center flex-col mb-5">
        - Source, Destination, and other metadata stored in a PostgreSQL
        database.
      </div>
      <h1 className="text-xl font-bold">Sources and the data:</h1>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjI0LjQ5X0FNX2xqYjd5MA==/drilldown"
          className="rounded-md h-[200px] lg:h-[530px]"
        />
      </div>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053180/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE1LjU5X0FNX255dW13bg==/drilldown"
          className="rounded-md h-[200px] lg:h-[530px]"
        />
      </div>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjAwX0FNX3JncTRjdg==/drilldown"
          className="rounded-md h-[200px] lg:h-[530px]"
        />
      </div>
      <p className="mb-6 text-md">
        Everytime a user spins up a Source and Destination with a pipeline, a
        pod entity in Kubernetes starts up for the source for that user, and
        also for the destination. The code to extract data from a source, send
        into Apache Kafka to a specific ‘topic’, and then to consume it and
        recieve to destination all runs in the K8S pods.
      </p>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjU3X0FNX3ZwMGI0eQ==/drilldown"
          className="rounded-md h-[50px]"
        />
      </div>
      <p className="mb-6 text-md">
        While ingesting data into the destination, the count for a pipeline id
        is incremented in a in-memory storage in Redis, which the server checks
        for the count in redis by iterating over the pipelines that exist and
        having the public ID.
      </p>
      <div className="flex justify-center mt-10 mb-5">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjMwX0FNX3E3ZTB2aA==/drilldown"
          className="rounded-md h-[350px]"
        />
      </div>
      <div className="flex justify-center mt-10 mb-10">
        <img
          src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728057701/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF85LjAxLjE0X0FNX2ltbHlmcQ==/drilldown"
          className="rounded-md h-[450px]"
        />
      </div>
    </div>
  );
}

function CloudLightningIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  );
}

function FilterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function ListOrderedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="10" x2="21" y1="6" y2="6" />
      <line x1="10" x2="21" y1="12" y2="12" />
      <line x1="10" x2="21" y1="18" y2="18" />
      <path d="M4 6h1v4" />
      <path d="M4 10h2" />
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
    </svg>
  );
}
