import React from "react";
import styles from "./register.module.scss";
import Link from "next/link";
import Image from "next/image";
import Visibility from "../../../public/visibility.png";


export default function page() {
  return (
    <div className={styles["register-wrapper"]}>
      <div className={styles["register-form"]}>
        <div>
          <h1>Sign In</h1>
          <div>
            <input type="text" placeholder="Email"/>
          </div>
          <div>
            <Image src={Visibility} alt="show password"/>
            <input type="text" placeholder="Password"/>
          </div>
          <Link href="">Forgot Password?</Link>
          <div>
            <button>Sign in</button>
          </div>
        </div>
        <div>
          <button>Sign Up Here!</button>
        </div>
        <div>
          <div>
            <span>Sign in with Google</span>
          </div>
          <div>
            <span>Google</span>
          </div>
        </div>
      </div>
    </div>
  )
}
