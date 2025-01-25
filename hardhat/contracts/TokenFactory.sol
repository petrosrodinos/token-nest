// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Token.sol";

contract TokenFactory {
    event TokenCreated(address tokenAddress, uint256 initialSupply,string name,string symbol);

    constructor(){}

    function createToken(uint256 initialSupply, string memory name, string memory symbol) public returns (address) {
    
        Token newToken = new Token(msg.sender, initialSupply, name, symbol);

        emit TokenCreated(address(newToken), initialSupply,name,symbol);
        
        return address(newToken);
        
 }
}