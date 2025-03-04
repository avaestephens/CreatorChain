import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Navbar from '@/components/Dashboard/Navbar';
import Footer from "@/components/LandingPage/Footer"
import { useStateContext } from '@/context/StateContext';

const OurTeam = () => {
  const { user } = useStateContext();

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Meet Our Team</Title>
        </Banner>
      </Header>

      <MainContent>
        <ExecBoardSection>
          <h2>Executive Board Members:</h2>
          <TeamList>
            {/* Pyramid Layout for Exec Board */}
            <TeamMemberCard className="single">
              <TeamMemberImage src="/images/exec-members/president.jpg" alt="President" />
              <TeamMemberInfo>
                <h3>Ava Stephens</h3>
                <PositionName>President</PositionName>
                <TeamMemberDescription>Year: Junior</TeamMemberDescription>
                <TeamMemberDescription>Major: Computer Science</TeamMemberDescription>
                <TeamMemberDescription>Minors: Mathematics and Cybersecurity</TeamMemberDescription>
                <TeamMemberDescription>Hometown: Delray Beach, Florida</TeamMemberDescription>
                <TeamMemberDescription>Disciplines: Senior Ladies</TeamMemberDescription>
              </TeamMemberInfo>
            </TeamMemberCard>

            <TeamRow className="second-row">
              <TeamMemberCard className="double">
                <TeamMemberImage src="/images/exec-members/vp.jpg" alt="Vice President" />
                <TeamMemberInfo>
                  <h3>Maegen Manning</h3>
                  <PositionName>Vice President</PositionName>
                    <TeamMemberDescription>Year: Senior</TeamMemberDescription>
                    <TeamMemberDescription>Major: Film Production</TeamMemberDescription>
                    <TeamMemberDescription>Minor: Entrepreneurship & Innovation: New Media</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Chagrin Falls, Ohio</TeamMemberDescription>
                    <TeamMemberDescription>Disciplines: Intermediate Free Dance, Juvenile Free Skate</TeamMemberDescription>
                  </TeamMemberInfo>
              </TeamMemberCard>

              <TeamMemberCard className="double">
                <TeamMemberImage src="/images/exec-members/secretary.jpg" alt="Secretary" />
                <TeamMemberInfo>
                  <h3>Alexa Winter </h3>
                  <PositionName>Vice President</PositionName>
                  <TeamMemberDescription>Year: Junior</TeamMemberDescription>
                    <TeamMemberDescription>Major: Architectural Engineering</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Baltimore, Maryland</TeamMemberDescription>
                    <TeamMemberDescription>Discipline: Novice Short and Freeskate</TeamMemberDescription>
  
                </TeamMemberInfo>
              </TeamMemberCard>

              <TeamMemberCard className="double">
                <TeamMemberImage src="/images/exec-members/treasurer.jpg" alt="Treasurer" />
                <TeamMemberInfo>
                  <h3>Barrett Reed</h3>
                  <PositionName>Treasurer</PositionName>
                    <TeamMemberDescription>Year: Senior</TeamMemberDescription>
                    <TeamMemberDescription>Major: Psychology</TeamMemberDescription>
                    <TeamMemberDescription>Minor: Criminal Justice, RHS</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Scarborough, Maine</TeamMemberDescription>
                    <TeamMemberDescription>Disciplines: Preliminary Free Skate, Preliminary Pattern Dance</TeamMemberDescription>
                </TeamMemberInfo>
              </TeamMemberCard>
            </TeamRow>

            <TeamRow className="third-row">
              <TeamMemberCard className="triple">
                <TeamMemberImage src="/images/exec-members/fundraisingchair.jpg" alt="Fundraising Chair" />
                <TeamMemberInfo>
                  <h3>Genella Evans</h3>
                  <PositionName>Fundraising Chair</PositionName>
                    <TeamMemberDescription>Year: Sophomore</TeamMemberDescription>
                    <TeamMemberDescription>Major: Cybersecurity</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: West Hartford, Connecticut</TeamMemberDescription>
                    <TeamMemberDescription>Disciplines: Senior Ladies, Novice Free Dance</TeamMemberDescription>
                </TeamMemberInfo>
              </TeamMemberCard>

              <TeamMemberCard className="triple">
                <TeamMemberImage src="/images/exec-members/thonchair.jpg" alt="THON Chair" />
                <TeamMemberInfo>
                  <h3>Emma Wassel</h3>
                  <PositionName>THON Chair</PositionName>
                    <TeamMemberDescription>Year: Senior</TeamMemberDescription>
                    <TeamMemberDescription>Major: Graphic Design</TeamMemberDescription>
                    <TeamMemberDescription>Minor: Costume Design</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Telford, Pennsylvania</TeamMemberDescription>
                    <TeamMemberDescription>Discipline: Excel Pre-Preliminary Free Skate</TeamMemberDescription>
                </TeamMemberInfo>
              </TeamMemberCard>

              <TeamMemberCard className="triple">
                <TeamMemberImage src="/images/exec-members/prchair.jpg" alt="PR Chair" />
                <TeamMemberInfo>
                  <h3>Lillie Nye</h3>
                  <PositionName>PR Chair</PositionName>
                    <TeamMemberDescription>Year: Sophomore</TeamMemberDescription>
                    <TeamMemberDescription>Major: Public Relations</TeamMemberDescription>
                    <TeamMemberDescription>Minors: Digital Media Trends and Analytics, French</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Niskayuna, New York</TeamMemberDescription>
                    <TeamMemberDescription>Discipline: Senior Ladies</TeamMemberDescription>
                </TeamMemberInfo>
              </TeamMemberCard>

              <TeamMemberCard className="triple">
                <TeamMemberImage src="/images/exec-members/socialchair.jpg" alt="Social Chair" />
                <TeamMemberInfo>
                  <h3>Ana Felipe</h3>
                  <PositionName>Social Chair</PositionName>
                    <TeamMemberDescription>Year: Senior</TeamMemberDescription>
                    <TeamMemberDescription>Major: Nutrition and Dietetics</TeamMemberDescription>
                    <TeamMemberDescription>Minor: Sports Nutrition</TeamMemberDescription>
                    <TeamMemberDescription>Hometown: Pompano Beach, Florida</TeamMemberDescription>
                    <TeamMemberDescription>Discipline: Pre-Juvenile Excel Freeskate</TeamMemberDescription>
                </TeamMemberInfo>
              </TeamMemberCard>
            </TeamRow>
          </TeamList>
        </ExecBoardSection>

        <CompetitionTeamSection>
          <h2>Competition Team Members</h2>
          <p>Our competition team is made up of skilled skaters who compete in various events. If you'd like to join the team, we encourage skaters of all levels to reach out!</p>
        </CompetitionTeamSection>

        <JoinOurTeam>
          <h2>Interested in Joining Our Team?</h2>
          <p>We welcome skaters of all levels, from beginners to competitive athletes! If you're interested in joining the team, please reach out to us for more information.</p>
          <ButtonGroup>
            <Link href="/tryouts" passHref>
              <SecondaryButton>Tryout Information</SecondaryButton>
            </Link>
            <Link href="/contact" passHref>
              <SecondaryButton>Contact Us</SecondaryButton>
            </Link>
          </ButtonGroup>
        </JoinOurTeam>
      </MainContent>

      <Footer>
      </Footer>
    </Section>
  );
};

export default OurTeam;  // Make sure you're using the default export

// STYLED COMPONENTS
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding-top: 80px;
  padding-bottom: 80px;
`;

const Header = styled.header`
  width: 100%;
  background-color: #041e42;
  color: white;
  padding: 40px 0;
  text-align: center;
`;

const Banner = styled.div`
  background-color: #0f3068;
  padding: 8px 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
  gap: 40px;
`;

const ExecBoardSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 0px
`;

const TeamList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;

  &.second-row {
    justify-content: space-around;
  }

  &.third-row {
    justify-content: space-evenly;
  }
`;

const TeamMemberCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 250px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  &.single {
    width: 300px;
  }

  &.double {
    width: 250px;
  }

  &.triple {
    width: 230px;
  }

  &.quadruple {
    width: 220px;
  }
`;

const TeamMemberImage = styled.img`
  border-radius: 2%;
  width: 200px;
  height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const TeamMemberInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 3px;
    color: #041e42;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 5px;
  }
`;

const PositionName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 7px;
`;


const TeamMemberDescription = styled.div`
  font-size: 0.8rem; /* Smaller font size than the position name */
  color: #555;
  text-align: left; /* Left justify the text */
  margin-top: 2px; /* Small space above the description */
  margin-bottom: 2px; /* Small space below the description */
`;


const CompetitionTeamSection = styled.section`
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const JoinOurTeam = styled.section`
width: 80%;
margin: 40px auto; /* Horizontal centering */
padding: 30px;
background-color: #041e42;
color: white;
border-radius: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
text-align: center;
/* Uncomment this if you want vertical centering */
/* height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center; */
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: white;
  color: #041e42;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffd000;
  }
`;

const SecondaryButton = styled.a`
  display: inline-block;
  background-color: transparent;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid white;
  transition: all 0.3s ease;
  margin-top: 20px;


  &:hover {
    background-color: white;
    color: #041e42;
  }
`;

