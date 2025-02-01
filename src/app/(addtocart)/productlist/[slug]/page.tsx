import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';



interface Itype {
  title: string;
  image: string;
  slug: string;
  price: number;
  description:string;
}

async function ProductDetail({params}:{params:{slug:string}}) {
    const data:Itype[] = await client.fetch(`*[_type == "product"]{
        image, slug, title, price , description
        }`)
       
        const res = data.find((item) => item.slug === String(params.slug)); 

    return(
        <div className='flex mt-20'>
            <div className='w-1/4'>
            <img
                src={urlFor(res?.image!).url()}
                alt={res?.title}
                className="w-60 h-20 object-cover"
              />
            </div >
            <div className='w-3/4'>

            <h1>{res?.title}</h1>
            <h1>{res?.price}</h1>
            <h1>{res?.description}</h1>

            <div>

            </div>
            <Button> ADD TO CART</Button>
            </div>

            <div>
                <h2>Additional information</h2>
                
            </div>

            

            
        </div>
    )
}
export default ProductDetail;