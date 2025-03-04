import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import { useStateContext } from '@/context/StateContext'

const Schedule = () => {
  const { user } = useStateContext()

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Schedule</Title>
          <Subtitle>Practices, Events & Competitions</Subtitle>
        </Banner>
      </Header>

      <MainContent>
        <PracticeSchedule>
          <h2>Regular Practice Schedule</h2>
          <p>
            Join us for our regular practice sessions at the Penn State Ice Pavilion.
            All team members are encouraged to attend as many sessions as possible.
          </p>

          <ScheduleTable>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Type</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday</td>
                <td>6:00 PM - 8:00 PM</td>
                <td>Team Practice</td>
                <td>PSU Ice Pavilion</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>5:30 PM - 7:30 PM</td>
                <td>Freestyle & Choreography</td>
                <td>PSU Ice Pavilion</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>7:00 AM - 9:00 AM</td>
                <td>Technical Skills</td>
                <td>PSU Ice Pavilion</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Open Practice</td>
                <td>PSU Ice Pavilion</td>
              </tr>
            </tbody>
          </ScheduleTable>

          <ScheduleNotes>
            <strong>Notes:</strong>
            <ul>
              <li>Schedule may change during holidays and finals week</li>
              <li>Extra practices will be scheduled before competitions</li>
              <li>Always check team emails for last-minute schedule changes</li>
            </ul>
          </ScheduleNotes>
        </PracticeSchedule>

        <EventsContainer>
          <h2>Upcoming Events & Competitions</h2>
          <p>
            Mark your calendars for these important dates! Our team participates in
            various collegiate competitions and hosts several events throughout the year.
          </p>

          <EventCard>
            <EventDate>March 5-7, 2023</EventDate>
            <EventTitle>Eastern Sectional Intercollegiate Competition</EventTitle>
            <EventLocation>Cornell University, Ithaca, NY</EventLocation>
            <EventDescription>
              Our team will be competing in freestyle, dance, and team maneuvers events.
              Travel arrangements will be sent via email two weeks before the competition.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>April 10, 2023</EventDate>
            <EventTitle>Penn State Figure Skating Spring Exhibition</EventTitle>
            <EventLocation>PSU Ice Pavilion</EventLocation>
            <EventDescription>
              Join us for our end-of-year showcase featuring performances from all team members.
              Friends and family are welcome to attend! Admission is free for PSU students.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>April 22-24, 2023</EventDate>
            <EventTitle>U.S. Collegiate Championship</EventTitle>
            <EventLocation>University of Denver, CO</EventLocation>
            <EventDescription>
              Qualifying skaters will represent Penn State at the national collegiate championship.
              Selection will be based on performance at sectionals and team practices.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>May 1, 2023</EventDate>
            <EventTitle>End of Year Team Banquet</EventTitle>
            <EventLocation>Nittany Lion Inn</EventLocation>
            <EventDescription>
              Celebrate the year's accomplishments with dinner, awards, and recognition.
              Senior skaters will be honored and next year's team officers announced.
            </EventDescription>
          </EventCard>
        </EventsContainer>
      </MainContent>

      <CalendarSection>
        <h2>Full Calendar</h2>
        <p>
          View our complete calendar including all practices, competitions, exhibitions,
          fundraisers, and social events. Subscribe to stay updated!
        </p>
        <CalendarButton href="https://calendar.google.com" target="_blank">
          Subscribe to Google Calendar
        </CalendarButton>
      </CalendarSection>

      <JoinTraining>
        <h2>Interested in Joining Our Team?</h2>
        <p>
          We welcome skaters of all levels, from beginners to competitive athletes!
          Come to our info session at the beginning of the semester or reach out to us for more information.
        </p>
        <ButtonGroup>
          <Link href="/tryouts" passHref>
            <PrimaryButton>Tryout Information</PrimaryButton>
          </Link>
          <Link href="/hi" passHref>
            <SecondaryButton>Contact Us</SecondaryButton>
          </Link>
        </ButtonGroup>
      </JoinTraining>

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

// STYLED COMPONENTS
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding-top: 80px; /* Adjust based on navbar height */
  padding-bottom: 80px; /* Adjust based on navbar height */
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

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-top: 40px;
  gap: 40px;
`

const PracticeSchedule = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
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
    margin-bottom: 30px;
  }
`

const ScheduleTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #041e42;
    color: white;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
`

const ScheduleNotes = styled.div`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  border-left: 4px solid #041e42;
  
  ul {
    margin-top: 10px;
    margin-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
    font-size: 1rem;
  }
`

const EventsContainer = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
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
    margin-bottom: 30px;
  }
`

const EventCard = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 80px;
    padding-bottom: 0;
  }
`

const EventDate = styled.div`
  font-weight: bold;
  color: #1a3c7f;
  font-size: 1.1rem;
  margin-bottom: 5px;
`

const EventTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 5px;
  color: #041e42;
`

const EventLocation = styled.div`
  font-style: italic;
  color: #555;
  margin-bottom: 10px;
`

const EventDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
`

const CalendarSection = styled.section`
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
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`

const CalendarButton = styled.a`
  display: inline-block;
  background-color: #0378D3;
  color: white;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #025CA0;
  }
`

const JoinTraining = styled.section`
  width: 80%;
  margin: 40px 0;
  padding: 30px;
  background-color: #041e42;
  color: white;
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
    line-height: 1.6;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const PrimaryButton = styled.a`
  display: inline-block;
  background-color: #ffdd44;
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
`

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
  
  &:hover {
    background-color: white;
    color: #041e42;
  }
`

const Footer = styled.footer`
  width: 100%;
  background-color: #041e42;
  color: white;
  padding: 20px 0;
  margin-top: 40px;
  text-align: center;
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

export default Schedule