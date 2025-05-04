

// pages/deals/create.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import DealForm from '../../components/DealForm';

export default function CreateDeal() {
  const { isConnected, userRole, loading } = useSponsorshipContext();
  const router = useRouter();

  // Only redirect once we've finished loading
  useEffect(() => {
    if (!loading && (!isConnected || userRole !== 'brand')) {
      router.push('/dashboard');
    }
  }, [loading, isConnected, userRole, router]);

  // Show loading state
  if (loading) {
    return (
      <PageContainer>
        <Container>
          <p>Loading...</p>
        </Container>
      </PageContainer>
    );
  }

  // If not a connected brand, bail (redirect is in flight)
  if (!isConnected || userRole !== 'brand') {
    return null;
  }

  // Authorized: render form
  return (
    <PageContainer>
      <Container>
        <PageHeader>Create New Sponsorship Deal</PageHeader>
        <PageSubheader>Fill out the form below to create a new sponsorship agreement.</PageSubheader>
        <DealForm />
      </Container>
    </PageContainer>
  );
}

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
`;

const PageHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const PageSubheader = styled.p`
  font-size: 1rem;
  color: #a0aec0;
  margin-bottom: 2rem;
`;






