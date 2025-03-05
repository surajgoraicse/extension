import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

function Layout() {
	return (
		<>
			<SidebarProvider>
				<AppSidebar />
				<main className="w-full ">
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
