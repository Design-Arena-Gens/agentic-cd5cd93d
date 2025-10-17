import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'Gummy Brains',
    price: '$5.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,brain',
  },
  {
    id: 2,
    name: 'Sour Worms',
    price: '$4.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,worms',
  },
  {
    id: 3,
    name: 'Chocolate Skulls',
    price: '$7.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,skull',
  },
  {
    id: 4,
    name: 'Pumpkin Gummies',
    price: '$3.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,pumpkin',
  },
  {
    id: 5,
    name: 'Vampire Fangs',
    price: '$2.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,vampire',
  },
  {
    id: 6,
    name: 'Witch Brew Pops',
    price: '$6.99',
    image: 'https://source.unsplash.com/random/400x400?halloween,candy,witch',
  },
];

export default function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="bg-gray-900 py-4 px-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-orange-500 tracking-wider">Spooky Treats</h1>
        <nav>
          <a href="#" className="text-lg hover:text-orange-500 transition-colors">Home</a>
          <a href="#" className="text-lg ml-8 hover:text-orange-500 transition-colors">Candies</a>
          <a href="#" className="text-lg ml-8 hover:text-orange-500 transition-colors">About</a>
        </nav>
      </header>

      <main className="container mx-auto px-8 py-16">
        <section className="text-center">
          <h2 className="text-6xl font-extrabold mb-4">
            <span className="text-orange-500">Trick or Treat</span> Yo' Self
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            The spookiest, most delicious candies for your Halloween.
          </p>
          <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors text-lg">
            Shop Now
          </button>
        </section>

        <section className="mt-24">
          <h3 className="text-4xl font-bold mb-12 text-center">Our Candy Collection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-900 rounded-lg overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-2">{product.name}</h4>
                  <p className="text-lg text-orange-500 font-semibold">{product.price}</p>
                  <button className="mt-4 w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-8 text-center">
        <p className="text-gray-400">&copy; 2025 Spooky Treats. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-2xl mx-3 hover:text-orange-500 transition-colors">X</a>
          <a href="#" className="text-2xl mx-3 hover:text-orange-500 transition-colors">Instagram</a>
          <a href="#" className="text-2xl mx-3 hover:text-orange-500 transition-colors">TikTok</a>
        </div>
      </footer>
    </div>
  );
}
