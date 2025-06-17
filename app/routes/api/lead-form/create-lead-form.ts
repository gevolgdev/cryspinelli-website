import { ECollectionsName } from "app/enums/collectionsName.enum";
import { LeadFormSchema } from "app/schemas/lead-form.schema";
import { getDb } from "app/service/mongodb.service";
import { randomUUID } from "node:crypto";
import type { ActionFunctionArgs } from "react-router";

type ActionData = {
    name: string;
    email: string;
    phone: string;
    message: string | null;
};

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const body = Object.fromEntries(formData) as ActionData;
    const leadFormData = LeadFormSchema.parse(body);

    const dataToSave = {
        id: randomUUID(),
        ...leadFormData,
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const db = await getDb();
    await db.collection(ECollectionsName.LEAD_FORM).insertOne(dataToSave);

    return { status: 201 };
}
