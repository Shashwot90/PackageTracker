import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import config from "../utils/config";
import { useRouter } from 'next/router';
import appwrite from "../utils/appwrite-connection";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [parcelID, setParcelID] = useState("");
  const router = useRouter();

  const getParcelDetails = async (trackingNo) => {
    try {
      setLoading(true);
      const response = await appwrite.database.getDocument(
        config.appwriteDatabaseID,
        config.appwriteParcelsID,
        trackingNo
      );
      const resolvedResponse = {
        ...(response || {}),
        name: response["parcel-name"]
      };
      router.push({
        pathname: './tracker',
        query: resolvedResponse
      })
    } catch (err) {
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Parcel Tracker</title>
        <meta name="description" content="Parcel Tracking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          🛳️ Parcel Tracking App
        </h1>
        {!isLoading ? (
          <div className={styles.inputRow}>
            <input
              type="text"
              className={styles.input}
              value={parcelID}
              onChange={(e) => setParcelID(e.target.value)}
              placeholder="Enter your parcel's tracking number"
            />
            <button
              className={styles.button}
              onClick={() => getParcelDetails(parcelID)}
              disabled={!parcelID.trim()}
            >
              Track
            </button>
          </div>
        ) : (
          <div style={{marginTop: '1.5rem', color: '#6366f1'}}>Loading...</div>
        )}
      </main>
    </div>
  );
}