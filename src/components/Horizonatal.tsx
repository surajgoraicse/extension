import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "./ui/separator";
import clsx from "clsx";

interface HorizontalItemsProps {
	className?: string;
}
export interface NotesI {
	artist: string;
	art: string;
	discription: string;
}

export const notes: NotesI[] = [
	{
		artist: "Ornella Binni",
		art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Tom Byrom",
		art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
	{
		artist: "Vladimir Malyavko",
		art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
		discription:
			"dsjkhfdf  sdfkjdshfjsd jhsdjkfhjkds jhsdkjfsjkd kjshdfjkdsf sdhfkjsd",
	},
];

export function HorizonatalItems({ className = "" }: HorizontalItemsProps) {
	return (
		<ScrollArea
			className={clsx(
				"m-4 pl-2 whitespace-nowrap rounded-md border ",
				className
			)}
		>
			<div className="flex w-max space-x-4 p-4">
				{notes.map(() => {
					return (
						<div className="list-none h-[360px] w-[300px] border rounded-md p-5">
							<div className="h-full flex flex-col gap-3 justify-between">
								<div className=" font-bold overflow-hidden text-ellipsis">
									titlexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
								</div>
								<Separator />
								<div className="mt-1 px-1 w-full h-full  overflow-hidden break-words whitespace-normal text-[14px]">
									<p className="">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Tenetur repellat assumenda suscipit a saepe aspernatur eaque
										dolorem! Doloremque dolor exercitationem magni aliquam.
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Voluptatem vitae sunt totam similique ducimus porro nobis,
										et odit rem obcaecati voluptate doloribus aperiam amet esse
										corrupti ipsum. Sit, quia placeat!
									</p>
								</div>
								<div className="flex  h-10 gap-4 overflow-hidden items-center ">
									<li className="px-2  border font-semibold rounded-md ">
										acad
									</li>
									<li className="px-2  border font-semibold rounded-md ">
										dsa
									</li>
									<li className="px-2  border font-semibold rounded-md ">
										dev
									</li>
									<li className="px-2  border font-semibold rounded-md ">
										self
									</li>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<ScrollBar orientation="horizontal" />
		</ScrollArea>
	);
}
