import Link from "next/link";
import "@/app/globals.css";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-4 
       flex flex-col items-center w-[100%] bg-white text-black bottom-0">
        <nav className="flex flex-row">
          <Link href={""} className="link link-hover">
            About us
          </Link>
          <Link href={""} className="link link-hover">
            Contact
          </Link>
          <Link href={""} className="link link-hover">
            Jobs
          </Link>
          <Link href={""} className="link link-hover">
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
