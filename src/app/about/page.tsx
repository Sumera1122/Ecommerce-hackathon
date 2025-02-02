// AboutUs.tsx
import Image from 'next/image'; // Assuming you're using Next.js Image component for optimization

const About = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          About Us
        </h2>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-between space-y-8 sm:space-y-0">
          <div className="sm:w-1/2">
            <Image
              src="/images/images.png"
              alt="Our E-Commerce Store"
              width={926}
              height={426}
              className="w-full max-w-[150px] md:max-w-[926px] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="sm:w-1/2  space-y-4">
            <p className="text-[20px] sm:text-[18px] mb-4">
              Welcome to our e-commerce store, where we believe in offering high-quality products that make a difference.
              We are passionate about curating the best items for our customers, ensuring top-notch service, and providing a seamless shopping experience.
            </p>
            <p className="text-[20px] sm:text-[18px] mb-4">
              Our mission is to bring you products that are not only stylish but also built to last. We carefully select each item, keeping both quality and affordability in mind.
            </p>
            <p className="text-[20px] sm:text-[18px]">
              Join us in our journey as we continue to grow, innovate, and bring you products that enhance your life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
