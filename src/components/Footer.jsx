import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 py-6">
			<div className="container mx-auto flex flex-col md:flex-row items-center  px-6">
				<div className="text-gray-500 font-semibold">
					&copy; 2023 NEWSiE
				</div>
				<div className="mx-auto">
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
			</div>
		</footer>
	);
};

export default Footer;
