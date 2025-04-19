// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { useStateContext } from '@/context/StateContext'
// import Navbar from '@/components/Dashboard/Navbar'

// const Explore = () => {
//   const { user } = useStateContext()
//   const [creators, setCreators] = useState([])

//   useEffect(() => {
//     // Simulated fetch
//     setCreators([
//       { name: 'Ava.sk8', followers: '200k', niche: 'Figure Skating', img: '/api/placeholder/300/300' },
//       { name: 'TechGuru', followers: '845k', niche: 'Technology', img: '/api/placeholder/300/300' },
//       { name: 'FitWithJamie', followers: '2.3M', niche: 'Fitness', img: '/api/placeholder/300/300' },
//       { name: 'CookingWithAlex', followers: '962k', niche: 'Cooking', img: '/api/placeholder/300/300' },
//       { name: 'TravelTom', followers: '1.1M', niche: 'Travel', img: '/api/placeholder/300/300' },
//       { name: 'GamerNina', followers: '789k', niche: 'Gaming', img: '/api/placeholder/300/300' }
//     ])
//   }, [])

//   return (
    
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
//       <div className="py-16 px-8 max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold mb-4">Explore Creators</h1>
//         <p className="text-lg mb-12 text-gray-400">Discover top creators in every niche and connect with them directly.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {creators.map((creator, index) => (
//             <div
//               key={index}
//               className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
//             >
//               <div className="h-60 w-full overflow-hidden">
//                 <img
//                   src={creator.img}
//                   alt={creator.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{creator.name}</h3>
//                 <p className="text-sm text-gray-400">{creator.niche}</p>
//                 <p className="mt-2 text-sm">{creator.followers} followers</p>
//                 <Link href={`/creator/${creator.name}`} legacyBehavior>
//                   <a className="mt-4 inline-block text-sm text-blue-400 hover:text-blue-300">View Profile</a>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Explore


import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useStateContext } from '@/context/StateContext';
import Navbar from '@/components/Dashboard/Navbar';
import styled from 'styled-components';


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

const Explore = () => {
  const { user } = useStateContext();
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    setCreators([
      { name: 'Ava.sk8', followers: '200k', niche: 'Figure Skating', img: '/api/placeholder/300/300' },
      { name: 'TechGuru', followers: '845k', niche: 'Technology', img: '/api/placeholder/300/300' },
      { name: 'FitWithJamie', followers: '2.3M', niche: 'Fitness', img: '/api/placeholder/300/300' },
      { name: 'CookingWithAlex', followers: '962k', niche: 'Cooking', img: '/api/placeholder/300/300' },
      { name: 'TravelTom', followers: '1.1M', niche: 'Travel', img: '/api/placeholder/300/300' },
      { name: 'GamerNina', followers: '789k', niche: 'Gaming', img: '/api/placeholder/300/300' }
    ]);
  }, []);

  return (
    <PageContainer style={{ backgroundColor: '#000', color: '#fff' }}>
      <Navbar />
      <Container>
        <HeroSection>
          <HeroTitle>
            Discover <GradientText>Top Creators</GradientText>
          </HeroTitle>
          <HeroDescription>
            Explore influencers across niches and connect with them.
          </HeroDescription>
          <Grid>
            {creators.map((creator, index) => (
              <CreatorCard key={index}>
                <CreatorImage src={creator.img} alt={creator.name} />
                <CreatorInfo>
                  <CreatorName>{creator.name}</CreatorName>
                  <CreatorNiche>{creator.niche}</CreatorNiche>
                  <CreatorFollowers>{creator.followers} followers</CreatorFollowers>
                  <Link href={`/creator/${creator.name}`} legacyBehavior>
                    <a style={{ marginTop: '0.5rem', display: 'inline-block', color: '#63b3ed' }}>View Profile</a>
                  </Link>
                </CreatorInfo>
              </CreatorCard>
            ))}
          </Grid>
        </HeroSection>
      </Container>
    </PageContainer>
  );
};

export default Explore;


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