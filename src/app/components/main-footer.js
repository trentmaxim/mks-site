import Link from "next/link";
import "@/app/globals.css";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-4 
       flex flex-col items-center w-[100%]bg-white text-black dark:bg-black dark:text-white bottom-0">
        <nav className="flex flex-row">
          <Link href={""} className="link link-hover hover:text-blue-500">
            About us
            
          </Link>
          <Link href={""} className="link link-hover hover:text-blue-500">
            Contact
          </Link>
          <Link href={""} className="link link-hover hover:text-blue-500">
            Jobs
          </Link>
          <Link href={""} className="link link-hover hover:text-blue-500">
            Press kit
          </Link>
        </nav>
        <div className="flex flex-row align-middle">
          <p>Copyright ©- All right reserved by </p>
        </div>
      </footer>
    </>
  );
}
