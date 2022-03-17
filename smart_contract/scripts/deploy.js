
const hre = require("hardhat");

async function main() {
  
  const profileImageMinterFactory = await hre.ethers.getContractFactory("ProfileImageNfts");
  const profileImageContract = await profileImageMinterFactory.deploy();

  await profileImageContract.deployed();

  console.log("Deployed to:", profileImageContract.address);
}

;(async() => {
  try {
    await main()
  } catch {
    console.error(error);
    process.exit(1);
  }
})()