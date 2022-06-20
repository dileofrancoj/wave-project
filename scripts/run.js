const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();
    // The Hardhat Runtime Environment, or HRE for short,
    // is an object containing all the functionality that Hardhat
    // exposes when running a task, test or script.
    // Hardhat is the HRE.
    // https://hardhat.org/advanced/hardhat-runtime-environment?utm_source=buildspace.so&utm_medium=buildspace_project
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
  
    console.log("Contract address:", waveContract.address); // address where the contract is stored in the blockchain
  
    let waveTxn = await waveContract.wave("HI YO!"); // waving myself
    await waveTxn.wait();
  
    waveTxn = await waveContract.connect(randomPerson).wave("Hello!");
    await waveTxn.wait();
  
    waveTxn = await waveContract.connect(randomPerson).wave("Hello to you!"); // random person waving at me
    await waveTxn.wait();
  
    const allWaves = await waveContract.getAllWaves();
  
    console.log(allWaves);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  };
  
  runMain();