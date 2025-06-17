import { Footer } from "app/components/footer";
import { Header } from "app/components/header";
import { Outlet } from "react-router";

export default function LeadFormLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
