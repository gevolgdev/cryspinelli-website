import { Outlet } from "react-router";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { getAllLinks } from "~/repository/get-all-links";

export async function loader() {
    return await getAllLinks();
}

export default function LinksLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
