
# 🦊 MetaMask Wallet Integration

A React + TypeScript project that integrates **MetaMask** wallet with a modern crypto-themed UI.
It allows users to connect/disconnect their wallet, view address, ETH balance, and network info, with proper error handling.

---

## 🚀 Features

* ✅ Detect MetaMask installation
* ✅ Connect / Disconnect wallet
* ✅ Show wallet address (shortened `0x1234...abcd`)
* ✅ Show ETH balance (in Ether)
* ✅ Show connected network (Ethereum, Goerli, Sepolia, Polygon, etc.)
* ✅ Handle errors (no MetaMask, rejected connection, etc.)
* ✅ Auto update on account or network change
* ✅ Styled with **Tailwind + ShadCN/UI**

---

## 🛠 Tech Stack

* ⚛️ React + TypeScript
* 🎨 Tailwind CSS + ShadCN/UI
* 🔗 ethers.js
* 🔌 MetaMask Provider (EIP-1193)

---

## 📂 Project Structure

```
src/
├── components/
│   └── WalletCard.tsx    # UI for wallet connection
├── hooks/
│   └── useWallet.ts      # Custom React hook for wallet logic
├── types/
│   └── wallet.ts         # Wallet type definitions
└── pages/
    └── Index.tsx         # Main page
```

---

## ⚡ Quick Start

### 1. Clone repo

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

Open your browser → [http://localhost:8080](http://localhost:8080) 

---

## 🧪 Testing

1. Install the **MetaMask extension** → [Download](https://metamask.io/download/)
2. Unlock your wallet.
3. Click **Connect Wallet** in the UI.
4. Approve the connection request in MetaMask.
5. ✅ Wallet address, balance, and network should appear.
6. Switch accounts or networks → UI updates automatically.

---

## 🌐 Supported Networks

* Ethereum Mainnet (0x1)
* Goerli Testnet (0x5)
* Sepolia Testnet (0xaa36a7)
* Polygon Mainnet (0x89)
* Mumbai Testnet (0x13881)

---

## 🐞 Common Issues

* **MetaMask not installed** → App shows warning + download link.
* **Rejected request** → Error message displayed.
* **Balance not updating** → Refresh or reconnect.

---

## 📜 License

MIT License © 2025


