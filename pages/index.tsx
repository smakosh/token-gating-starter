import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount } from "wagmi";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Token Gating boilerplate</title>
        <meta name="description" content="Token Gating boilerplate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {hasMounted && (
        <main className={styles.main}>
          <div className={styles.description}>
            <ConnectButton label="Sign-in with Ethereum" />
            {address && (
              <Link href="/gated" style={{ cursor: "pointer" }}>
                Go to Gated page
              </Link>
            )}
          </div>
        </main>
      )}
    </>
  );
}
