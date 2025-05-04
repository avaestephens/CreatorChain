
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import Navbar from '@/components/Dashboard/Navbar';
import styled from 'styled-components';

const Explore = () => {
  const { user } = useStateContext();
  const [creators, setCreators] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedNiche, setSelectedNiche] = useState('All');

  useEffect(() => {
    setCreators([
      { 
        name: 'ava.sk8', 
        followers: '200k', 
        niche: 'Figure Skating', 
        img: '/images/avask8.png',
        bio: 'Intercollegiate National Gold Medalist Figure Skater sharing training tips and behind-the-scenes competition content.'
      },
      { 
        name: 'study.with.ava', 
        followers: '19.5k', 
        niche: 'Academics', 
        img: '/images/study.jpg',
        bio: 'Posting motivational study content as a Penn State student majoring in CS.'
      },
      { 
        name: 'barstoolsports', 
        followers: '46.9M', 
        niche: 'Digital Media', 
        img: '/images/barstool.jpg',
        bio: 'A digital media company and popular culture brand founded by Dave Portnoy in 2003'
      },
      { 
        name: 'megaamerican', 
        followers: '17.2M', 
        niche: 'Travel', 
        img: '/images/mega.png',
        bio: 'Full-time traveler exploring hidden gems around the world. Join me on my adventures!'
      },
      { 
        name: 'NaraSmith', 
        followers: '11.7M', 
        niche: 'Cooking', 
        img: '/images/nara.jpg',
        bio: 'Bringing you delicious recipes that are easy to make at home. Food is love, food is life!'
      },
      { 
        name: 'MrBeast', 
        followers: '115.3M', 
        niche: 'Gaming/ Everything', 
        img: '/images/beast.jpg',
        bio: 'Professional gamer and streamer. Let\'s play together and dominate the gaming world!'
      },
      { 
        name: 'KatieFang', 
        followers: '6.3M', 
        niche: 'Beauty', 
        img: '/images/katie.jpg',
        bio: 'Makeup artist and beauty influencer sharing tutorials, product reviews, and industry secrets.'
      },
      { 
        name: 'Duolingo', 
        followers: '16.9M', 
        niche: 'Learning', 
        img: '/images/duo.jpg',
        bio: 'Popular language learning app and website that uses a game-like approach to help users learn new languages'
      }
    ]);
  }, []);

  // Get unique niches for filter
  const niches = ['All', ...new Set(creators.map(creator => creator.niche))];

  // Filter creators based on search term and selected niche
  const filteredCreators = creators.filter(creator => {
    const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         creator.niche.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         creator.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesNiche = selectedNiche === 'All' || creator.niche === selectedNiche;
    return matchesSearch && matchesNiche;
  });

  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <Container>
        <HeroSection>
          <HeroTitle>
            Discover <GradientText>Top Creators</GradientText>
          </HeroTitle>
          <HeroDescription>
            Find and connect with top Web3 creators across different niches for your next campaign
          </HeroDescription>
          
          <FilterSection>
            <SearchBar 
              placeholder="Search creators or niches..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <NicheFilter>
              {niches.map((niche, index) => (
                <NicheButton 
                  key={index} 
                  active={selectedNiche === niche}
                  onClick={() => setSelectedNiche(niche)}
                >
                  {niche}
                </NicheButton>
              ))}
            </NicheFilter>
          </FilterSection>
          
          <CreatorCount>{filteredCreators.length} creators found</CreatorCount>
          
          <Grid>
            {filteredCreators.map((creator, index) => (
              <CreatorCard key={index}>
                <CreatorImageContainer>
                  <CreatorImage src={creator.img} alt={creator.name} />
                  <FollowerBadge>{creator.followers} followers</FollowerBadge>
                </CreatorImageContainer>
                <CreatorInfo>
                  <CreatorName>{creator.name}</CreatorName>
                  <CreatorNiche>{creator.niche}</CreatorNiche>
                  <CreatorBio>{creator.bio}</CreatorBio>
                  <ButtonGroup>
                    <ViewProfileLink href={`/creator/${creator.name}`}>
                      View Profile
                    </ViewProfileLink>
                    <ConnectButton>Connect</ConnectButton>
                  </ButtonGroup>
                </CreatorInfo>
              </CreatorCard>
            ))}
          </Grid>
          
          {filteredCreators.length === 0 && (
            <NoResults>
              <NoResultsEmoji>🔍</NoResultsEmoji>
              <NoResultsText>No creators found matching your search</NoResultsText>
              <ResetButton onClick={() => {setSearchTerm(''); setSelectedNiche('All');}}>
                Reset Filters
              </ResetButton>
            </NoResults>
          )}
        </HeroSection>
      </Container>
    </PageContainer>
  );
};

export default Explore;

// Existing styled components
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

// Enhanced styled components
const FilterSection = styled.div`
  margin: 2rem 0;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  background-color: #1a202c;
  border: 1px solid #2d3748;
  color: white;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: #63b3ed;
  }
`;

const NicheFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const NicheButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  background-color: ${props => props.active ? '#63b3ed' : '#1a202c'};
  color: ${props => props.active ? 'white' : '#a0aec0'};
  border: 1px solid ${props => props.active ? '#63b3ed' : '#2d3748'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#63b3ed' : '#2d3748'};
  }
`;

const CreatorCount = styled.p`
  font-size: 0.9rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CreatorCard = styled.div`
  background-color: #1a202c;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
  }
`;

const CreatorImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
`;

const CreatorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FollowerBadge = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const CreatorInfo = styled.div`
  padding: 1.5rem;
`;

const CreatorName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const CreatorNiche = styled.p`
  font-size: 0.875rem;
  color: #63b3ed;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const CreatorBio = styled.p`
  font-size: 0.9rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ViewProfileLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: 1px solid #63b3ed;
  color: #63b3ed;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(99, 179, 237, 0.1);
  }
`;

const ConnectButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #805ad5;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #6b46c1;
  }
`;

const NoResults = styled.div`
  margin: 4rem 0;
  text-align: center;
`;

const NoResultsEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const NoResultsText = styled.p`
  font-size: 1.2rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
`;

const ResetButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  background-color: #3182ce;
  color: white;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #2b6cb0;
  }
`;