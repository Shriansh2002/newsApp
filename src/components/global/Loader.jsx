import React from 'react';

const Loader = () => {
	return (
		<div className="flex justify-center items-center mt-12">
			<div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
		</div>
	);
};

export default Loader;
