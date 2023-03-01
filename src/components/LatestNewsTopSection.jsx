const LatestNewsTopSection = () => {
	return (
		<div className="flex flex-col md:flex-row gap-2">
			<div className="bg-white w-full md:w-1/2  shadow pb-2 overflow-hidden">
				<div className="h-64 bg-gray-200 overflow-hidden">
					<img
						src="https://static.toiimg.com/thumb/imgsize-23694,msid-98322736,width-600,resizemode-4/98322736.jpg"
						alt="news"
						className="w-full h-full transition duration-300 hover:opacity-75"
					/>
				</div>
				<div className="px-4 py-2">
					<h2 className="text-lg font-bold mb-2">
						World needs early warning system for virus : Bill Gates
					</h2>
					<p className="text-gray-700 text-sm mb-4">
						MUMBAI: Billionaire-philanthropist Bill Gates, on his
						first tour of India since the pandemic, does not mince
						his words when he talks about lessons from the tragedy
						wrought by Covid. Bill Gates, co-chair and trustee of
						Bill & Melinda Gates Foundation, is in India to get a
						sense of the country{'’'}s recovery after the Covid-19
						pandemic.
					</p>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600"
					>
						Read More
					</a>
				</div>
			</div>
			<div className="bg-white w-full md:w-1/2 shadow pb-2 overflow-hidden">
				<div className="h-64  bg-gray-200 overflow-hidden">
					<img
						src="https://static.toiimg.com/thumb/imgsize-59870,msid-98339228,width-700,resizemode-4/98339228.jpg"
						alt="news"
						className="w-full h-full transition duration-300 hover:opacity-75"
					/>
				</div>
				<div className="px-4 py-2">
					<h2 className="text-lg font-bold mb-2">
						Delhi News Live Updates: If Manish Sisodia joins BJP
						today, he will be released tomorrow
					</h2>
					<p className="text-gray-700 text-sm mb-4">
						It has been decided that AAP will do door-to-door
						campaigning & go to every house, and speak to every
						person. We'll explain to them how PM is going to the
						extreme like Indira Gandhi did once. People will give an
						answer, they're watching everything & are angry.
					</p>
					<a
						href="/"
						target="_blank"
						rel="noopener noreferrer"
						className="bg-blue-700 text-white font-bold py-2 px-6 rounded-md hover:bg-blue-600"
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
};

export default LatestNewsTopSection;
