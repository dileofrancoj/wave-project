// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; // Solidity compiler version we want our contract to use

import "hardhat/console.sol"; // for debuggin purposes

contract WavePortal {
    uint256 totalWaves; // static to the contract

    event NewWave(address indexed from, uint256 timestamp, string message);

    struct Wave {
        address waver; // The address of the user who waved.
        string message; // The message the user sent.
        uint256 timestamp; // The timestamp when the user waved.
    }

    Wave[] waves; // waves[] = variable to storage history of waves

    constructor() {
        console.log("Smart Contracting FTW!"); // only for dev
    }

    function wave(string memory _message) public {
        // type: public, this allows for public use
        totalWaves += 1;

        waves.push(Wave(msg.sender, _message, block.timestamp));
    }

    function getTotalWaves() public view returns (uint256) {
        return totalWaves; // returns total of waves
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves; // returns all waves
    }
}
