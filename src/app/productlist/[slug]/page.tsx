
import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';

interface Itype {
  title: string;
  image: string;
  slug: string;
  price: number;
  description: string;
}

async function ProductDetail({ params }: { params: { slug: string } }) {
  const data: Itype[] = await client.fetch(`
    *[_type == "product"]{
      image, slug, title, price, description
    }
  `);

  const res = data.find((item) => item.slug === String(params.slug));

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 md:px-8">
      {/* Card Layout */}
      <div className="bg-white border rounded-lg shadow-lg overflow-hidden md:flex md:space-x-8 p-6">
        {/* Image Section */}
        <div className="md:w-1/3 mb-6 md:mb-0">
        <img
  src={urlFor(res?.image ?? 'default').url()}  // Provide a fallback empty string
  alt={res?.title || 'Product Image'}   // Fallback for alt text if title is missing
  className="w-full h-64 object-cover rounded-lg shadow-md"
/>
        </div>

        {/* Product Details Section */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-semibold text-gray-800">{res?.title}</h1>
          <p className="text-xl text-gray-700 mt-2">${res?.price}</p>
          <p className="text-md text-gray-600 mt-4">{res?.description}</p>

          {/* Add to Cart Button */}
          <div className="mt-6">
            <Button>Add to Cart</Button>
          </div>
        </div>
      </div>

      
      
      <div className="mt-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Additional Information</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Material:</strong>
      </p>
      <p className="text-gray-600">
        High-quality, durable materials used for all our products.
      </p>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Dimensions:</strong>
      </p>
      <p className="text-gray-600">
        Varies by product. Please check individual product details for precise dimensions.
      </p>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Care Instructions:</strong>
      </p>
      <p className="text-gray-600">
        Follow the care instructions provided with each product to ensure longevity.
      </p>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Shipping Information:</strong>
      </p>
      <p className="text-gray-600">
        Free shipping on orders over $50. Shipping time typically ranges from 2-5 business days, depending on your location.
      </p>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Returns & Exchanges:</strong>
      </p>
      <p className="text-gray-600">
        We offer a 30-day return policy. Products must be returned in their original condition.
      </p>
    </div>
    <div className="space-y-2">
      <p className="font-medium text-gray-800">
        <strong>Warranty:</strong>
      </p>
      <p className="text-gray-600">
        All products come with a 1-year warranty against defects.
      </p>
    </div>
  </div>
</div>


    </div>
  );
}

export default ProductDetail;
