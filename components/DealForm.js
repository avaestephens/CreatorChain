// components/DealForm.js
import { useState } from 'react';
import { useSponsorshipContext } from '../context/useSponsorshipContext';

export default function DealForm() {
  const { walletAddress } = useSponsorshipContext();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    paymentAmount: '',
    deliverables: '',
    deadline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // This is where you would call your smart contract
      console.log("Creating deal with data:", formData);
      
      // Example of how you might call the contract (implementation will vary)
      // const sponsorshipContract = new web3.eth.Contract(SponsorshipABI, contractAddress);
      // await sponsorshipContract.methods.createAgreement(
      //   formData.title,
      //   formData.description,
      //   web3.utils.toWei(formData.paymentAmount, 'ether'),
      //   formData.deliverables,
      //   new Date(formData.deadline).getTime() / 1000
      // ).send({ from: walletAddress });
      
      alert("Deal created successfully! In a real implementation, this would create a blockchain transaction.");
      // Redirect or reset form
    } catch (error) {
      console.error("Error creating deal:", error);
      alert("Error creating deal. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="deal-form">
      <div className="form-group">
        <label htmlFor="title">Deal Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          placeholder="e.g., Instagram Promotion for New Product"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          placeholder="Describe the sponsorship deal and expectations"
          rows={4}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="paymentAmount">Payment Amount (ETH)</label>
        <input
          type="number"
          id="paymentAmount"
          name="paymentAmount"
          value={formData.paymentAmount}
          onChange={handleChange}
          required
          step="0.01"
          min="0"
          placeholder="0.1"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="deliverables">Deliverables</label>
        <textarea
          id="deliverables"
          name="deliverables"
          value={formData.deliverables}
          onChange={handleChange}
          required
          placeholder="List required content, posts, etc."
          rows={3}
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="deadline">Deadline</label>
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="create-agreement-button"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating...' : 'Create Sponsorship Deal'}
      </button>
    </form>
  );
}