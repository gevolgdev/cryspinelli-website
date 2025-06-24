import { ECollectionsName } from "~/enums/collectionsName.enum";
import { getDb } from "~/service/mongodb.service";

export async function getAllLinks() {
    const db = await getDb();
    const links = await db.collection(ECollectionsName.LINKS).find().toArray();

    return { links };
}
