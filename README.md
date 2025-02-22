# 🎭 Token-Nest

A **launchpad** for creating, buying, and staking custom ERC20 tokens.

---

## 🚀 Tech Stack

Token-Nest is built using the following technologies:

- **Frontend:** React, TypeScript,shadcn Tailwind CSS
- **Backend:** Supabase
- **Smart Contracts:** Solidity, Hardhat, Ethers.js,RainbowKit,wagmi
- **Database:** PostgreSQL (via Supabase)
- **Authentication:** RainbowKit
- **Blockchain Integration:** Moralis API,wagmi, Ethers.js
- **DevOps & Deployment:** Vercel, Sepolia Testnet

---

## 🛠️ Installation & Setup

### 🎨 Client Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Replace environment variables in the `.env` file based on `.env.example`.

---

### 🔗 Smart Contracts

#### 🏗️ Local Deployment

1. Navigate to the Hardhat directory:
   ```bash
   cd hardhat
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start a local Hardhat node:
   ```bash
   npm run start:node
   ```
4. Compile smart contracts:
   ```bash
   npm run compile
   ```
5. Deploy contracts to the local network:
   ```bash
   npm run deploy:dev
   ```
6. Replace the contract address in `client/.env` file.

#### 🌍 Test Deployment (Sepolia Testnet)

1. Navigate to the Hardhat directory:
   ```bash
   cd hardhat
   ```
2. Replace `.env` values with your own based on `.env.example`.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Compile smart contracts:
   ```bash
   npm run compile
   ```
5. Deploy contracts to Sepolia:
   ```bash
   npm run deploy:sepolia
   ```
6. Replace the contract address in `client/.env` file.

---

### 📦 Supabase Setup

#### 🏠 Local Development

1. Navigate to the Supabase directory:
   ```bash
   cd supabase
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open **Docker** on your machine.
4. Start the Supabase instance:
   ```bash
   npm run start
   ```
5. Serve the database:
   ```bash
   npm run serve
   ```

#### 🌐 Live Development

1. Navigate to the Supabase directory:
   ```bash
   cd supabase
   ```
2. Create a `MORALIS_API_KEY` in your **Supabase console**.
3. Deploy token creation service:
   ```bash
   npm run deploy:createtoken
   ```
4. Deploy token retrieval service:
   ```bash
   npm run deploy:gettokens
   ```

---

## 🎭 License

This project is licensed under the **MIT License**.

---

## 💡 Contributors

We welcome contributions! Feel free to submit a PR or open an issue.

---

## 📬 Support

For questions, reach out via **GitHub Issues** or contact the maintainers.
