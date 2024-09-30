import Image from "next/image";
import country from "../../../public/Images/country.png";
import Link from "next/link";
function page() {
  return (
    <div>
      <Image src={country} alt="country" className="md:p-20 p-8" />
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Country Explorer
        </h1>
        <p className="text-gray-600 mb-6">
          Explore the world with our interactive platform! Each country is
          represented by a card featuring the national flag. Simply click on a
          country&apos;s card, and you&apos;ll be taken to a page that provides in-depth
          information about that country.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features</h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            <strong>Bordering Countries:</strong> See which countries share
            borders with the one you&apos;re exploring.
          </li>
          <li className="mb-2">
            <strong>Capital:</strong> Discover the capital city and learn key
            facts about it.
          </li>
          <li className="mb-2">
            <strong>Currencies:</strong> Get information about the country&apos;s
            official currency, including its symbol and usage.
          </li>
          <li className="mb-2">
            <strong>Languages:</strong> Learn what languages are spoken in the
            country.
          </li>
          <li className="mb-2">
            <strong>Population and Area:</strong> Find out the population size
            and the total land area of the country.
          </li>
        </ul>

        <p className="text-gray-600">
          Whether you&apos;re planning to travel or just curious about different
          countries, <strong>Country Explorer</strong> provides a fun and
          educational way to learn about the world!
        </p>
        <p className="text-gray-600">
          For more information, visit the platform{" "}
          <Link href="https://all-rest-countries-info.netlify.app/" className   ="text-blue-700 font-bold hover:underline">
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default page;
