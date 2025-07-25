import { Connection, Keypair, PublicKey, SystemProgram } from "@solana/web3.js" // Added SystemProgram
import { Program, Wallet, AnchorProvider } from "@coral-xyz/anchor"
import { IDL, Turbin3Prereq } from "./programs/Turbin3_prereq";
import wallet from "./dev-wallet.json" // This refers to your Turbin3 wallet

// We're going to import our keypair from the wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

// Create a devnet connection
const connection = new Connection("https://api.devnet.solana.com");

// Github account
const github = Buffer.from("", "utf8"); // REMEMBER TO REPLACE <your github account> WITH YOUR ACTUAL GITHUB ACCOUNT

// Create our anchor provider
const provider = new AnchorProvider(connection, new Wallet(keypair), {
  commitment: "confirmed"
});

// Create our program
const program: Program<Turbin3Prereq> = new Program(IDL, provider);

// Create the PDA for our enrollment account
const enrollment_seeds = [Buffer.from("prereq"),
keypair.publicKey.toBuffer()];
const [enrollment_key, _bump] =
PublicKey.findProgramAddressSync(enrollment_seeds, program.programId);

// Execute our enrollment transaction
(async () => {
  try {
    const txhash = await program.methods
      .submit(github)
      .accounts({
        signer: keypair.publicKey,
        prereq: enrollment_key, // Added as per IDL
        systemProgram: SystemProgram.programId, // Added as per IDL
      })
      .signers([
        keypair
      ]).rpc();
    console.log(`Success! Check out your TX here:
    https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
  } catch(e) {
    console.error(`Oops, something went wrong: ${e}`)
  }
})();