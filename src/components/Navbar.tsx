import {
	Menubar,
	MenubarCheckboxItem,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarRadioGroup,
	MenubarRadioItem,
	MenubarSeparator,
	MenubarShortcut,
	MenubarSub,
	MenubarSubContent,
	MenubarSubTrigger,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { SidebarTrigger } from "./ui/sidebar";
import { Separator } from "./ui/separator";
import data from "@/data/data";
import { NavLink } from "react-router-dom";

function Navbar() {
	return (
		<div className="  sticky top-0 z-10">
			<div className=" bg-[#F5F8FF] dark:bg-[#09090B]  list-none ">
				<div className="flex justify-between ">
					<div className="flex  items-center h-10 py-2 pl-2 gap-2">
						<SidebarTrigger />
						<Separator orientation="vertical" />

						<Menubar className="border-none  bg-inherit shadow-none">
							<MenubarMenu>
								<MenubarTrigger>File</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>
										New Tab <MenubarShortcut>⌘T</MenubarShortcut>
									</MenubarItem>
									<MenubarItem>
										New Window <MenubarShortcut>⌘N</MenubarShortcut>
									</MenubarItem>
									<MenubarItem disabled>New Incognito Window</MenubarItem>
									<MenubarSeparator />
									<MenubarSub>
										<MenubarSubTrigger>Share</MenubarSubTrigger>
										<MenubarSubContent>
											<MenubarItem>Email link</MenubarItem>
											<MenubarItem>Messages</MenubarItem>
											<MenubarItem>Notes</MenubarItem>
										</MenubarSubContent>
									</MenubarSub>
									<MenubarSeparator />
									<MenubarItem>
										Print... <MenubarShortcut>⌘P</MenubarShortcut>
									</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Edit</MenubarTrigger>
								<MenubarContent>
									<MenubarItem>
										Undo <MenubarShortcut>⌘Z</MenubarShortcut>
									</MenubarItem>
									<MenubarItem>
										Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarSub>
										<MenubarSubTrigger>Find</MenubarSubTrigger>
										<MenubarSubContent>
											<MenubarItem>Search the web</MenubarItem>
											<MenubarSeparator />
											<MenubarItem>Find...</MenubarItem>
											<MenubarItem>Find Next</MenubarItem>
											<MenubarItem>Find Previous</MenubarItem>
										</MenubarSubContent>
									</MenubarSub>
									<MenubarSeparator />
									<MenubarItem>Cut</MenubarItem>
									<MenubarItem>Copy</MenubarItem>
									<MenubarItem>Paste</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>View</MenubarTrigger>
								<MenubarContent>
									<MenubarCheckboxItem>
										Always Show Bookmarks Bar
									</MenubarCheckboxItem>
									<MenubarCheckboxItem checked>
										Always Show Full URLs
									</MenubarCheckboxItem>
									<MenubarSeparator />
									<MenubarItem inset>
										Reload <MenubarShortcut>⌘R</MenubarShortcut>
									</MenubarItem>
									<MenubarItem disabled inset>
										Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
									</MenubarItem>
									<MenubarSeparator />
									<MenubarItem inset>Toggle Fullscreen</MenubarItem>
									<MenubarSeparator />
									<MenubarItem inset>Hide Sidebar</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
							<MenubarMenu>
								<MenubarTrigger>Profiles</MenubarTrigger>
								<MenubarContent>
									<MenubarRadioGroup value="benoit">
										<MenubarRadioItem value="andy">Andy</MenubarRadioItem>
										<MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
										<MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
									</MenubarRadioGroup>
									<MenubarSeparator />
									<MenubarItem inset>Edit...</MenubarItem>
									<MenubarSeparator />
									<MenubarItem inset>Add Profile...</MenubarItem>
								</MenubarContent>
							</MenubarMenu>
						</Menubar>
					</div>
					<div className="flex  items-center h-10 py-2 pl-2 gap-2 mr-[200px]">
						<div className="flex items-center justify-end flex-1 ">
							{/* <button>dfdf</button> */}
							
							{data.navbar.map((val) => {
								if (val.active) {
									return (
										<NavLink target="_black" to={val.url}>
											<li
												className="focus:bg-accent focus:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none "
												key={val.title}
											>
												{val.title}
											</li>
										</NavLink>
									);
								}
							})}
						</div>
					</div>
				</div>
				<Separator />
			</div>
		</div>
	);
}

export default Navbar;
