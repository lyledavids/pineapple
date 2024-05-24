import styles from '../styles/Navbar.module.css';
import { ChevronDownIcon } from '@heroicons/react/outline'
import { TransactionContext } from '../context/context';
import { useContext } from 'react';
import userEvent from '@testing-library/user-event';

const Navbar = () => {

  const {currentAccount, connectWallet} = useContext(TransactionContext)

  const shortenAdd = address => {
    const a = address.slice(0,5)
    const b = address.slice(address.length - 4)

    return `${a}...${b}`
  }

  return (
  <nav className={styles.navigationContainer}>
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        Lemon
      </div>


      {currentAccount ? (
        <div className={styles.actionsContainer}>
        <p>User, 
          <span className={styles.accentColor}>{shortenAdd(currentAccount)}</span>
        </p>
      </div>
      ) : (
        <button className={styles.connectBtn} onClick={connectWallet}>
          Connect Wallet
        </button>
      )}
      
    </div>
  </nav>
  )
}

export default Navbar
