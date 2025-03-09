import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function Item2() {
	return (
		<div className="p-4 h-full flex flex-col  ">
			<div className="font-semibold mb-2 pl-6">Quick Note</div>
			<ScrollArea className=" flex-grow w-full max-h-[calc(100vh-540px)] rounded-md border">
				<div className="p-4">
					<h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
					{tags.map((tag) => (
						<>
							<div key={tag} className="text-sm">
								{tag}
							</div>
							<Separator className="my-2" />
						</>
					))}
				</div>
			</ScrollArea>
		</div>
	);
}
