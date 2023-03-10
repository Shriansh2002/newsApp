import { useState } from 'react';
import { data } from '../../content/data.json';

function Header() {
	const [showMenu, setShowMenu] = useState(false);

	const handleMenuToggle = () => {
		setShowMenu(!showMenu);
	};

	const listOfItems = data;

	return (
		<header className="bg-white text-black">
			<nav className="container mx-auto px-6 py-3 flex items-center justify-between">
				<div className="flex items-center">
					<a href="/">
						<img
							src="/logo.png"
							alt="Zee News logo"
							className="w-14"
						/>
					</a>
					<ul className="hidden md:flex items-center ml-4">
						{listOfItems.map((item, _idx) => (
							<li className="mr-4" key={_idx}>
								<a
									href={item.link}
									className="hover:text-red-700"
								>
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className="flex items-center">
					{/* <div className="hidden md:block">
						<button className="hover:text-gray-300">
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-1-5h2v2h-2v-2zm0-8h2v6h-2V7z"
								/>
							</svg>
						</button>
					</div> */}
					<div className="md:hidden">
						<button
							className="hover:text-gray-300"
							onClick={handleMenuToggle}
						>
							<svg
								className="h-6 w-6 fill-current"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								{showMenu ? (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M5 3h14v2H5V3zm0 7h14v2H5V10zm0 7h14v2H5v-2z"
									/>
								) : (
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</nav>
			{showMenu && (
				<div className="bg-gray-800">
					<div className="container mx-auto px-6 py-3">
						<ul className="md:hidden flex flex-col items-center text-white">
							<li className="my-3">
								<a href="/india" className="hover:underline">
									India
								</a>
							</li>
							<li className="mr-4">
								<a href="/world" className="hover:underline">
									World
								</a>
							</li>
							<li className="mr-4">
								<a href="/business" className="hover:underline">
									Business
								</a>
							</li>
							<li className="mr-4">
								<a
									href="/entertainment"
									className="hover:underline"
								>
									Entertainment
								</a>
							</li>
							<li className="mr-4">
								<a href="/sports" className="hover:underline">
									Sports
								</a>
							</li>
							<li className="mr-4">
								<a href="/health" className="hover:underline">
									Health
								</a>
							</li>
							<li className="mr-4">
								<a href="/science" className="hover:underline">
									Science
								</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
