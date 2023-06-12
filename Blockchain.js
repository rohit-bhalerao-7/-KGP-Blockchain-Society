const crypto = require('crypto');

function sha256(data) {
  return crypto.createHash('sha256').update(data).digest('hex');
}

class Block {
  constructor(index, timestamp, data, previousHash) {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.currentHash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    const data = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
    return sha256(data);
  }

  mineBlock(difficulty) {
    while (this.currentHash.substring(0, difficulty) !== Array(difficulty + 1).join('0')) {
      this.nonce++;
      this.currentHash = this.calculateHash();
    }
  }
}

class Transaction {
  constructor(sender, recipient, amount) {
    this.sender = sender;
    this.recipient = recipient;
    this.amount = amount;
  }
}

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.difficulty = 4;
    this.pendingTransactions = [];
    this.miningReward = 100;
  }

  createGenesisBlock() {
    return new Block(0, new Date().getTime(), 'Genesis Block', '0');
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  minePendingTransactions(miningRewardAddress) {
    const block = new Block(this.chain.length, new Date().getTime(), this.pendingTransactions, this.getLastBlock().currentHash);
    block.mineBlock(this.difficulty);

    this.chain.push(block);

    this.pendingTransactions = [
      new Transaction(null, miningRewardAddress, this.miningReward)
    ];
  }

  addTransaction(transaction) {
    this.pendingTransactions.push(transaction);
  }

  getBalanceOfAddress(address) {
    let balance = 0;

    for (const block of this.chain) {
      for (const transaction of block.data) {
        if (transaction.sender === address) {
          balance -= transaction.amount;
        }

        if (transaction.recipient === address) {
          balance += transaction.amount;
        }
      }
    }

    return balance;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.currentHash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.currentHash) {
        return false;
      }
    }

    return true;
  }
}
