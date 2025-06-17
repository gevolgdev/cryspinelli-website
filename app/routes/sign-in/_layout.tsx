import { Footer } from "app/components/footer";
import { Header } from "app/components/header";
import { Outlet } from "react-router";

export default function SignInLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-col items-center justify-center">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
