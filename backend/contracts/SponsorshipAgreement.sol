// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SponsorshipAgreement {
    enum Status { Pending, Delivered, Completed, Disputed }

    struct Deal {
        address payable brand;
        address payable creator;
        uint256 amount;
        uint256 deadline;
        string contentHash;  // IPFS hash of the content
        Status status;
    }

    uint256 public dealCount;
    mapping(uint256 => Deal) public deals;

    event DealCreated(uint256 indexed dealId, address indexed brand, address indexed creator, uint256 amount);
    event ContentDelivered(uint256 indexed dealId, string contentHash);
    event PaymentReleased(uint256 indexed dealId);
    event DealDisputed(uint256 indexed dealId);

    modifier onlyCreator(uint256 _dealId) {
        require(msg.sender == deals[_dealId].creator, "Not the creator");
        _;
    }

    modifier onlyBrand(uint256 _dealId) {
        require(msg.sender == deals[_dealId].brand, "Not the brand");
        _;
    }

    function createDeal(address payable _creator, uint256 _deadline) external payable {
        require(msg.value > 0, "Payment must be > 0");

        deals[dealCount] = Deal({
            brand: payable(msg.sender),
            creator: _creator,
            amount: msg.value,
            deadline: _deadline,
            contentHash: "",
            status: Status.Pending
        });

        emit DealCreated(dealCount, msg.sender, _creator, msg.value);
        dealCount++;
    }

    function deliverContent(uint256 _dealId, string calldata _contentHash) external onlyCreator(_dealId) {
        Deal storage deal = deals[_dealId];
        require(deal.status == Status.Pending, "Invalid status");

        deal.contentHash = _contentHash;
        deal.status = Status.Delivered;

        emit ContentDelivered(_dealId, _contentHash);
    }

    function releasePayment(uint256 _dealId) external onlyBrand(_dealId) {
        Deal storage deal = deals[_dealId];
        require(deal.status == Status.Delivered, "Content not delivered yet");

        deal.creator.transfer(deal.amount);
        deal.status = Status.Completed;

        emit PaymentReleased(_dealId);
    }

    function disputeDeal(uint256 _dealId) external {
        Deal storage deal = deals[_dealId];
        require(msg.sender == deal.brand || msg.sender == deal.creator, "Unauthorized");
        deal.status = Status.Disputed;

        emit DealDisputed(_dealId);
    }
}
