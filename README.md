# RETL Implementation

## The RETL Implementation

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjI0LjQ5X0FNX2xqYjd5MA==/drilldown">

The idea is simple: to allow analyzed and queried data extracted from Data Warehouses to be put into customer success platforms, ad platforms, etc., for marketing teams and others to act on the data.

- Source, Destination, and other metadata stored in a PostgreSQL database.

## Sources and the Data

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjI0LjQ5X0FNX2xqYjd5MA==/drilldown">

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053180/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE1LjU5X0FNX255dW13bg==/drilldown">

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjAwX0FNX3JncTRjdg==/drilldown">

Every time a user spins up a Source and Destination with a pipeline, a Kubernetes pod entity starts up for both. The code extracts data from the source, sends it to Apache Kafka on a specific topic, then consumes it, receiving it in the destination all within K8S pods.

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjU3X0FNX3ZwMGI0eQ==/drilldown">

While ingesting data into the destination, the count for a pipeline ID is incremented in an in-memory Redis store. The server checks Redis for counts, iterating over the pipelines by their public ID.

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728053181/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF83LjE3LjMwX0FNX3E3ZTB2aA==/drilldown">

<img width="1355" alt="image" src="https://res-console.cloudinary.com/dhxeo4rvc/thumbnails/v1/image/upload/v1728057701/U2NyZWVuX1Nob3RfMjAyNC0xMC0wNF9hdF85LjAxLjE0X0FNX2ltbHlmcQ==/drilldown">

