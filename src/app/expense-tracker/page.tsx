import Image from "next/image";
import expense from "../../../public/Images/expense.png";
import Link from "next/link";
function Page() {
  return (
    <div>
      <Image src={expense} alt="expense" className="md:p-20 p-8 "></Image>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Expense Tracker
        </h1>
        <p className="text-gray-600 mb-6">
          Manage your daily expenses effortlessly with our Expense Tracker!
          Easily create, view, and organize your expenses in one place.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            <strong>Add Expenses:</strong> Enter the title, category, and amount
            of each expense and add it to the table.
          </li>
          <li className="mb-2">
            <strong>Sort by Amount:</strong> Click on the amount column to sort
            your expenses in ascending or descending order.
          </li>
          <li className="mb-2">
            <strong>Edit or Delete:</strong> Modify or remove an existing
            expense with a single click of the edit or delete buttons.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          How it Works
        </h2>
        <p className="text-gray-600 mb-4">
          1. Fill out the form by entering the title, category, and amount of
          the expense.
          <br />
          2. Once submitted, the expense is added to a dynamic table below.
          <br />
          3. You can sort the table by amount, and easily edit or delete any
          record as needed.
        </p>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Get Started Now
        </h3>
        <p className="text-gray-600 mb-4">
          Keep your spending in check and stay organized with our easy-to-use
          expense tracker! For more details or to start tracking your expenses,
          visit the platform{" "}
          <Link
            href="https://the-expense-tracker-pro.netlify.app/"
            target="_blank"
            className="text-blue-500 hover:underline font-bold"
          >
            here
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Page;
