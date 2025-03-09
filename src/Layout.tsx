import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";

function Layout() {
	return (
		<>
			<SidebarProvider className="">
				<AppSidebar />
				<main className=" overflow-x-hidden w-screen  ">
					<div>
						<Navbar />
						<Outlet />
					</div>
				</main>
			</SidebarProvider>
		</>
	);
}

export default Layout;
