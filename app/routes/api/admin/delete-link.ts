import type { ActionFunctionArgs } from "react-router";
import { ECollectionsName } from "~/enums/collectionsName.enum";
import { getDb } from "~/service/mongodb.service";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const { id } = Object.fromEntries(formData);

    const db = await getDb();
    await db.collection(ECollectionsName.LINKS).deleteOne({ id });

    return Response.json({ status: 200 });
}
