import React from "react";
import styles from "./register.module.scss";
import Link from "next/link";

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
            <input type="text" placeholder="Password"/>
          </div>
          <Link href="" className={styles["link-base"]}>Forgot Password?</Link>
          <div>
            <button>Sign in</button>
          </div>
        </div>
        <div>
          <span>Forgot Password?</span>
          <span>Don't have an account?</span>
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
