import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Item1 } from "./Item1";
import { Item2 } from "./Item2";
import { Item3 } from "./Item3";
import clsx from "clsx";

interface ResizableProps {
	className?: string;
}

export function Resizable({ className = "" }: ResizableProps) {
	return (
		<div className={clsx("flex-grow flex w-full px-4 ", className)}>
			<ResizablePanelGroup
				direction="horizontal"
				className="rounded-lg border w-full h-full"
			>
				<ResizablePanel defaultSize={50}>
					<Item1 />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={50}>
					<Item2 />
				</ResizablePanel>
				<ResizableHandle withHandle />
				<ResizablePanel defaultSize={50}>
					<Item3 />
				</ResizablePanel>
			</ResizablePanelGroup>
		</div>
	);
}

