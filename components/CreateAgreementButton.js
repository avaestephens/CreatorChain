// import React from "react";
// import { useSponsorshipContract } from "../context/useSponsorshipContract";
// import { ethers } from "ethers";

// const CreateAgreementButton = () => {
//   const handleCreate = async () => {
//     try {
//       const contract = useSponsorshipContract();

//       const tx = await contract.createAgreement(
//         "0xBrandAddress", // Replace
//         "0xCreatorAddress", // Replace
//         ethers.utils.parseEther("0.1"),
//         Math.floor(Date.now() / 1000) + 86400
//       );

//       await tx.wait();
//       alert("Agreement created!");
//     } catch (err) {
//       console.error(err);
//       alert("Error during transaction.");
//     }
//   };

//   return <button onClick={handleCreate}>Create Sponsorship</button>;
// };

// export default CreateAgreementButton;


// components/CreateAgreementButton.js
import { useState } from 'react';
import { useSponsorshipContext } from '../context/useSponsorshipContext';
import SponsorshipABI from '../frontend/contracts/SponsorshipABI';

// This component will be used for both creating and accepting agreements
export default function CreateAgreementButton({ 
  dealId = null, 
  action = 'create', // 'create', 'accept', 'complete'
  onSuccess = () => {}, 
  className = '',
  contractAddress = '0xYourContractAddress' // Replace with actual address
}) {
  const { walletAddress } = useSponsorshipContext();
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleClick = async () => {
    if (!window.ethereum || !walletAddress) {
      alert('Please connect your wallet first');
      return;
    }
    
    setIsProcessing(true);
    
    try {
      // In a real implementation, you would use ethers.js or web3.js to interact with the contract
      console.log(`${action} agreement for deal ${dealId || 'new'} from address ${walletAddress}`);
      
      // Mock implementation - in a real app, replace with actual contract calls
      // Example:
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // const contract = new ethers.Contract(contractAddress, SponsorshipABI, signer);
      
      // if (action === 'create') {
      //   const tx = await contract.createAgreement(...params);
      //   await tx.wait();
      // } else if (action === 'accept') {
      //   const tx = await contract.acceptAgreement(dealId);
      //   await tx.wait();
      // } else if (action === 'complete') {
      //   const tx = await contract.completeAgreement(dealId);
      //   await tx.wait();
      // }
      
      // Simulate successful transaction
      setTimeout(() => {
        alert(`${action.charAt(0).toUpperCase() + action.slice(1)} agreement successful!`);
        onSuccess();
        setIsProcessing(false);
      }, 1000);
      
    } catch (error) {
      console.error(`Error ${action}ing agreement:`, error);
      alert(`Error ${action}ing agreement. Please try again.`);
      setIsProcessing(false);
    }
  };
  
  const getButtonText = () => {
    if (isProcessing) return 'Processing...';
    
    switch (action) {
      case 'create': return 'Create Agreement';
      case 'accept': return 'Accept Agreement';
      case 'complete': return 'Mark Complete';
      default: return 'Interact with Agreement';
    }
  };
  
  return (
    <button 
      onClick={handleClick}
      disabled={isProcessing}
      className={`agreement-button ${action}-agreement ${className}`}
    >
      {getButtonText()}
    </button>
  );
}