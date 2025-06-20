import { Keypair } from "@solana/web3.js";

const kp = Keypair.generate();

console.log(`Key generated successfully — a new Solana wallet: ${kp.publicKey.toBase58()}`);
console.log(`[${kp.secretKey}]`);
