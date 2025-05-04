// pages/deals/create.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import HomeTemplate from '../../components/Dashboard/HomeTemplate';
import DealForm from '../../components/DealForm';

export default function CreateDeal() {
  const { isConnected, userRole } = useSponsorshipContext();
  const router = useRouter();
  
  // Redirect if not connected or not a brand
  useEffect(() => {
    if (!isConnected) {
      router.push('/dashboard');
    } else if (userRole !== 'brand') {
      router.push('/dashboard');
    }
  }, [isConnected, userRole, router]);
  
  if (!isConnected || userRole !== 'brand') {
    return null; // Or a loading state
  }
  
  return (
    <HomeTemplate>
      <div className="create-deal-page">
        <h1>Create New Sponsorship Deal</h1>
        <p>Fill out the form below to create a new sponsorship agreement.</p>
        <DealForm />
      </div>
    </HomeTemplate>
  );
}
