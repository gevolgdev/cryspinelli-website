import env from "app/env/env-schema";
import { MongoClient } from "mongodb";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = env.MONGO_URL;
const options = {
    tls: true,
};

if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export async function getDb() {
    const client = await clientPromise;
    return client.db("mongodb-dev");
}
