import React, { useState, useEffect } from 'react';
import { useStateContext } from '@/context/StateContext';
import Navbar from '@/components/Dashboard/Navbar';
import styled from 'styled-components';


const Marketplace = () => {
  const { user } = useStateContext();
  const [creators, setCreators] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const creatorsPerPage = 6;

  useEffect(() => {
    // Simulated fetch for creators
    setCreators([
      { name: 'Ava.sk8', followers: '200k', niche: 'Figure Skating', img: '/api/placeholder/300/300' },
      { name: 'TechGuru', followers: '845k', niche: 'Technology', img: '/api/placeholder/300/300' },
      { name: 'FitWithJamie', followers: '2.3M', niche: 'Fitness', img: '/api/placeholder/300/300' },
      { name: 'CookingWithAlex', followers: '962k', niche: 'Cooking', img: '/api/placeholder/300/300' },
      { name: 'TravelTom', followers: '1.1M', niche: 'Travel', img: '/api/placeholder/300/300' },
      { name: 'GamerNina', followers: '789k', niche: 'Gaming', img: '/api/placeholder/300/300' },
      // More simulated creators
    ]);
  }, []);

  // Calculate the creators to display based on the current page
  const indexOfLastCreator = currentPage * creatorsPerPage;
  const indexOfFirstCreator = indexOfLastCreator - creatorsPerPage;
  const currentCreators = creators.slice(indexOfFirstCreator, indexOfLastCreator);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <Container>
        {/* Hero Section */}
        <HeroSection>
          <HeroTitle>
            Welcome to the <GradientText>Marketplace</GradientText>
          </HeroTitle>
          <HeroDescription>
            Browse through various creators and discover content that suits your needs.
          </HeroDescription>
          <PrimaryButton>Start Browsing</PrimaryButton>
        </HeroSection>

        {/* Filter Section */}
        <FilterSection>
          <FilterButton>Technology</FilterButton>
          <FilterButton>Fitness</FilterButton>
          <FilterButton>Cooking</FilterButton>
          <FilterButton>Travel</FilterButton>
          <FilterButton>Gaming</FilterButton>
        </FilterSection>

        {/* Marketplace Grid */}
        <Grid>
          {currentCreators.map((creator, index) => (
            <CreatorCard key={index}>
              <CreatorImage src={creator.img} alt={creator.name} />
              <CreatorInfo>
                <CreatorName>{creator.name}</CreatorName>
                <CreatorNiche>{creator.niche}</CreatorNiche>
                <CreatorFollowers>{creator.followers} followers</CreatorFollowers>
              </CreatorInfo>
            </CreatorCard>
          ))}
        </Grid>

        {/* Pagination */}
        <Pagination>
          <PageButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Previous</PageButton>
          <PageButton onClick={() => paginate(currentPage + 1)} disabled={currentPage * creatorsPerPage >= creators.length}>Next</PageButton>
        </Pagination>
      </Container>
    </PageContainer>
  );
};

export default Marketplace;


const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const FilterButton = styled.button`
  background-color: #2d3748;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #63b3ed;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CreatorCard = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  }
`;

const CreatorImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const CreatorInfo = styled.div`
  padding: 1rem;
`;

const CreatorName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`;

const CreatorNiche = styled.p`
  font-size: 0.875rem;
  color: #a0aec0;
`;

const CreatorFollowers = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
`;

const Pagination = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const PageButton = styled.button`
  background-color: #2d3748;
  color: white;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0 0.25rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #63b3ed;
  }
`;


export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

export const Container = styled.div`
  padding: 4rem 2rem;
  max-width: 1280px;
  margin: 0 auto;
`;

export const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

export const GradientText = styled.span`
  background: linear-gradient(to right, #63b3ed, #805ad5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const HeroDescription = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  color: #a0aec0;
`;

export const PrimaryButton = styled.button`
  margin-top: 2rem;
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #2b6cb0;
  }
`;