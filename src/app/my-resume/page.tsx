import Image from "next/image";
import staticResume from "../../../public/Images/static.png"
function page() {
  return (
    <div>
        <Image src={staticResume} alt="Myresume" className="md:p-20 p-8 "></Image>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Frontend Developer
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome to my resume! I am a passionate and skilled frontend developer
          with hands-on experience in building responsive, user-friendly
          websites and web applications. Whether it&apos;s bringing a creative design
          to life or optimizing the performance of a web project, I am dedicated
          to delivering high-quality solutions.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Key Skills
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">
            HTML, CSS, JavaScript, React, and Tailwind CSS
          </li>
          <li className="mb-2">
            Responsive Design and Cross-Browser Compatibility
          </li>
          <li className="mb-2">Performance Optimization and Accessibility</li>
          <li className="mb-2">Version Control (Git, GitHub)</li>
        </ul>

        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Freelance Opportunities
        </h3>
        <p className="text-gray-600 mb-4">
          I am available to work as a freelancer for frontend development
          projects. If you&apos;re looking to hire a talented and flexible developer
          for your project, feel free to get in touch with me.
        </p>

        <p className="text-gray-600">
          Let&apos;s work together to bring your vision to life with modern, scalable
          frontend technologies.
        </p>

        <div className="mt-6">
          Visit the platform {""}
          <a
            href="https://subhan-static-resume.netlify.app/"
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
