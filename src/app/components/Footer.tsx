import Link from "next/link";

function Footer() {
  return (
    <footer className="flex space-x-20 md:m-20 m-5 py-10  border-black border-b md:text-xl text-[4vw] text-[#202426]">
      {/* PAGES */}
      <div className="space-y-5">
        <h1 className="text-[#868381] font-semibold">PAGES</h1>
        <div className="flex flex-col">
          <Link href="/" className="hover:underline underline-offset-2">
            Work
          </Link>
          <Link href="/contact" className="hover:underline underline-offset-2">
            Contact
          </Link>
        </div>
      </div>

      {/* CONNECT */}
      <div className="space-y-5">
        <h1 className="text-[#868381] font-semibold">CONNECT</h1>
        <div className="flex flex-col">
          <Link href="https://github.com/AbduSubhan11">
            ↗<span className="hover:underline underline-offset-2">GitHub</span>
          </Link>
          <Link href="/">
            ↗
            <span className="hover:underline underline-offset-2">Linkedin</span>
          </Link>
          <Link href="/">
            ↗
            <span className="hover:underline underline-offset-2">
              Instagram
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
