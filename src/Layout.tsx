import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import { NavMenubar } from "./components/Header";

function Layout() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="w-full">
					<NavMenubar />
					<div>
						<Navbar />
						<Outlet />
						<Footer />
					</div>
				</main>
			</SidebarProvider>
		</>
	);
}

export default Layout;
