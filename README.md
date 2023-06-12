# Fund-Me Contract Tasks
This repository contains the completed tasks for the Fund-Me contract. The following modifications and enhancements have been made to improve the contract's functionality and streamline its implementation:

## Task A: Ensure Unique Addresses in the Funders Array
The Funders array has been modified to ensure that it only contains unique addresses. This enhancement prevents the inclusion of duplicate addresses in the array, ensuring that the contract maintains an accurate record of individual funders. By ensuring unique addresses, the integrity and reliability of the Fund-Me contract are enhanced.

## Task B: Transfer Ownership Functionality
A new function has been implemented to enable the transfer of ownership to another address. This functionality allows the contract deployer to delegate ownership rights to a different address, facilitating smooth contract management and enabling the delegation of responsibilities. With this enhancement, the Fund-Me contract becomes more versatile and adaptable to changing ownership dynamics.

## Task C: Removal of Chain-Link Integration
The Chain-Link integration has been removed from the Fund-Me contract to simplify its implementation. While Chain-Link provides powerful external data integration capabilities, the decision to remove it was made to streamline the contract's complexity. By focusing primarily on handling funders' contributions and maintaining ownership functionality, the contract's implementation becomes more straightforward and easier to understand.

Your feedback and suggestions are welcome. Thank you for considering these completed tasks for the Fund-Me contract.

# Design & Develop Blockchain using Javascript
The code begins by importing the crypto module, which provides cryptographic functionality.

The sha256 function is defined, which takes data as input, creates a SHA-256 hash using the crypto module, and returns the hash in hexadecimal format.

The Block class is defined. Each block represents a unit of data in the blockchain. It has properties such as index, timestamp, data, previousHash, currentHash, and nonce. The calculateHash method calculates the hash of the block by combining its properties and the nonce. The mineBlock method mines the block by finding a hash that meets the desired difficulty level.

The Transaction class represents a transaction between two parties. It has properties such as sender, recipient, and amount.

The Blockchain class is defined. It represents the blockchain data structure and contains various methods for managing the blockchain.

In the Blockchain class, the constructor initializes the blockchain by creating the genesis block (the first block) and setting the initial values for difficulty, pendingTransactions, and miningReward.

The createGenesisBlock method creates and returns the genesis block with predefined values.

The getLastBlock method returns the last block in the blockchain.

The minePendingTransactions method mines a new block by creating a new block object, adding it to the blockchain, and updating the pendingTransactions array with a new transaction that rewards the miner.

The addTransaction method adds a new transaction to the pendingTransactions array.

The getBalanceOfAddress method calculates the balance of a given address by iterating over all the blocks in the blockchain and checking each transaction to determine the sender's or recipient's address and updating the balance accordingly.

The isChainValid method checks the validity of the blockchain by verifying the integrity of each block and its connection to the previous block. It ensures that the current hash matches the calculated hash and that the previous hash matches the previous block's current hash.

Overall, this code defines the basic structure of a blockchain, including blocks, transactions, and the blockchain itself. It provides methods for adding transactions, mining new blocks, validating the blockchain, and calculating the balance of addresses within the blockchain.
