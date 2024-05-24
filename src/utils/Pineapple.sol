// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Pineapple {
    uint256 transactionCount;

    event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;
        uint256 timestamp;

    }

    TransferStruct[] transactions;

    function addTransfer(address payable receiver, uint amount, string memory message) public {
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }

    function getMyTransactions(address userAddress) public view returns (TransferStruct[] memory) {
        uint count = 0;
        for (uint i = 0; i < transactions.length; i++) {
            if (transactions[i].sender == userAddress || transactions[i].receiver == userAddress) {
                count++;
            }
        }
        TransferStruct[] memory result = new TransferStruct[](count);
        uint index = 0;
        for (uint i = 0; i < transactions.length; i++) {
            if (transactions[i].sender == userAddress || transactions[i].receiver == userAddress) {
                result[index] = transactions[i];
                index++;
            }
        }
        return result;
}

}