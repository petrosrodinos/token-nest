# Token-Nest

A decentralized token management platform.

---

## 🚀 Installation

### 🖥️ Client Setup

1. Navigate to the client directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Replace environment variables in the `.env` file based on `.env.example`.

---

## 💡 Smart Contracts

### 🏗️ Local Deployment

1. Navigate to the Hardhat directory: `cd hardhat`
2. Install dependencies: `npm install`
3. Start a local Hardhat node: `npm run start:node`
4. Compile smart contracts: `npm run compile`
5. Deploy contracts to the local network: `npm run deploy:dev`
6. Replace the contract address in `client/.env` file.

---

### 🌍 Test Deployment (Sepolia Testnet)

1. Navigate to the Hardhat directory: `cd hardhat`
2. Replace `.env` values with your own based on `.env.example`
3. Install dependencies: `npm install`
4. Compile smart contracts: `npm run compile`
5. Deploy contracts to Sepolia: `npm run deploy:sepolia`
6. Replace the contract address in `client/.env` file.

---

## 🛠️ Supabase

### 🏠 Local Development

1. Navigate to the Supabase directory: `cd supabase`
2. Install dependencies: `npm install`
3. Open **Docker** on your machine.
4. Start the Supabase instance: `npm run start`
5. Serve the database: `npm run serve`

---

### 🌐 Live Development

1. Navigate to the Supabase directory: `cd supabase`
2. Create a `MORALIS_API_KEY` in your **Supabase console**.
3. Deploy token creation service: `npm run deploy:createtoken`
4. Deploy token retrieval service: `npm run deploy:gettokens`

---

### 📜 License

This project is licensed under the **MIT License**.

---

### ✨ Contributors

We welcome contributions! Feel free to submit a PR or open an issue.

---

### 📬 Support

For questions, reach out via **GitHub Issues** or contact the maintainers.
