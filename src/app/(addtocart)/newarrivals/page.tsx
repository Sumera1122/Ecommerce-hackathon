
import { Button } from '@/components/ui/button'; 
import { client } from '@/sanity/lib/client'; 
import { urlFor } from '@/sanity/lib/image';

interface Product {
  title: string;
  image: string;  
  price: number;
  slug: string;
}

const NewArrivals = async () => {
  // This can now be async
  const products: Product[] = await client.fetch(`*[_type == "product"]{
    title, image, price, slug
  }`);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={urlFor(product.image).url()}  
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                  <h3 className="text-white text-lg font-semibold">{product.title}</h3>
                  <p className="text-white text-sm">${product.price}</p>
                </div>
              </div>
              <div className="p-4">
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;







// my code i wrote and uper code is with changings that chat gpt corrected because of mistakes while deploying on vercel
/* import { Button } from '@/components/ui/button'; 
import { client } from '@/sanity/lib/client'; 
import { urlFor } from '@/sanity/lib/image';

interface Product {
  title: string;
  image: string;  
  price: number;
  slug: string;
}

const NewArrivals = async () => {
  
  const products: Product[] = await client.fetch(`*[_type == "product"]{
    title, image, price, slug
  }`);

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          New Arrivals
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.slug} className="bg-white border rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={urlFor(product.image).url()}  
                  alt={product.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
                  <h3 className="text-white text-lg font-semibold">{product.title}</h3>
                  <p className="text-white text-sm">${product.price}</p>
                </div>
              </div>
              <div className="p-4">
                <Button className="w-full">Add to Cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;*/