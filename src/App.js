
import styles from './styles/App.module.css'
import Navbar from './components/Navbar'
import TransactionForm from './components/transaction/TransactionForm';
import Activity from './components/activity/ActivityCard'

function App() {
  return (
    <div className={styles.wrapper}>
     <header>
      <Navbar />
     </header>
     <main className={styles.mainContainer}>
      <div className={styles.activityContainer}><Activity /></div>
      <div className={styles.sideContainer}>
        <TransactionForm />
      </div>
     </main>
    </div>
  );
}

export default App;
