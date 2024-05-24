import { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI} from '../utils/constants'
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
TimeAgo.addLocale(en);
const timeago = new TimeAgo('en-US')

export const TransactionContext = createContext();
const {ethereum} = window

const createETHContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner()
    const transactionsContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    )

    return transactionsContract;
}

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState('');
    const [addressTo, setaddressTo] = useState('');
    const [amount, setamount] = useState(0);
    const [message, setMessage] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [transactions, settransactions] = useState([]);
    const [transactionCount, settransactionCount] = useState(localStorage.getItem('transactionCount'));

    let useraccount;
    useEffect(() => {
        checkifwalletisconnected()
        checkiftransactionexists()
        // if (currentAccount) {
        //     getMyTransactions();
        //     //getAllTransactions()
        // }
        //console.log(currentAccount)
    },[])

    const checkifwalletisconnected = async () => {
        try {
            if(!ethereum) {
                return alert("Install Metamask")
            }
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            if (accounts.length) {
                setCurrentAccount(accounts[0])
                useraccount = accounts[0]
                //getAllTransactions()
                getMyTransactions()
            } else {
                console.log('No accounts found')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) {
                return alert("Install Metamask")
            }
            const accounts = await ethereum.request({method:'eth_requestAccounts'})
            setCurrentAccount(accounts[0])
            window.location.reload()
            
        } catch (error) {
            console.log(error)
        }
    }

    const checkiftransactionexists = async () => {
        try {
            if (ethereum) {
                const contract = createETHContract();
            
            const currentTxCount = await contract.getTransactionCount()
            window.localStorage.setItem('transactionCount',currentTxCount);
        }
        } catch (error) {
            console.log(error)
        }
    }

    const sendTransaction = async () => {
        try {
            if (ethereum) {
                const contract = createETHContract();
            
                const parsedAmount = ethers.utils.parseEther(amount);

                await ethereum.request({
                    method: 'eth_sendTransaction',
                    params: [
                        {
                            from: currentAccount,
                            to: addressTo,
                            gas: '0x5208',
                            value: parsedAmount._hex,
                        },
                    ],
                })

                const txHash = await contract.addTransfer(
                    addressTo,parsedAmount,message
                )

                setisLoading(true);
                console.log("Loading")
                await txHash.wait();
                console.log("done");
                setisLoading(false);
                console.log(txHash)

                const transactionCount = await contract.getTransactionCount()
                settransactionCount(transactionCount.toNumber())
                window.location.reload()
        } else {
            console.log("no metamask")
        }
        } catch (error) {
            console.log(error)
        }
    }

    const getAllTransactions = async () => {
        try {
          if (ethereum) {
            const transactionsContract = createETHContract()
            console.log("UA", {currentAccount})
            const availableTransactions = await transactionsContract.getAllTransactions()
    
            const structuredTransactions = availableTransactions.map(
              transaction => ({
                addressTo: transaction.receiver,
                addressFrom: transaction.sender,
                timestamp: timeago.format(
                  new Date(transaction.timestamp.toNumber() * 1000),
                  'mini',
                ),
                message: transaction.message,
    
                amount: parseInt(transaction.amount._hex) / 10 ** 18,
              }),
            )
    
            console.log(structuredTransactions)
    
            settransactions(structuredTransactions)
          } else {
            console.log('Ethereum is not present')
          }
        } catch (error) {
          console.log(error)
        }
      }

    const getMyTransactions = async () => {
        try {
            if (ethereum) {
              const transactionsContract = createETHContract()

            console.log("UA", useraccount)
              const availableTransactions = await transactionsContract.getMyTransactions(useraccount)
      
              const structuredTransactions = availableTransactions.map(
                transaction => ({
                  addressTo: transaction.receiver,
                  addressFrom: transaction.sender,
                  timestamp: timeago.format(
                    new Date(transaction.timestamp.toNumber() * 1000),
                    'mini',
                  ),
                  message: transaction.message,
      
                  amount: parseInt(transaction.amount._hex) / 10 ** 18,
                }),
              )
      
              console.log(structuredTransactions)
      
              settransactions(structuredTransactions)
            } else {
              console.log('Ethereum is not present')
            }
          } catch (error) {
            console.log(error)
          }
    }

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount, sendTransaction, setaddressTo,addressTo,setamount,amount,message,setMessage,transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}