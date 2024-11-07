import Email from "../components/Email";
function Page() {
  return (
    <section className="text-[#202426] md:py-20 py-10">
      <h1 className="text-[#868381] text-center font-semibold md:pr-10">
        CONTACT
      </h1>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="space-y-10 md:p-32 p-5"
      >
        <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <input
            type="text"
            placeholder="Name"
            required
            className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
          />
        </div>

        <div>
          <textarea
            name="subject"
            placeholder="Subject"
            required
            className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
          ></textarea>
        </div>

        <div>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="border-b-2 border-gray-300 focus:border-[#202426] placeholder:text-[#202426] bg-transparent outline-none w-full h-12 p-2"
          ></textarea>
        </div>

        <div>
          <button className="relative inline-block md:px-6 px-3 py-2 font- text-white border-2 border-black group bg-[#202426] overflow-hidden ">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[#202426]">
              Submit
            </span>
            <span className="absolute inset-0 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100 origin-bottom "></span>
          </button>
        </div>
      </form>
      <Email />
    </section>
  );
}

export default Page;
