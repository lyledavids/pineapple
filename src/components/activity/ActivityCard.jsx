import { ChatAltIcon, GlobeIcon, HeartIcon } from "@heroicons/react/outline";
import { UserGroupIcon, UserIcon } from "@heroicons/react/solid";
import styles from "../../styles/Activity.module.css";
import { useContext } from "react";
import { TransactionContext } from "../../context/context";

function ActivityCard() {

  const shortenAdd = address => {
    const a = address.slice(0,5)
    const b = address.slice(address.length - 4)

    return `${a}...${b}`
  }

  const { transactions, currentAccount } = useContext(TransactionContext);


  return (
    <div className={styles.container}>
      <div className={styles.tabContainer}>
        <p className={styles.tabTitle}>Your Recent Activity</p>
        <div className={styles.navigationContainer}>
          
          <div className={styles.navigationItem}>
            <UserIcon className={styles.navigationIcon} />
          </div>
          
        </div>
      </div>

      <div className={styles.feedList}>
        {transactions.map(({id,addressFrom,timestamp,message,amount,addressTo}, index) => (
            <div key={index} className={styles.feedItem}>
              <div className={styles.feedDetails}>
                <h3 className={styles.feedAuthor}>{shortenAdd(addressFrom)} to {shortenAdd(addressTo)}</h3>
                <span className={styles.feedCreatedAt}>{timestamp} ago</span>
                <p className={styles.feedBody}>{amount} CANTO | {message}</p>
              </div>
            </div>
          ))}
      </div>


    </div>
  );
}

export default ActivityCard;