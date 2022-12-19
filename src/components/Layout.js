import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export const Layout = () => {
    return (
        <main className="App">
            <Header />
            <Outlet />
        </main>

    );
}