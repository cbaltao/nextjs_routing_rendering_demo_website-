import classes from "@/app/globals.css";
import Link from "next/link";
import logoImg from "@/assets/logo.jpg";
import Image from "next/image";

export default function MainHeader() {
  return (
    <>
      <header id="main-header">
        <Link id="logo" href="/">
          <Image id="logo" src={logoImg} alt="An open book" />
        </Link>

        <nav>
          <ul className={classes.nav}>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
