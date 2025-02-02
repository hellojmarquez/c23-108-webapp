import { TiShoppingCart } from 'react-icons/ti';
import { motion } from 'framer-motion';
/* eslint-disable react/prop-types */
const Snacks = ({ addToCart }) => {
	const handleAddToCart = product => {
		console.log(product);
		addToCart({
			id: product.id,
			img: product.imagen,
			nombre: product.nombre,
			precio: product.precio,
		});
	};
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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1 }}
			style={{ backgroundImage: "url('/src/assets/img/bg_food.jpg')" }}
			className="container mx-auto p-8 bg-fixed"
		>
			<h2 className="text-8xl text-emerald-950 text-center font-bold mb-12 font-handwritten drop-shadow-lg">
				Snacks Disponibles
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90%] mx-auto">
				{snacks.map(snack => (
					<div
						key={snack.id}
						className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-emerald-400"
					>
						<div className="relative mb-6">
							<img
								src={snack.imagen}
								alt={snack.nombre}
								className="w-full h-56 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow"
							/>
							<div className="absolute top-3 right-3 bg-amber-500 text-white px-4 py-1 rounded-full font-semibold shadow-lg">
								${snack.precio.toFixed(2)}
							</div>
						</div>
						<h3 className="text-2xl font-bold text-emerald-950 mb-2">
							{snack.nombre}
						</h3>
						<p className="text-emerald-700 mb-4 font-medium">
							{snack.descripcion}
						</p>
						<button
							className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center justify-center px-6 py-4 rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-md hover:shadow-lg gap-3 font-semibold"
							onClick={() => handleAddToCart(snack)}
						>
							<TiShoppingCart className="text-2xl" />
							<p>Agregar al Carrito</p>
						</button>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Snacks;
