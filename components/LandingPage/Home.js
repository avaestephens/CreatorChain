import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"
import { useStateContext } from '@/context/StateContext'

const Dashboard = () => {
  const { user } = useStateContext()
  const [age, setAge] = useState(21)
  const [data, setData] = useState(null)

  function updateAge(){
    setAge(age + 1)
  }

  function useEffectFunction(){
    setTimeout(() => {
      setData(age * 1000)
    }, 5000)
  }

  useEffect(useEffectFunction, [age])

  useEffect(() => {
    if (!user){
    } else {
    }
  })

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Penn State Figure Skating</Title>
        </Banner>
      </Header>

      {/* Team Description Section */}
      <TeamDescription>
        <TeamImage src="/images/team.jpg" alt="Team Photo" />
        <h2>Our Mission</h2>
        <p>
          Since 1994, the Penn State Figure Skating Team has grown immensely in membership and dedication. 
          The Team's mission is to provide a student skating community for those interested in pursuing the 
          sport recreationally and competitively. We strive to encourage competition, leadership, friendship, 
          and improvement in skating skills. Additionally, our members participate in weekly social events off 
          the ice. Figure skating exercises both the mind and body, and we strive to translate our strengths 
          from skating to our education as Penn State students.
        </p>
        <Link href="/our-team" passHref legacyBehavior>
          <StyledButton>Learn More About Our Team</StyledButton>
        </Link>
      </TeamDescription>

      {/* Intercollegiate Skating Section */}
      <IntercollegiateSection>
        <SectionTitle>Intercollegiate Figure Skating</SectionTitle>
        <TwoColumnLayout>
          <ContentColumn>
            <h3>U.S. Figure Skating Collegiate Program</h3>
            <p>
              Penn State Figure Skating is proud to be a part of the U.S. Figure Skating Collegiate Program, 
              which offers opportunities for college students to continue their skating careers while pursuing 
              their academic goals. Our team competes in the Eastern Conference against other prestigious 
              universities including Cornell, Boston, Delaware, and more.
            </p>
            <p>
              Through the intercollegiate program, skaters compete in various levels from preliminary to senior 
              in free skate, short program, dance, and team maneuvers. Points earned during competitions contribute 
              to team standings and qualify teams for the national championship.
            </p>
          </ContentColumn>
          <ImageColumn>
            <ImageGrid>
              <GridImage src="/images/upenn.JPEG" alt="Competition Performance" />
              <GridImage src="/images/medals.jpg" alt="Team at Nationals" />
              <GridImage src="/images/action.jpg" alt="Team Medals" />
              <GridImage src="/images/usfs.jpg" alt="USFS Logo" />
            </ImageGrid>
          </ImageColumn>
        </TwoColumnLayout>
      </IntercollegiateSection>

      {/* Team Achievements */}
      <AchievementsSection>
        <SectionTitle>Team Achievements</SectionTitle>
        <AchievementCards>
          <AchievementCard>
            <AchievementIcon>🏆</AchievementIcon>
            <AchievementTitle>Southeastern Conference</AchievementTitle>
            <AchievementText>Multiple podium finishes in regional competitions</AchievementText>
          </AchievementCard>
          <AchievementCard>
            <AchievementIcon>🥇</AchievementIcon>
            <AchievementTitle>National Qualifiers</AchievementTitle>
            <AchievementText>Qualified for nationals multiple years</AchievementText>
          </AchievementCard>
          <AchievementCard>
            <AchievementIcon>👥</AchievementIcon>
            <AchievementTitle>Growing Team</AchievementTitle>
            <AchievementText>Over 30 active members from various skating backgrounds</AchievementText>
          </AchievementCard>
        </AchievementCards>
      </AchievementsSection>

      <MainContent>
        <Card>
          <CardTitle>About the Team</CardTitle>
          <CardText>
            The Penn State Figure Skating Team is a passionate group of skaters from various backgrounds and skill levels united by their love for the sport.
          </CardText>
          <Link href="/our-team" passHref legacyBehavior>
            <CardButton>Meet the Team</CardButton>
          </Link>
        </Card>

        <Card>
          <CardTitle>Schedule</CardTitle>
          <CardText>Check out our upcoming practices, competitions, and social events throughout the semester.</CardText>
          <Link href="/schedule" passHref legacyBehavior>
            <CardButton>View Schedule</CardButton>
          </Link>
        </Card>

        <Card>
          <CardTitle>Contact Us</CardTitle>
          <CardText>Get in touch with our team leadership for information about joining, sponsorships, or collaborations.</CardText>
          <Link href="/contact" passHref legacyBehavior>
            <CardButton>Contact Us</CardButton>
          </Link>
        </Card>
      </MainContent>

      {/* Join Us Section */}
      <JoinSection>
        <JoinContent>
          <h2>Join Our Team</h2>
          <p>
            Whether you're a competitive skater or just passionate about the sport, 
            we welcome skaters of all levels to join our team! No tryouts required.
          </p>
          <a href="https://forms.gle/LEMc9XvVMTsGxPLj8" target="_blank" rel="noopener noreferrer">
            <JoinButton>Join Penn State Figure Skating</JoinButton>
          </a>
        </JoinContent>
      </JoinSection>

      <Footer>
        <SocialLinks>
          <Link href="/social-media" passHref legacyBehavior>
            <SocialButton>Follow Us on Social Media</SocialButton>
          </Link>
        </SocialLinks>
      </Footer>
    </Section>
  )
}

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding-top: 80px; /* Adjust based on navbar height */
`

const Header = styled.header`
  width: 100%;
  background-color: #041e42;
  color: white;
  padding: 40px 0;
  text-align: center;
`

const Banner = styled.div`
  background-color: #0f3068; /* PSU Blue */
  padding: 8px 0;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
`

const TeamImage = styled.img`
  border-radius: 1%;
  width: 600px;
  height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TeamDescription = styled.section`
  width: 80%;
  margin: 40px 0;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #041e42;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`

// Intercollegiate Section Styles
const IntercollegiateSection = styled.section`
  width: 90%;
  margin: 40px 0;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 30px;
  color: #041e42;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 3px;
    background-color: #041e42;
    margin: 10px auto 0;
  }
`

const TwoColumnLayout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  
  @media (max-width: 992px) {
    flex-direction: column;
  }
`

const ContentColumn = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #041e42;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: #444;
  }
`

const ImageColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
`

const GridImage = styled.img`
  width: 200px;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

// Achievements Section
const AchievementsSection = styled.section`
  width: 90%;
  margin: 40px 0;
  padding: 30px;
  text-align: center;
`

const AchievementCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`

const AchievementCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 25px 20px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`

const AchievementIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 15px;
`

const AchievementTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #041e42;
`

const AchievementText = styled.p`
  color: #666;
`

// Join Section Styles
const JoinSection = styled.section`
  width: 100%;
  margin: 60px 0 40px;
  padding: 50px 0;
  background-color: #041e42;
  color: white;
  text-align: center;
`

const JoinContent = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`

const JoinButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #041e42;
  padding: 15px 30px;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ffffff;
    transform: scale(1.05);
  }
`

const StyledButton = styled.a`
  display: inline-block;
  background-color: #041e42;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a3c7f;
  }
`

const MainContent = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  margin: 40px 0;
  gap: 2rem;
  flex-wrap: wrap;
`

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #041e42;
`

const CardText = styled.p`
  font-size: 1rem;
  color: #555;
`

const CardButton = styled.a`
  display: inline-block;
  background-color: #041e42;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a3c7f;
  }
`

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
`

const SocialButton = styled.a`
  background-color: #ffffff;
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease;
  margin-top: 10px;

  &:hover {
    background-color: #ffdd44;
  }
`

export default Dashboard