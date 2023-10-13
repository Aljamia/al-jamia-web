"use client";
import Preloader from "./components/Preloader/Preloader";
import LandingPage from "./landingpage/LandingPage";
import styles from "./page.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to demonstrate the loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          {isLoading ? (
            <Preloader />
          ) : (
            <div>
              <LandingPage />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
