const Snacks = () => {
	const snacks = [
		{
			id: 1,
			nombre: 'Papas Fritas',
			precio: 2.0,
			descripcion: 'Papas crujientes y saladas',
			imagen:
				'https://images.unsplash.com/photo-1613919113640-25732ec5e61f?q=80&w=300',
		},
		{
			id: 2,
			nombre: 'Nachos',
			precio: 3.5,
			descripcion: 'Con queso fundido',
			imagen:
				'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?q=80&w=300',
		},
		{
			id: 3,
			nombre: 'Palomitas',
			precio: 2.5,
			descripcion: 'Palomitas con mantequilla',
			imagen:
				'https://images.unsplash.com/photo-1578849278619-e73505e9610f?q=80&w=300',
		},
		{
			id: 4,
			nombre: 'Pretzels',
			precio: 2.0,
			descripcion: 'Pretzels salados',
			imagen:
				'https://images.unsplash.com/photo-1595475207225-428b62bda831?q=80&w=300',
		},
		{
			id: 5,
			nombre: 'Maní',
			precio: 1.5,
			descripcion: 'Maní tostado',
			imagen:
				'https://images.unsplash.com/photo-1574492543172-5e48d3112c7b?q=80&w=300',
		},
		{
			id: 6,
			nombre: 'Doritos',
			precio: 2.0,
			descripcion: 'Tortillas de maíz',
			imagen:
				'https://images.unsplash.com/photo-1600952841320-db92ec4047ca?q=80&w=300',
		},
	];

	return (
		<div>
			<div
				style={{ backgroundImage: "url('/src/assets/img/bg_food.jpg')" }}
				className="container mx-auto p-8 bg-fixed"
			>
				<h2 className="text-7xl text-emerald-950 text-center font-bold mb-4 font-handwritten">
					Snacks Disponibles
				</h2>
				<div className="grid bg-slate-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[90%] mx-auto">
					{snacks.map(snack => (
						<div
							key={snack.id}
							className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
						>
							<img
								src={snack.imagen}
								alt={snack.nombre}
								className="w-full h-48 object-cover rounded-lg mb-4"
							/>
							<h3 className="text-xl font-semibold">{snack.nombre}</h3>
							<p className="text-gray-600">{snack.descripcion}</p>
							<p className="text-green-600 font-bold mt-2">
								${snack.precio.toFixed(2)}
							</p>
							<button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full">
								Agregar al Carrito
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Snacks;
