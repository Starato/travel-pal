import Image from "next/image";
import Plane from "../../public/landingPage/plane.png";
import BigBen from "../../public/landingPage/big-ben.webp";
import Sunny from "../../public/landingPage/sunny.png";
import Pindrop from "../../public/landingPage/pin_drop.png";
import Public from "../../public/landingPage/public.png";
import PseudoText from "../../public/landingPage/pseudo_text.png";
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
    <main>
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
      <div className={styles.content}>
        <div className={styles["content-description"]}>
          <span>Start your journey here</span>

          <p>
            Build the perfect itinerary for your trip with the all-in-one
            travel planner, Travel Pal.
          </p>

          <button>Create my journal</button>

          <div className={styles.journal}>
            <div className={styles["journal-left"]}>
              <Image src={BigBen} alt="journal photo"/>
            </div>
            <div className={styles["journal-right"]}>
              <div className={styles["journal-detail"]}>
                <span>Septembet 27, 2023</span>
              </div>

              <div className={styles["journal-detail"]}>
                <div>
                  <Image src={Public} alt="country"/>
                </div>
                <div>
                  <span>United Kingdom</span>
                </div>
              </div>

              <div className={styles["journal-detail"]}>
                <div>
                  <Image src={Pindrop} alt="location"/>
                </div>
                <div>
                  <span>Big Ben</span>
                </div>
              </div>

              <div className={styles["journal-detail"]}>
                <div>
                  <Image src={Sunny} alt="weather"/>
                </div>
                <div>
                  <span>Sunny</span>
                </div>
              </div>

              <div className={styles["journal-detail"]}>
                <Image src={PseudoText} alt="text"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
