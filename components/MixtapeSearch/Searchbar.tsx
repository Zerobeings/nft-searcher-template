import MixtapeSearch from "mixtape-search"
import { useState, useEffect } from "react";
import styles from "./Searchbar.module.css";

export default function MixtapeSearchPackNOSSR(){
  const [fetchedNFTs, setFetchedNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleNFTsFetched = (nfts: any[]) => {
        setLoading(true);
        setFetchedNFTs(nfts);
        setInterval(() => {
            setLoading(false);
        }, 1000);
  };
  console.log("fetchedNFTs", fetchedNFTs);

  return (
    <>
    <h1 className={styles.mainHeading}>A searchbar for NFTs</h1>
    <h3 className={styles.heading}>yarn add mixtape-search</h3>
    <div className={styles.container}>
      <div className={styles.mixtape}> 
      <button className={styles.button} onClick={() => setDarkMode(!darkMode)}>Toggle Searchbar Theme</button>
          <MixtapeSearch 
              activeNetwork={"ethereum"}
              theme={darkMode ? "dark" : "light"} // "light" or "dark"
              onNFTsFetched={handleNFTsFetched}
          />
      </div>
      <div className={styles.console}>
          <h4>NFT Console</h4>
          {fetchedNFTs.length === 0 ? (
            <p>No NFTs fetched yet...</p>
          ) : (
              <>
              {!loading ? fetchedNFTs.map((nft, index) => (
                  <div key={index}>
                  <pre>{JSON.stringify(nft, null, 2)}</pre>
                  </div>
              ))
              : <div style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  }}>
                  Loading...
                </div>
              }
              </>
          )}
      </div>
  </div>
</>

  )
}