import { useEffect, useState } from 'react';
import appwrite from '../utils/appwrite-connection';
import config from '../utils/config';
import { Query } from 'appwrite';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

export default function Tracker() {
  const [notifications, setNotifications] = useState([]);
  const [parcelData, setParcelData] = useState();
  const router = useRouter();

  const getParcelEvents = async (parcelNo) => {
    try {
      const response = await appwrite.database.listDocuments(
        config.appwriteDatabaseID,
        config.appwriteParcelEventsID,
        [Query.equal('parcelID', [parcelNo])]
      );
      const data = response.documents.map((document) => {
        const date = new Date(document.$updatedAt);
        return {
          ...document,
          bgColor: 'bg-green-500',
          datetime: date.toLocaleString(),
        };
      });
      setNotifications(() => data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setParcelData(() => router.query);
    if (router.query.$id) getParcelEvents(router.query.$id);
  }, [router.query]);

  return (
    <div className={styles.trackerContainer}>
      <div className={styles.trackerCard}>
        <div className="mb-6" style={{ width: '100%', textAlign: 'center' }}>
          <h1 className={styles.trackerTitle}>Parcel Information</h1>
          <h2 className={styles.trackerSubtitle}>Parcel Name: <span>{parcelData?.name}</span></h2>
          <h2 className={styles.trackerInfo}>Parcel No: <span>{parcelData?.$id}</span></h2>
          <h2 className={styles.trackerStatus}>Status: <span>{notifications?.[0]?.status || 'Unknown'}</span></h2>
        </div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <a href="./" className={styles.trackerHomeBtn}>Home</a>
        </div>
      </div>
    </div>
  );
}