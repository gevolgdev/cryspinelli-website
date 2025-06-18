import { randomUUID } from "node:crypto";
import type { ActionFunctionArgs } from "react-router";
import { ECollectionsName } from "~/enums/collectionsName.enum";
import { getDb } from "~/service/mongodb.service";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const dataToSave = {
        id: randomUUID(),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const db = await getDb();
    await db.collection(ECollectionsName.LINKS).insertOne(dataToSave);

    return Response.json({ status: 201 });
}
