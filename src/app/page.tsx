import Image from "next/image";
import Plane from "../../public/plane.png";
import styles from "./page.module.scss";
import { Kaushan_Script } from "next/font/google";
import Link from "next/link";

const kaushan = Kaushan_Script({
  subsets: ["latin"],
  weight: ['400'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
          <Image src={Plane} alt="logo"/>
          <div>
            <h1 className={kaushan.className}>Travel Pal</h1>
          </div>
          <div>
            <Link href="">Sign in</Link>
            <button>Sign up</button>
          </div>
      </div>
    </main>
  );
}
