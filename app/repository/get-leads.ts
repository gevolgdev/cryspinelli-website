import { ECollectionsName } from "~/enums/collectionsName.enum";
import { getDb } from "~/service/mongodb.service";

export async function getLeads() {
    const db = await getDb();
    const leadCollection = db.collection(ECollectionsName.LEAD_FORM);
    const leads = await leadCollection.find().toArray();
    const leadsCount = await leadCollection.countDocuments();

    return { leads, leadsCount };
}
