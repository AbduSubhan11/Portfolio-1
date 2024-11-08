import React from "react";
import ecommerce from "../../../public/Images/e-commerce.png";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <div>
      <Image src={ecommerce} alt="ecommerce" className="md:p-20 p-8" />
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          E-Commerce Platform
        </h1>
        <p className="text-gray-600 mb-6">
          Experience seamless online shopping with our E-Commerce Platform!
          Browse, add to cart, and purchase your favorite items effortlessly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            <strong>Shopping Cart:</strong> Easily add items to your cart and
            review your selections before checkout.
          </li>
          <li className="mb-2">
            <strong>Wishlist:</strong> Save your favorite products for later and
            never miss out on what you love.
          </li>
          <li className="mb-2">
            <strong>Free Shipping:</strong> Enjoy free shipping on all orders,
            making your shopping experience even more enjoyable.
          </li>
          <li className="mb-2">
            <strong>Customer Support:</strong> Have questions or need
            assistance? Our customer support team is here to help.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How it Works
        </h2>
        <p className="text-gray-600 mb-4">
          1. Browse through our wide range of products and add your desired
          items to the cart.
          <br />
          2. Review your cart and proceed to checkout.
          <br />
          3. Enjoy free shipping and excellent customer support throughout your
          shopping experience.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Start Shopping Now with Capital.Shop
        </h3>
        <p className="text-gray-600 mb-4">
          Keep your spending in check and stay organized with our easy-to-use
          E-commerce plateform! For more details or to start shopping with
          Capital.Shop, visit the platform{" "}
          <Link
            href="https://the-capitalshop.netlify.app/"
            target="_blank"
            className="text-blue-500 hover:underline font-bold"
          >
            Here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
