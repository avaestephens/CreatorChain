import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useSponsorshipContext } from '../../context/useSponsorshipContext';
import Navbar from '../../components/Dashboard/Navbar';
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
          <LoadingSpinner>Loading...</LoadingSpinner>
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
      <Navbar />
      <MainContent>
        <Container>
          <PageHeader>Create New Sponsorship Deal</PageHeader>
          <PageSubheader>Fill out the form below to create a new sponsorship agreement.</PageSubheader>
          <DealForm />
        </Container>
      </MainContent>
    </PageContainer>
  );
}

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #0f172a;
  color: #fff;
`;

const MainContent = styled.main`
  padding: 2rem 1rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 2rem 1rem;
`;

const PageHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const PageSubheader = styled.p`
  font-size: 1rem;
  color: #a0aec0;
  margin-bottom: 2rem;
  text-align: center;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 1.25rem;
  color: #a0aec0;
`;



