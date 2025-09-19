export function EmailEnvelope3D() {
	return (
		<div className="relative w-80 h-80 flex items-center justify-center">
			{/* Envelope base */}
			<div className="relative">
				{/* Main envelope body */}
				<div className="w-64 h-40 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 rounded-lg transform rotate-12 shadow-2xl">
					{/* Envelope flap */}
					<div className="absolute -top-6 left-0 w-full h-12 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-t-lg transform -rotate-12 origin-bottom"></div>
				</div>

				{/* Papers coming out */}
				<div className="absolute -top-8 left-8 transform -rotate-12">
					{/* Paper 1 */}
					<div className="w-32 h-40 bg-white rounded-lg shadow-lg transform rotate-6 relative">
						<div className="p-4 space-y-2">
							<div className="h-2 bg-gray-300 rounded w-3/4"></div>
							<div className="h-2 bg-gray-300 rounded w-full"></div>
							<div className="h-2 bg-gray-300 rounded w-2/3"></div>
						</div>
					</div>

					{/* Paper 2 */}
					<div className="absolute top-2 left-4 w-32 h-40 bg-white rounded-lg shadow-lg transform -rotate-3">
						<div className="p-4 space-y-2">
							<div className="h-2 bg-gray-300 rounded w-2/3"></div>
							<div className="h-2 bg-gray-300 rounded w-full"></div>
							<div className="h-2 bg-gray-300 rounded w-3/4"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
