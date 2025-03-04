import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"
//import PhotoUploader from '@/components/PhotoUploader'
import { useStateContext } from '@/context/StateContext'
import { getAllUserPhotos } from '@/backend/Database'
import { flexbox } from '@mui/system'
import { useRouter } from 'next/router'



const Dashboard = () => {

  const { user } = useStateContext()

  const [age, setAge] = useState(21)
  const [data, setData] = useState(null)
  //const router = useRouter{}

  function updateAge(){

    setAge(age +1)
  }

  function useEffectFunction(){
    setTimeout(() => {
      setData(age * 1000)

    }, 5000)
  }

  useEffect(useEffectFunction, [age])


  useEffect(() => {
    if (!user){

    }else{

    }

  })

return (
  <Section>
    <Navbar />
    <Header>
      <Banner>
        <Title>Penn  State  Figure  Skating</Title>
      </Banner>
    </Header>

    {/* Team Description Section */}
    <TeamDescription>
        <h2>About Our Team</h2>
        <p>
          The Penn State Figure Skating Team is a vibrant and dedicated group of skaters offering both competitive and recreational opportunities for Penn State students.
        </p>
        <p>
          During the academic year, our team competes in regional figure skating competitions, with the goal of qualifying for the National Collegiate Figure Skating Championship. We participate in events including freestyle, solo dance, and team maneuvers.
        </p>
        <p>
          In addition to competitions, we host several showcases at our home rink, providing skaters with the opportunity to perform in front of family, friends, and the Penn State community. These performances celebrate the talents and achievements of our team.
        </p>
        <p>
          Our team practices twice a week at the Penn State Ice Rink, where skaters hone their skills, build friendships, and work towards improving both individually and as a team.
        </p>
        <p>
          We are proud to have experienced coaching staff who help our skaters reach their fullest potential both on and off the ice.
        </p>
        <Link href="/our-team" passHref>
          <StyledButton>Learn More About Our Team</StyledButton>
        </Link>
      </TeamDescription>

    <MainContent>
      <Card>
        <CardTitle>About the Team</CardTitle>
        <CardText>
          The Penn State Figure Skating Team is a passionate group of skaters...
        </CardText>
        <Link href="/our-team" passHref>
          <CardButton>Meet the Team</CardButton>
        </Link>
      </Card>

      <Card>
        <CardTitle>Schedule</CardTitle>
        <CardText>Check out our upcoming practices and events...</CardText>
        <Link href="/schedule" passHref>
          <CardButton>View Schedule</CardButton>
        </Link>
      </Card>

      <Card>
        <CardTitle>Contact Us</CardTitle>
        <CardText>Get in touch with us for more information...</CardText>
        <Link href="/contact" passHref>
          <CardButton>Contact Us</CardButton>
        </Link>
      </Card>
    </MainContent>

    <Footer>
      <SocialLinks>
        <Link href="/social-media" passHref>
          <SocialButton>Follow Us on Social Media</SocialButton>
        </Link>
      </SocialLinks>
    </Footer>
  </Section>
)
}


//STYLED COMPONENTS
// const Section = styled.section`
// width: 100%
// height: 100vh;
// display: flex;
// justify-content: center;
// `


// const TopHeader = styled.h1`
// font-size: 20px;
// display: flexbox;
// `
const Section = styled.section`
  width: 100%;
  height: 100vh;
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
  background-color: #0f3068    ; /* PSU Blue */
  padding: 20px 0;
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

const TeamDescription = styled.section`
  width: 80%;
  margin: 40px 0;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
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
  margin-top: 40px;
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

// const Footer = styled.footer`
//   width: 100%;
//   background-color: #041e42;
//   color: white;
//   padding: 20px 0;
//   margin-top: 40px;
//   text-align: center;
// `

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