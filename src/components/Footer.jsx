import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 py-6">
			<div className="container mx-auto flex items-center justify-between px-6">
				<div className="text-gray-500 font-semibold">
					&copy; 2023 NEWSiE
				</div>
				<div>
					<p className="text-white">
						Made with ❤️ by{' '}
						<span className="text-blue-500">
							<a
								href="https://shrianshagarwal.in"
								rel="noreferrer noopener"
								target="_blank"
							>
								Shriansh Agarwal
							</a>
						</span>
					</p>
				</div>
				<div className="flex items-center">
					<div className="text-gray-500 mr-4">Follow us:</div>
					<a
						href="#"
						className="text-gray-500 hover:text-gray-400 mr-4"
					>
						<i className="fab fa-facebook"></i>
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-gray-400 mr-4"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-gray-400 mr-4"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<a href="#" className="text-gray-500 hover:text-gray-400">
						<i className="fab fa-youtube"></i>
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
