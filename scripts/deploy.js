
// scripts/deploy.js

async function main() {
    const NFTStore = await ethers.getContractFactory("NFTStore");

    // Deploy the contract (no arguments)
    const nFTStore = await NFTStore.deploy();

    console.log("Contract deployed to address:", nFTStore.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });


    //Contract deployed to address: 0x8bEa107B2b5005CD473Bb15e3C132A57B45e1dFA