import data from "@/data/data";

function Navbar() {
	return (
		<div className="sticky my-3  top-4 z-5 border border-gray-700/50 mx-8  lg:mx-auto max-w-4xl rounded-xl backdrop-blur-md  bg-gray-950/50 ">
			<div className="flex items-center justify-between px-6 py-3  list-none">
				<div className="font-bold text-lg ">Vision AI</div>
				<div className="flex items-center justify-end flex-1 ">
					{data.navbar.map((val) => {
						if (val.active) {
							return (
								<li className="pl-4 md:pl-8" key={val.title}>
									{val.title}
								</li>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
}

export default Navbar;
