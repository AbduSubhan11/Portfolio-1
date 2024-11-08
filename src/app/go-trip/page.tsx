import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <Image
        src={"/Images/go-trip.png"}
        alt="Go-trip"
        width={1500}
        height={100}
        className="md:p-20 p-8 "
      ></Image>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Go Trip
        </h1>
        <p className="text-gray-600 mb-6">
          Discover the world with ease through Go Trip, your go-to platform for
          hassle-free travel booking. Our platform is designed to make planning
          your dream vacation simple and enjoyable. Explore breathtaking
          destinations, book unforgettable trips, and access all the information
          you need for a seamless experience.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore Our Offerings
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            <strong>Top Destinations:</strong> Discover hand-picked travel spots
            tailored to your interests.
          </li>
          <li className="mb-2">
            <strong>Seamless Bookings:</strong> Enjoy quick and secure booking
            options with a user-friendly interface.
          </li>
          <li className="mb-2">
            <strong>Travel Insights:</strong> Get destination highlights,
            must-visit places, and local tips.
          </li>
          <li className="mb-2">
            <strong>24/7 Customer Support:</strong> Reach us anytime for
            assistance on your journey.
          </li>
        </ul>

        <p className="text-gray-600">
          At Go Trip, we are passionate about connecting travelers with their
          ideal destinations. Our mission is to make travel planning as
          enjoyable and straightforward as the trip itself. Have questions or
          need help with your booking? Our team is here to assist you. Reach out
          via our Contact page, and we&apos;ll make sure you’re ready for your
          next adventure! Start your journey with Go Trip and explore the beauty
          of travel!
        </p>

        <div>
          Visit our platform {""}
          <a
            target="_blank"
            href="https://the-go-trip.netlify.app/"
            className="text-blue-500 hover:underline font-bold"
          >
            Here
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
