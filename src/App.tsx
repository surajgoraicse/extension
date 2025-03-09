import { HorizonatalItems } from "./components/Horizonatal";
import { Resizable } from "./components/Resizable";

function App() {
	return (
		<div className="w-full max-h-[calc(100vh-41px)]  flex flex-col h-full ">
			<HorizonatalItems />
			<Resizable className="flex-grow" />
		</div>
	);
}

export default App;
