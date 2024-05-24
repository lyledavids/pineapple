import styles from '../../styles/Transaction.module.css'
import { useContext } from "react";
import { TransactionContext } from "../../context/context";
import { SwitchVerticalIcon,CurrencyDollarIcon } from '@heroicons/react/outline'
function TransactionForm() {

  const {sendTransaction,setaddressTo,addressTo,setamount,amount,message,setMessage} = useContext(TransactionContext);

  const handleSubmit = e => {
    e.preventDefault()
    if (!addressTo || !amount || !message) return
    sendTransaction()
  }
  return (
  <div className={styles.container}>
    <h3 className={styles.formTitle}>Send Payment</h3>
    <form onSubmit={handleSubmit}>
      <div className={styles.formContainer}>
        
        <div className={styles.formBody}>
          <div className={styles.formInputContainer}>
            <h4 className={styles.formInputTitle}>To</h4>
            <input 
              className={styles.formInput}
              type='text'
              value={addressTo}
              onChange={e => setaddressTo(e.target.value)}
              />
          </div>
          <div className={styles.formInputContainer}>
            <h4 className={styles.formInputTitle}>Message</h4>
            <input 
              className={styles.formInput}
              type='text'
              value={message}
              onChange={e => setMessage(e.target.value)}
              />
          </div>
        </div>
        <div className={styles.formFooter}>
          <h4 className={styles.footerTitle}>Amount(XCR)</h4>
          <div className={styles.footerContainer}>
            <div className={styles.amountContainer}>
              <div className={styles.inputContainer}>
                <CurrencyDollarIcon className={styles.dollarIcon} />
                <input 
                className={styles.formInput}
                type='number'
                step='0.001'
                value={amount}
                onChange={e => setamount(e.target.value)}
              />
              </div>
            </div>
            <button className={styles.sendButton} type='submit'>Send</button>
            
            

          </div>
        </div>

      </div>
    </form>
  </div>
  )
}

export default TransactionForm
