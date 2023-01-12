import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function BuyNft() {
  return (
    <>
      <Head>
        <title>Buy NFT</title>
        <meta name="description" content="Buy NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Buy NFT</p>
        </div>
      </main>
    </>
  );
}
