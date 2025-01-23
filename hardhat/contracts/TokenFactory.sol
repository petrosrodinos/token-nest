// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;

import "./Token.sol";

contract TokenFactory {
    event TokenCreated(address indexed tokenAddress, address indexed owner, uint256 initialSupply,string name,string symbol);

    struct TokenStruct{
        address tokenAddress;
        string name; 
        string symbol;
    }

    TokenStruct[] tokens;

    constructor(){}

    function createToken(uint256 initialSupply, string memory name, string memory symbol) public returns (address) {
    
        Token newToken = new Token(msg.sender, initialSupply, name, symbol);

        TokenStruct memory token = TokenStruct({
            tokenAddress: address(newToken),
            name: name,
            symbol: symbol
        });

        tokens.push(token);

        emit TokenCreated(address(newToken), msg.sender, initialSupply,name,symbol);
        
        return address(newToken);
        
 }
}