const {expect} = require("chai");
const {ethers} = require("hardhat");


describe("VotingSystem", function(){
  // Declare necessary variables to help testing
    // Variables for the contract

    let VotingSystemFactory, VotingSystemContract

    // Variables for the signer
    let owner, account1, account2

    beforeEach(async function () {
      // Initialize the signers from hardhat provided signers
      [owner, account1, account2] = await ethers.getSigners()
      
      // Initialize our contract
      VotingSystemFactory = await ethers.VotingSystemContract("VotingSystem")
      VotingSystemContract = await VotingSystemFactory.deploy()
  });

  describe("addVoter function", () => {
    it("should revert if it not owner that is adding voters", async() => {})
  })
