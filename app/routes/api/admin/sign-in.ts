import { ECollectionsName } from "app/enums/collectionsName.enum";
import { schemaSignIn } from "app/routes/sign-in";
import { getDb } from "app/service/mongodb.service";
import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const dataValidated = schemaSignIn.parse(data);

    const db = await getDb();
    const adminCollection = await db
        .collection(ECollectionsName.ADMIN)
        .findOne({ email: dataValidated.email });

    const adminNotFound = !adminCollection;
    const passwordNotMatched =
        adminCollection?.password !== dataValidated.password;

    if (adminNotFound || passwordNotMatched)
        return { error: "Email ou senha incorretos!" };

    return Response.json({ success: true });
}
