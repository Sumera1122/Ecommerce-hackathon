
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Itype {
  title: string,
  image: string,
  slug: string,
  price: number
}

const ProductList = async () => {
  // const data: Itype[] = await getData();
  const res:Itype[]=await client.fetch(`*[_type == "product"]{
        image, slug, title, price
        }`)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {
  res.map((product) => (
    <div key={product.slug} className="bg-white border rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-1 aspect-h-1">
        <img
          src={urlFor(product.image).url()}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h2 className="font-semibold text-xl mb-2">{product.title}</h2>
        <p className="text-lg text-gray-700 mb-4">${product.price}</p>
        <a href={`/productlist/${product.slug}`} className="text-blue-500 hover:underline">
          View Product
        </a>
      </div>
    </div>
  ))
}

    </div>
  );
}

export default ProductList;
