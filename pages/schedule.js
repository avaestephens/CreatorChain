
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"
import { useStateContext } from '@/context/StateContext'

const Schedule = () => {
  const { user } = useStateContext()
  const [calendarEvents, setCalendarEvents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Fetch calendar events when component mounts
  useEffect(() => {
    const fetchCalendarEvents = async () => {
      setLoading(true)
      try {
        const response = await fetch('/api/calendar')
        if (!response.ok) {
          throw new Error('Failed to fetch calendar events')
        }
        const data = await response.json()
        setCalendarEvents(data.events)
      } catch (err) {
        console.error('Error fetching calendar events:', err)
        setError('Failed to load calendar events. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchCalendarEvents()
  }, [])

  // Format date for display
  const formatEventDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Schedule</Title>
        </Banner>
      </Header>

      <MainContent>
        <PracticeSchedule>
          <h2>Regular Practice Schedule</h2>
          <p>
            Join us for our regular practice sessions at the Penn State Pegula Ice Arena.
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
                <td>Pegula Ice Arena</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>5:30 PM - 7:30 PM</td>
                <td>Freestyle & Choreography</td>
                <td>Pegula Ice Arena</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>7:00 AM - 9:00 AM</td>
                <td>Technical Skills</td>
                <td>Pegula Ice Arena</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM - 12:00 PM</td>
                <td>Open Practice</td>
                <td>Pegula Ice Arena</td>
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
            <EventDate>March 5-7, 2025</EventDate>
            <EventTitle>Eastern Sectional Intercollegiate Competition</EventTitle>
            <EventLocation>Cornell University, Ithaca, NY</EventLocation>
            <EventDescription>
              Our team will be competing in freestyle, dance, and team maneuvers events.
              Travel arrangements will be sent via email two weeks before the competition.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>April 10, 2025</EventDate>
            <EventTitle>Penn State Figure Skating Spring Exhibition</EventTitle>
            <EventLocation>Pegula Ice Arena </EventLocation>
            <EventDescription>
              Join us for our end-of-year showcase featuring performances from all team members.
              Friends and family are welcome to attend! Admission is free for PSU students.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>April 22-24, 2025</EventDate>
            <EventTitle>U.S. Collegiate Championship</EventTitle>
            <EventLocation>University of Denver, CO</EventLocation>
            <EventDescription>
              Qualifying skaters will represent Penn State at the national collegiate championship.
              Selection will be based on performance at sectionals and team practices.
            </EventDescription>
          </EventCard>

          <EventCard>
            <EventDate>May 1, 2025</EventDate>
            <EventTitle>End of Year Team Banquet</EventTitle>
            <EventLocation>Nittany Lion Inn</EventLocation>
            <EventDescription>
              Celebrate the year's accomplishments with dinner, awards, and recognition.
              Senior skaters will be honored and next year's team officers announced.
            </EventDescription>
          </EventCard>
        </EventsContainer>

        {/* Display Google Calendar Events */}
        <GoogleCalendarEvents>
          <h2>Calendar Events</h2>
          <p>These events are pulled directly from our Google Calendar and are updated in real-time.</p>
          
          {loading && <LoadingMessage>Loading calendar events...</LoadingMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          {!loading && !error && calendarEvents.length === 0 && (
            <NoEvents>No upcoming events found in the calendar.</NoEvents>
          )}
          
          {!loading && !error && calendarEvents.length > 0 && (
            <div>
              {calendarEvents.map(event => (
                <CalendarEventCard key={event.id}>
                  <EventDate>{formatEventDate(event.start)}</EventDate>
                  <EventTitle>{event.title}</EventTitle>
                  {event.location && <EventLocation>{event.location}</EventLocation>}
                  {event.description && <EventDescription>{event.description}</EventDescription>}
                </CalendarEventCard>
              ))}
            </div>
          )}
        </GoogleCalendarEvents>
      </MainContent>

      <CalendarSection>
        <h2>Full Calendar</h2>
        <p>
          View our complete calendar including all practices, competitions, exhibitions,
          fundraisers, and social events. Subscribe to stay updated!
        </p>
        <ButtonGroup>
          <CalendarButton 
            href={`https://calendar.google.com/calendar/r?cid=${encodeURIComponent(process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_ID)}`} 
            target="_blank">
            Subscribe to Google Calendar
          </CalendarButton>
          <CalendarButton 
            onClick={() => window.open('/api/calendar/export', '_blank')}
            secondary>
            Download iCal File
          </CalendarButton>
        </ButtonGroup>
      </CalendarSection>
      <Footer>
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
  padding: 8px 0;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
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

const GoogleCalendarEvents = styled(EventsContainer)`
  margin-top: 20px;
`

const EventCard = styled.div`
  margin-bottom: 25px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

const CalendarEventCard = styled(EventCard)`
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 4px solid #041e42;
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

const LoadingMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #555;
  font-style: italic;
`

const ErrorMessage = styled.div`
  text-align: center;
  padding: 20px;
  color: #d32f2f;
  background-color: #ffebee;
  border-radius: 5px;
  border: 1px solid #ffcdd2;
`

const NoEvents = styled.div`
  text-align: center;
  padding: 20px;
  color: #555;
  font-style: italic;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`

const CalendarButton = styled.a`
  display: inline-block;
  background-color: ${props => props.secondary ? 'transparent' : '#0378D3'};
  color: ${props => props.secondary ? '#0378D3' : 'white'};
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;
  border: ${props => props.secondary ? '2px solid #0378D3' : 'none'};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.secondary ? 'rgba(3, 120, 211, 0.1)' : '#025CA0'};
  }
`

export default Schedule