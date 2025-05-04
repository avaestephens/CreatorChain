// import { useState, useEffect } from 'react';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';
// import { useStateContext } from '@/context/StateContext';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import dynamic from 'next/dynamic';

// // Import the contract ABI
// import SponsorshipABI from '../backend/contracts/SponsorshipAgreement.json';

// // Dynamically import ethers with no SSR to avoid Next.js errors
// const ethers = dynamic(() => import('ethers'), { ssr: false });

// export default function DealForm() {
//   const router = useRouter();
//   const { walletAddress, isConnected, connectWallet } = useSponsorshipContext();
//   const { user } = useStateContext();
  
//   const [contractAddress, setContractAddress] = useState(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x123..."); // Replace with your deployed contract address
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     paymentAmount: '',
//     deliverables: '',
//     creatorAddress: '',
//     deadline: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState(1);
//   const [transactionHash, setTransactionHash] = useState('');

//   // Validation function that doesn't rely on ethers being available during SSR
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.title.trim()) newErrors.title = 'Title is required';
//     if (!formData.description.trim()) newErrors.description = 'Description is required';
//     if (!formData.paymentAmount || parseFloat(formData.paymentAmount) <= 0) {
//       newErrors.paymentAmount = 'Valid payment amount is required';
//     }
//     if (!formData.deliverables.trim()) newErrors.deliverables = 'Deliverables are required';
    
//     // Basic address validation without ethers
//     if (!formData.creatorAddress || !formData.creatorAddress.startsWith('0x') || formData.creatorAddress.length !== 42) {
//       newErrors.creatorAddress = 'Valid creator wallet address is required';
//     }
    
//     if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    
//     // Ensure deadline is in the future
//     if (formData.deadline && new Date(formData.deadline) <= new Date()) {
//       newErrors.deadline = 'Deadline must be in the future';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const connectToWallet = async () => {
//     if (!isConnected) {
//       await connectWallet();
//     }
//   };

//   const createDeal = async () => {
//     if (!validateForm()) return;
    
//     if (!isConnected) {
//       alert("Please connect your wallet first");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Ensure ethers is available in client-side only
//       if (typeof window !== 'undefined' && window.ethereum) {
//         const ethersInstance = await import('ethers');
//         const provider = new ethersInstance.providers.Web3Provider(window.ethereum);
//         const signer = provider.getSigner();
        
//         const contract = new ethersInstance.Contract(
//           contractAddress,
//           SponsorshipABI.abi,
//           signer
//         );
        
//         // Calculate deadline timestamp in seconds
//         const deadlineTimestamp = Math.floor(new Date(formData.deadline).getTime() / 1000);
        
//         // Store deal metadata in IPFS or similar service (mock implementation)
//         const dealMetadata = {
//           title: formData.title,
//           description: formData.description,
//           deliverables: formData.deliverables,
//           createdAt: new Date().toISOString(),
//         };
        
//         // In a real implementation, you would upload to IPFS here
//         console.log("Deal metadata to be stored:", dealMetadata);
        
//         // Call smart contract function
//         const tx = await contract.createDeal(
//           formData.creatorAddress,
//           deadlineTimestamp,
//           { 
//             value: ethersInstance.utils.parseEther(formData.paymentAmount),
//             gasLimit: 3000000
//           }
//         );
        
//         setTransactionHash(tx.hash);
//         setStep(2);
        
//         // Wait for transaction confirmation
//         await tx.wait();
//         console.log("Transaction confirmed:", tx.hash);
//       } else {
//         throw new Error("Ethereum provider not available");
//       }
      
//     } catch (error) {
//       console.error("Error creating deal:", error);
//       alert(`Error creating deal: ${error.message || 'Transaction failed'}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const goToDashboard = () => {
//     router.push('/dashboard');
//   };

//   return (
//     <FormContainer>
//       {step === 1 ? (
//         <>
//           <FormHeader>
//             <FormTitle>Create <GradientText>Sponsorship Deal</GradientText></FormTitle>
//             <FormDescription>
//               Set up a new blockchain-backed sponsorship agreement with a creator
//             </FormDescription>
//           </FormHeader>
          
//           <FormBody>
//             <FormGroup>
//               <Label htmlFor="title">Deal Title</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="e.g., Instagram Promotion for New Product"
//                 error={errors.title}
//               />
//               {errors.title && <ErrorText>{errors.title}</ErrorText>}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Describe the sponsorship deal and expectations"
//                 rows={4}
//                 error={errors.description}
//               />
//               {errors.description && <ErrorText>{errors.description}</ErrorText>}
//             </FormGroup>
            
//             <FormRow>
//               <FormGroup>
//                 <Label htmlFor="paymentAmount">Payment Amount (ETH)</Label>
//                 <Input
//                   type="number"
//                   id="paymentAmount"
//                   name="paymentAmount"
//                   value={formData.paymentAmount}
//                   onChange={handleChange}
//                   step="0.01"
//                   min="0"
//                   placeholder="0.1"
//                   error={errors.paymentAmount}
//                 />
//                 {errors.paymentAmount && <ErrorText>{errors.paymentAmount}</ErrorText>}
//               </FormGroup>
              
//               <FormGroup>
//                 <Label htmlFor="deadline">Completion Deadline</Label>
//                 <Input
//                   type="date"
//                   id="deadline"
//                   name="deadline"
//                   value={formData.deadline}
//                   onChange={handleChange}
//                   error={errors.deadline}
//                 />
//                 {errors.deadline && <ErrorText>{errors.deadline}</ErrorText>}
//               </FormGroup>
//             </FormRow>
            
//             <FormGroup>
//               <Label htmlFor="deliverables">Deliverables</Label>
//               <Textarea
//                 id="deliverables"
//                 name="deliverables"
//                 value={formData.deliverables}
//                 onChange={handleChange}
//                 placeholder="List required content, posts, etc."
//                 rows={3}
//                 error={errors.deliverables}
//               />
//               {errors.deliverables && <ErrorText>{errors.deliverables}</ErrorText>}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="creatorAddress">Creator's Wallet Address</Label>
//               <Input
//                 type="text"
//                 id="creatorAddress"
//                 name="creatorAddress"
//                 value={formData.creatorAddress}
//                 onChange={handleChange}
//                 placeholder="0x..."
//                 error={errors.creatorAddress}
//               />
//               {errors.creatorAddress && <ErrorText>{errors.creatorAddress}</ErrorText>}
//             </FormGroup>
            
//             <ButtonWrapper>
//               {!isConnected ? (
//                 <PrimaryButton onClick={connectToWallet}>
//                   Connect Wallet to Continue
//                 </PrimaryButton>
//               ) : (
//                 <PrimaryButton 
//                   onClick={createDeal}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? 'Creating Deal...' : 'Create Sponsorship Deal'}
//                 </PrimaryButton>
//               )}
//             </ButtonWrapper>
            
//             <DetailsText>
//               This will create a smart contract on the Ethereum blockchain. You'll need to confirm the transaction in your wallet and pay gas fees.
//             </DetailsText>
//           </FormBody>
//         </>
//       ) : (
//         <SuccessContainer>
//           <SuccessIcon>✓</SuccessIcon>
//           <SuccessTitle>Deal Created Successfully!</SuccessTitle>
//           <SuccessText>
//             Your sponsorship deal has been submitted to the blockchain. The creator will be notified and can review the terms.
//           </SuccessText>
          
//           {transactionHash && (
//             <TransactionInfo>
//               <span>Transaction Hash:</span>
//               <TransactionHash>{transactionHash}</TransactionHash>
//               <TransactionLink href={`https://etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
//                 View on Etherscan
//               </TransactionLink>
//             </TransactionInfo>
//           )}
          
//           <ButtonWrapper>
//             <PrimaryButton onClick={goToDashboard}>
//               Go to Dashboard
//             </PrimaryButton>
//           </ButtonWrapper>
//         </SuccessContainer>
//       )}
//     </FormContainer>
//   );
// }

// import { useState, useEffect } from 'react';
// import { useSponsorshipContext } from '../context/useSponsorshipContext';
// import { useStateContext } from '@/context/StateContext';
// import styled from 'styled-components';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// // Import the contract ABI
// import SponsorshipABI from '../backend/contracts/SponsorshipAgreement.json';

// // Import ethers directly, but only use it on the client side
// import * as ethers from 'ethers';

// export default function DealForm() {
//   const router = useRouter();
//   const { walletAddress, isConnected, connectWallet } = useSponsorshipContext();
//   const { user } = useStateContext();
  
//   const [contractAddress, setContractAddress] = useState(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x123..."); // Replace with your deployed contract address
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     paymentAmount: '',
//     deliverables: '',
//     creatorAddress: '',
//     deadline: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [step, setStep] = useState(1);
//   const [transactionHash, setTransactionHash] = useState('');

//   // Validation function that doesn't rely on ethers being available during SSR
//   const validateForm = () => {
//     const newErrors = {};
    
//     if (!formData.title.trim()) newErrors.title = 'Title is required';
//     if (!formData.description.trim()) newErrors.description = 'Description is required';
//     if (!formData.paymentAmount || parseFloat(formData.paymentAmount) <= 0) {
//       newErrors.paymentAmount = 'Valid payment amount is required';
//     }
//     if (!formData.deliverables.trim()) newErrors.deliverables = 'Deliverables are required';
    
//     // Basic address validation without ethers
//     if (!formData.creatorAddress || !formData.creatorAddress.startsWith('0x') || formData.creatorAddress.length !== 42) {
//       newErrors.creatorAddress = 'Valid creator wallet address is required';
//     }
    
//     if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    
//     // Ensure deadline is in the future
//     if (formData.deadline && new Date(formData.deadline) <= new Date()) {
//       newErrors.deadline = 'Deadline must be in the future';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     // Clear error when field is edited
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: null }));
//     }
//   };

//   const connectToWallet = async () => {
//     if (!isConnected) {
//       await connectWallet();
//     }
//   };

//   const createDeal = async () => {
//     if (!validateForm()) return;
    
//     if (!isConnected) {
//       alert("Please connect your wallet first");
//       return;
//     }
    
//     setIsSubmitting(true);
    
//     try {
//       // Check if we're in browser and ethereum is available
//       if (typeof window === 'undefined' || !window.ethereum) {
//         throw new Error("Ethereum provider not available. Please install MetaMask or another Web3 wallet.");
//       }
      
//       // Create provider and signer
//       const provider = new ethers.BrowserProvider(window.ethereum);
//       const signer = await provider.getSigner();
      
//       // Instantiate the contract
//       const contract = new ethers.Contract(
//         contractAddress,
//         SponsorshipABI.abi,
//         signer
//       );
      
//       // Calculate deadline timestamp in seconds
//       const deadlineTimestamp = Math.floor(new Date(formData.deadline).getTime() / 1000);
      
//       // Store deal metadata in IPFS or similar service (mock implementation)
//       const dealMetadata = {
//         title: formData.title,
//         description: formData.description,
//         deliverables: formData.deliverables,
//         createdAt: new Date().toISOString(),
//       };
      
//       // In a real implementation, you would upload to IPFS here
//       console.log("Deal metadata to be stored:", dealMetadata);
      
//       // Call smart contract function
//       const tx = await contract.createDeal(
//         formData.creatorAddress,
//         deadlineTimestamp,
//         { 
//           value: ethers.parseEther(formData.paymentAmount),
//           gasLimit: 3000000
//         }
//       );
      
//       setTransactionHash(tx.hash);
//       setStep(2);
      
//       // Wait for transaction confirmation
//       await tx.wait();
//       console.log("Transaction confirmed:", tx.hash);
//     } catch (error) {
//       console.error("Error creating deal:", error);
//       alert(`Error creating deal: ${error.message || 'Transaction failed'}`);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const goToDashboard = () => {
//     router.push('/dashboard');
//   };

//   return (
//     <FormContainer>
//       {step === 1 ? (
//         <>
//           <FormHeader>
//             <FormTitle>Create <GradientText>Sponsorship Deal</GradientText></FormTitle>
//             <FormDescription>
//               Set up a new blockchain-backed sponsorship agreement with a creator
//             </FormDescription>
//           </FormHeader>
          
//           <FormBody>
//             <FormGroup>
//               <Label htmlFor="title">Deal Title</Label>
//               <Input
//                 type="text"
//                 id="title"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="e.g., Instagram Promotion for New Product"
//                 error={errors.title}
//               />
//               {errors.title && <ErrorText>{errors.title}</ErrorText>}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="description">Description</Label>
//               <Textarea
//                 id="description"
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Describe the sponsorship deal and expectations"
//                 rows={4}
//                 error={errors.description}
//               />
//               {errors.description && <ErrorText>{errors.description}</ErrorText>}
//             </FormGroup>
            
//             <FormRow>
//               <FormGroup>
//                 <Label htmlFor="paymentAmount">Payment Amount (ETH)</Label>
//                 <Input
//                   type="number"
//                   id="paymentAmount"
//                   name="paymentAmount"
//                   value={formData.paymentAmount}
//                   onChange={handleChange}
//                   step="0.01"
//                   min="0"
//                   placeholder="0.1"
//                   error={errors.paymentAmount}
//                 />
//                 {errors.paymentAmount && <ErrorText>{errors.paymentAmount}</ErrorText>}
//               </FormGroup>
              
//               <FormGroup>
//                 <Label htmlFor="deadline">Completion Deadline</Label>
//                 <Input
//                   type="date"
//                   id="deadline"
//                   name="deadline"
//                   value={formData.deadline}
//                   onChange={handleChange}
//                   error={errors.deadline}
//                 />
//                 {errors.deadline && <ErrorText>{errors.deadline}</ErrorText>}
//               </FormGroup>
//             </FormRow>
            
//             <FormGroup>
//               <Label htmlFor="deliverables">Deliverables</Label>
//               <Textarea
//                 id="deliverables"
//                 name="deliverables"
//                 value={formData.deliverables}
//                 onChange={handleChange}
//                 placeholder="List required content, posts, etc."
//                 rows={3}
//                 error={errors.deliverables}
//               />
//               {errors.deliverables && <ErrorText>{errors.deliverables}</ErrorText>}
//             </FormGroup>
            
//             <FormGroup>
//               <Label htmlFor="creatorAddress">Creator's Wallet Address</Label>
//               <Input
//                 type="text"
//                 id="creatorAddress"
//                 name="creatorAddress"
//                 value={formData.creatorAddress}
//                 onChange={handleChange}
//                 placeholder="0x..."
//                 error={errors.creatorAddress}
//               />
//               {errors.creatorAddress && <ErrorText>{errors.creatorAddress}</ErrorText>}
//             </FormGroup>
            
//             <ButtonWrapper>
//               {!isConnected ? (
//                 <PrimaryButton onClick={connectToWallet}>
//                   Connect Wallet to Continue
//                 </PrimaryButton>
//               ) : (
//                 <PrimaryButton 
//                   onClick={createDeal}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? 'Creating Deal...' : 'Create Sponsorship Deal'}
//                 </PrimaryButton>
//               )}
//             </ButtonWrapper>
            
//             <DetailsText>
//               This will create a smart contract on the Ethereum blockchain. You'll need to confirm the transaction in your wallet and pay gas fees.
//             </DetailsText>
//           </FormBody>
//         </>
//       ) : (
//         <SuccessContainer>
//           <SuccessIcon>✓</SuccessIcon>
//           <SuccessTitle>Deal Created Successfully!</SuccessTitle>
//           <SuccessText>
//             Your sponsorship deal has been submitted to the blockchain. The creator will be notified and can review the terms.
//           </SuccessText>
          
//           {transactionHash && (
//             <TransactionInfo>
//               <span>Transaction Hash:</span>
//               <TransactionHash>{transactionHash}</TransactionHash>
//               <TransactionLink href={`https://etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
//                 View on Etherscan
//               </TransactionLink>
//             </TransactionInfo>
//           )}
          
//           <ButtonWrapper>
//             <PrimaryButton onClick={goToDashboard}>
//               Go to Dashboard
//             </PrimaryButton>
//           </ButtonWrapper>
//         </SuccessContainer>
//       )}
//     </FormContainer>
//   );
// }


import { useState, useEffect } from 'react';
import { useSponsorshipContext } from '../context/useSponsorshipContext';
import { useStateContext } from '@/context/StateContext';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

// Import the contract ABI
import SponsorshipABI from '../backend/contracts/SponsorshipAgreement.json';

// Import ethers directly, but only use it on the client side
import * as ethers from 'ethers';

export default function DealForm() {
  const router = useRouter();
  const { walletAddress, isConnected, connectWallet } = useSponsorshipContext();
  const { user } = useStateContext();
  
  // Fix 1: Use a valid Ethereum address format for the fallback
  const [contractAddress, setContractAddress] = useState(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS || "0x0000000000000000000000000000000000000000"
  ); 
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    paymentAmount: '',
    deliverables: '',
    creatorAddress: '',
    deadline: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [transactionHash, setTransactionHash] = useState('');

  // Validation function that doesn't rely on ethers being available during SSR
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.paymentAmount || parseFloat(formData.paymentAmount) <= 0) {
      newErrors.paymentAmount = 'Valid payment amount is required';
    }
    if (!formData.deliverables.trim()) newErrors.deliverables = 'Deliverables are required';
    
    // Basic address validation without ethers
    if (!formData.creatorAddress || !formData.creatorAddress.startsWith('0x') || formData.creatorAddress.length !== 42) {
      newErrors.creatorAddress = 'Valid creator wallet address is required';
    }
    
    if (!formData.deadline) newErrors.deadline = 'Deadline is required';
    
    // Ensure deadline is in the future
    if (formData.deadline && new Date(formData.deadline) <= new Date()) {
      newErrors.deadline = 'Deadline must be in the future';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const connectToWallet = async () => {
    if (!isConnected) {
      await connectWallet();
    }
  };

  const createDeal = async () => {
    if (!validateForm()) return;
    
    if (!isConnected) {
      alert("Please connect your wallet first");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if we're in browser and ethereum is available
      if (typeof window === 'undefined' || !window.ethereum) {
        throw new Error("Ethereum provider not available. Please install MetaMask or another Web3 wallet.");
      }
      
      // Create provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      
      // Fix 2: Added contract address validation
      if (!ethers.isAddress(contractAddress)) {
        throw new Error("Invalid contract address. Please check your environment configuration.");
      }
      
      // Instantiate the contract
      const contract = new ethers.Contract(
        contractAddress,
        SponsorshipABI.abi,
        signer
      );
      
      // Calculate deadline timestamp in seconds
      const deadlineTimestamp = Math.floor(new Date(formData.deadline).getTime() / 1000);
      
      // Store deal metadata in IPFS or similar service (mock implementation)
      const dealMetadata = {
        title: formData.title,
        description: formData.description,
        deliverables: formData.deliverables,
        createdAt: new Date().toISOString(),
      };
      
      // In a real implementation, you would upload to IPFS here
      console.log("Deal metadata to be stored:", dealMetadata);
      
      // Fix 3: Validate creator address
      if (!ethers.isAddress(formData.creatorAddress)) {
        throw new Error("Invalid creator address format");
      }
      
      // Call smart contract function
      const tx = await contract.createDeal(
        formData.creatorAddress,
        deadlineTimestamp,
        { 
          value: ethers.parseEther(formData.paymentAmount),
          gasLimit: 3000000
        }
      );
      
      setTransactionHash(tx.hash);
      setStep(2);
      
      // Wait for transaction confirmation
      await tx.wait();
      console.log("Transaction confirmed:", tx.hash);
    } catch (error) {
      console.error("Error creating deal:", error);
      alert(`Error creating deal: ${error.message || 'Transaction failed'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const goToDashboard = () => {
    router.push('/dashboard');
  };

  // Fix 4: Added useEffect to log contract address for debugging
  useEffect(() => {
    console.log("Contract address:", contractAddress);
  }, [contractAddress]);

  return (
    <FormContainer>
      {step === 1 ? (
        <>
          <FormHeader>
            <FormTitle>Create <GradientText>Sponsorship Deal</GradientText></FormTitle>
            <FormDescription>
              Set up a new blockchain-backed sponsorship agreement with a creator
            </FormDescription>
          </FormHeader>
          
          <FormBody>
            <FormGroup>
              <Label htmlFor="title">Deal Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g., Instagram Promotion for New Product"
                error={errors.title}
              />
              {errors.title && <ErrorText>{errors.title}</ErrorText>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe the sponsorship deal and expectations"
                rows={4}
                error={errors.description}
              />
              {errors.description && <ErrorText>{errors.description}</ErrorText>}
            </FormGroup>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="paymentAmount">Payment Amount (ETH)</Label>
                <Input
                  type="number"
                  id="paymentAmount"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  placeholder="0.1"
                  error={errors.paymentAmount}
                />
                {errors.paymentAmount && <ErrorText>{errors.paymentAmount}</ErrorText>}
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="deadline">Completion Deadline</Label>
                <Input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  error={errors.deadline}
                />
                {errors.deadline && <ErrorText>{errors.deadline}</ErrorText>}
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="deliverables">Deliverables</Label>
              <Textarea
                id="deliverables"
                name="deliverables"
                value={formData.deliverables}
                onChange={handleChange}
                placeholder="List required content, posts, etc."
                rows={3}
                error={errors.deliverables}
              />
              {errors.deliverables && <ErrorText>{errors.deliverables}</ErrorText>}
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="creatorAddress">Creator's Wallet Address</Label>
              <Input
                type="text"
                id="creatorAddress"
                name="creatorAddress"
                value={formData.creatorAddress}
                onChange={handleChange}
                placeholder="0x..."
                error={errors.creatorAddress}
              />
              {errors.creatorAddress && <ErrorText>{errors.creatorAddress}</ErrorText>}
            </FormGroup>
            
            <ButtonWrapper>
              {!isConnected ? (
                <PrimaryButton onClick={connectToWallet}>
                  Connect Wallet to Continue
                </PrimaryButton>
              ) : (
                <PrimaryButton 
                  onClick={createDeal}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Deal...' : 'Create Sponsorship Deal'}
                </PrimaryButton>
              )}
            </ButtonWrapper>
            
            <DetailsText>
              This will create a smart contract on the Ethereum blockchain. You'll need to confirm the transaction in your wallet and pay gas fees.
            </DetailsText>
          </FormBody>
        </>
      ) : (
        <SuccessContainer>
          <SuccessIcon>✓</SuccessIcon>
          <SuccessTitle>Deal Created Successfully!</SuccessTitle>
          <SuccessText>
            Your sponsorship deal has been submitted to the blockchain. The creator will be notified and can review the terms.
          </SuccessText>
          
          {transactionHash && (
            <TransactionInfo>
              <span>Transaction Hash:</span>
              <TransactionHash>{transactionHash}</TransactionHash>
              <TransactionLink href={`https://etherscan.io/tx/${transactionHash}`} target="_blank" rel="noopener noreferrer">
                View on Etherscan
              </TransactionLink>
            </TransactionInfo>
          )}
          
          <ButtonWrapper>
            <PrimaryButton onClick={goToDashboard}>
              Go to Dashboard
            </PrimaryButton>
          </ButtonWrapper>
        </SuccessContainer>
      )}
    </FormContainer>
  );
}








const FormContainer = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FormTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const FormDescription = styled.p`
  color: #a0aec0;
  font-size: 1rem;
`;

const GradientText = styled.span`
  background: linear-gradient(to right, #63b3ed, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormBody = styled.div``;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #e2e8f0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #2d3748;
  border: 1px solid ${props => props.error ? '#e53e3e' : '#4a5568'};
  color: #e2e8f0;
  font-size: 1rem;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.2);
  }
  
  &::placeholder {
    color: #718096;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #2d3748;
  border: 1px solid ${props => props.error ? '#e53e3e' : '#4a5568'};
  color: #e2e8f0;
  font-size: 1rem;
  resize: vertical;
  transition: all 0.2s;
  
  &:focus {
    outline: none;
    border-color: #63b3ed;
    box-shadow: 0 0 0 2px rgba(99, 179, 237, 0.2);
  }
  
  &::placeholder {
    color: #718096;
  }
`;

const ErrorText = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const ButtonWrapper = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const PrimaryButton = styled.button`
  background: linear-gradient(to right, #3182ce, #805ad5);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(49, 130, 206, 0.3);
  }
  
  &:disabled {
    background: #718096;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const DetailsText = styled.p`
  font-size: 0.875rem;
  color: #718096;
  text-align: center;
  margin-top: 1rem;
`;

const SuccessContainer = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const SuccessIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3182ce, #805ad5);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const SuccessTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const SuccessText = styled.p`
  color: #a0aec0;
  margin-bottom: 2rem;
`;

const TransactionInfo = styled.div`
  background-color: #2d3748;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  word-break: break-all;
`;

const TransactionHash = styled.p`
  font-family: monospace;
  background-color: #1a202c;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  font-size: 0.875rem;
`;

const TransactionLink = styled.a`
  color: #63b3ed;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;