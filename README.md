# Pineapple Payment System


Deployed to CROSSVALUE testnet Address 0x05D0AcA3ba12f010f6A26104da5cB83419723842

## Overview

The Pineapple Payment System is a decentralized web3 payments project built on the CROSSVALUE blockchain. It leverages smart contracts to enable secure and transparent transactions between users without the need for intermediaries. The system aims to simplify and democratize financial transactions by providing a trustless and permissionless platform for payments.

## Why it's Needed

### Simplified Payments

The Pineapple Payment System offers a streamlined and user-friendly interface for conducting transactions compared to traditional wallet applications. Users can easily initiate payments and track their transaction history without needing to navigate complex wallet interfaces or understand blockchain technology intricacies.



### Transparency and Auditability

Traditional wallets may lack transparency, making it challenging for users to verify the integrity of their transactions. The Pineapple Payment System records all transactions on the CROSSVALUE blockchain, providing users with a readable,transparent and auditable ledger of their financial activities. Users can easily verify transaction details and ensure that their funds are accounted for accurately.

### Decentralization

The Pineapple Payment System operates on decentralized networks, meaning there is no central authority controlling transactions. This decentralized nature eliminates single points of failure and reduces the risk of censorship or manipulation. Users can transact freely without relying on centralized intermediaries or facing restrictions based on geographical location or regulatory compliance.

### Integration with Smart Contracts

The Pineapple Payment System integrates with smart contracts, enabling users to execute programmable payments based on predefined conditions or triggers. This functionality opens up possibilities for automated payments, recurring subscriptions, and complex financial arrangements that are not feasible with traditional wallets alone.



## Conclusion

The Pineapple Payment System offers a compelling alternative to traditional wallets by combining the security, transparency, and decentralization of blockchain technology with a user-friendly interface and advanced smart contract capabilities. By addressing the limitations of traditional wallets and promoting financial inclusion, the Pineapple Payment System represents a significant step forward in the evolution of decentralized finance (DeFi) and digital payments.


# Pineapple Contract

## Overview

The Pineapple contract is a simple  smart contract written in Solidity. It provides functionality for recording and querying transactions between addresses.

## Features

1. **Add Transaction**: Users can add a transaction by specifying the recipient's address, the amount, and an optional message.

2. **Get All Transactions**: Users can retrieve all recorded transactions.

3. **Get Transaction Count**: Users can get the total count of recorded transactions.

4. **Get User Transactions**: Users can retrieve transactions involving a specific address.

## Usage

### Adding a Transaction

To add a transaction, call the `addTransfer` function with the following parameters:

- `receiver`: The address of the recipient.
- `amount`: The amount of the transaction.
- `message`: An optional message associated with the transaction.

### Retrieving Transactions

#### Get All Transactions

To retrieve all recorded transactions, call the `getAllTransactions` function.

#### Get Transaction Count

To get the total count of recorded transactions, call the `getTransactionCount` function.

#### Get User Transactions

To retrieve transactions involving a specific  address, call the `getMyTransactions` function with the user's address as the parameter.

