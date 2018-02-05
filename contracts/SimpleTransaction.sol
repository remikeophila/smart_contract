pragma solidity ^0.4.0;

contract DocusignSimple {
    address public seller;
    address public client;
    bool public locked;
    uint256 public value;

    function DocusignSimple(address _seller, address _client) public payable {
        seller = _seller;
        client = _client;
        value = msg.value;
        locked = true;
    }

    function pay() public payable {
        seller.transfer(value);
    }

    function refund() public payable {
      client.transfer(value);
    }

    function unlock() public {
      locked = false;
    }


}
