import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Navbar from '@/components/Dashboard/Navbar';
import Footer from '@/components/LandingPage/Footer';
import { useStateContext } from '@/context/StateContext';
import { FaCalendarAlt, FaSkating, FaShoppingBag, FaPlane } from 'react-icons/fa';
import { database as db } from '@/backend/Firebase';
import { collection, addDoc, query, where, getDocs, orderBy } from 'firebase/firestore';



const MembersOnly = () => {
  const { user } = useStateContext();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [practiceHours, setPracticeHours] = useState({
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
  });
  const [previousLogs, setPreviousLogs] = useState([]);
  const [weekStarting, setWeekStarting] = useState(() => {
    const currentDate = new Date();
    // Find the most recent Monday (or today if it is Monday)
    const dayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, etc.
    const diff = (dayOfWeek === 0 ? 6 : dayOfWeek - 1); // Adjust to make Monday the first day
    const monday = new Date(currentDate);
    monday.setDate(currentDate.getDate() - diff);
    
    return monday.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  });

  // Check if user is logged in
  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    } else {
      setLoading(false);
      fetchPreviousPracticeLogs();
    }
  }, [user, router]);

  // Fetch previous practice logs for the current user
  const fetchPreviousPracticeLogs = async () => {
    try {
      if (!user) return;
      
      const practiceLogsRef = collection(db, 'practiceHours');
      const q = query(
        practiceLogsRef,
        where('userId', '==', user.uid),
        orderBy('weekStarting', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const logs = [];
      
      querySnapshot.forEach((doc) => {
        logs.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setPreviousLogs(logs);
    } catch (err) {
      console.error('Error fetching practice logs:', err);
      setError('Failed to load your practice history');
    }
  };

  const handleHoursChange = (day, value) => {
    // Ensure value is a number and between 0-24
    const hours = Math.min(Math.max(parseFloat(value) || 0, 0), 24);
    
    setPracticeHours(prev => ({
      ...prev,
      [day]: hours
    }));
  };

  const calculateTotalHours = () => {
    return Object.values(practiceHours).reduce((total, hours) => total + hours, 0);
  };

  const handleSubmitHours = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('You must be logged in to submit practice hours');
      return;
    }
    
    try {
      setLoading(true);
      
      // Create a new practice log entry
      const practiceLog = {
        userId: user.uid,
        userName: user.displayName || user.email,
        weekStarting,
        hours: practiceHours,
        totalHours: calculateTotalHours(),
        submittedAt: new Date().toISOString()
      };
      
      // Add to Firestore
      await addDoc(collection(db, 'practiceHours'), practiceLog);
      
      // Reset form
      setPracticeHours({
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
        saturday: 0,
        sunday: 0,
      });
      
      alert('Practice hours submitted successfully!');
      fetchPreviousPracticeLogs();
    } catch (err) {
      console.error('Error submitting practice hours:', err);
      setError('Failed to submit practice hours. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const handleOrderClick = () => {
    window.open('https://docs.google.com/spreadsheets/d/15WefbdnQt5dEheekwuuHusye223XkUak1VdtCzAI4-U/edit?gid=0#gid=0', '_blank');
  };

  if (loading) {
    return (
      <Section>
        <Navbar />
        <LoadingMessage>Loading member content...</LoadingMessage>
        <Footer />
      </Section>
    );
  }

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Members Only</Title>
          <Subtitle>Welcome, {user?.displayName || user?.email}</Subtitle>
        </Banner>
      </Header>

      <MainContent>
        {/* Practice Hours Tracker Section */}
        <TrackerSection>
          <SectionHeader>
            <IconWrapper><FaSkating /></IconWrapper>
            <h2>Practice Ice Tracker</h2>
          </SectionHeader>
          
          <TrackerForm onSubmit={handleSubmitHours}>
            <WeekSelector>
              <label htmlFor="weekStarting">Week Starting:</label>
              <input 
                type="date" 
                id="weekStarting" 
                value={weekStarting} 
                onChange={(e) => setWeekStarting(e.target.value)}
                required
              />
            </WeekSelector>
            
            <HoursGrid>
              {Object.keys(practiceHours).map((day) => (
                <DayInput key={day}>
                  <label htmlFor={day}>
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </label>
                  <input
                    type="number"
                    id={day}
                    min="0"
                    max="24"
                    step="0.5"
                    value={practiceHours[day]}
                    onChange={(e) => handleHoursChange(day, e.target.value)}
                  />
                  <span>hours</span>
                </DayInput>
              ))}
            </HoursGrid>
            
            <TotalHours>
              <strong>Total Weekly Hours:</strong> {calculateTotalHours()} hours
            </TotalHours>
            
            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Log Practice Hours'}
            </SubmitButton>
          </TrackerForm>
          
          {/* Previous Logs Summary */}
          <PreviousLogs>
            <h3>Your Recent Practice Logs</h3>
            {previousLogs.length === 0 ? (
              <p>No practice hours logged yet. Start tracking your ice time above!</p>
            ) : (
              <LogsTable>
                <thead>
                  <tr>
                    <th>Week</th>
                    <th>Total Hours</th>
                    <th>Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {previousLogs.slice(0, 5).map((log) => (
                    <tr key={log.id}>
                      <td>{formatDate(log.weekStarting)}</td>
                      <td>{log.totalHours} hours</td>
                      <td>{formatDate(log.submittedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </LogsTable>
            )}
          </PreviousLogs>
        </TrackerSection>

        {/* Team Merchandise Section */}
        <MerchandiseSection>
          <SectionHeader>
            <IconWrapper><FaShoppingBag /></IconWrapper>
            <h2>Team Merchandise</h2>
          </SectionHeader>
          
          <p>
            Get your Penn State Figure Skating gear! Team merchandise is available for purchase.
            Pre-orders for the Spring 2025 collection are now open.
          </p>
          
          <MerchandiseGrid>
            <MerchandiseItem>
              <MerchandiseImage src="/images/merch/jacket.jpg" alt="Team Jacket" />
              <MerchandiseName>Team Jacket</MerchandiseName>
              <MerchandisePrice>$100.00</MerchandisePrice>
              <MerchandiseDescription>Embroidered team jacket with Penn State Figure Skating logo</MerchandiseDescription>
              <OrderButton onClick={handleOrderClick}>Pre-Order</OrderButton>
            </MerchandiseItem>
            
            <MerchandiseItem>
              <MerchandiseImage src="/images/merch/tshirt.jpg" alt="Nationals T-Shirt" />
              <MerchandiseName>Practice T-Shirt</MerchandiseName>
              <MerchandisePrice>$30.00</MerchandisePrice>
              <MerchandiseDescription>Moisture-wicking performance tee with team logo</MerchandiseDescription>
              <OrderButton onClick={handleOrderClick}>Pre-Order</OrderButton>
            </MerchandiseItem>
          </MerchandiseGrid>
          
          <OrderNotes>
            <p>
              <strong>Order Deadline:</strong> March, 17 2025<br />
              <strong>Expected Delivery:</strong> April, 5 2025
            </p>
            <p>
              For custom sizing or questions about merchandise, 
              please contact our merchandise manager: amw7595@psu.edu
            </p>
          </OrderNotes>
        </MerchandiseSection>

        {/* Competition Travel Details Section */}
        <TravelSection>
          <SectionHeader>
            <IconWrapper><FaPlane /></IconWrapper>
            <h2>Upcoming Competition Travel Details</h2>
          </SectionHeader>
          
          <CompetitionInfo>
            <CompetitionName>Intercollegiate National Championships</CompetitionName>
            <CompetitionDetails>
              <CompetitionDetail>
                <strong>Dates:</strong> April 11-14, 2025
              </CompetitionDetail>
              <CompetitionDetail>
                <strong>Location:</strong> University of Notre Dame - Compton Family Ice Arena, South Bend, IN
              </CompetitionDetail>
              <CompetitionDetail>
                <strong>Registration Deadline:</strong> March 15, 2025
              </CompetitionDetail>
            </CompetitionDetails>
            
            <TravelSchedule>
              <h4>Team Travel Schedule</h4>
              <ScheduleItem>
                <ScheduleDay>Thursday, April 10</ScheduleDay>
                <ScheduleDetails>
                  <p><strong>9:00 AM:</strong> Team meeting at Pegula Ice Arena</p>
                  <p><strong>10:00 AM:</strong> Bus departure from University Park</p>
                  <p><strong>5:30 PM:</strong> Estimated arrival at hotel in South Bend</p>
                  <p><strong>7:00 PM:</strong> Team dinner (required)</p>
                </ScheduleDetails>
              </ScheduleItem>
              
              <ScheduleItem>
                <ScheduleDay>Friday, April 11</ScheduleDay>
                <ScheduleDetails>
                  <p><strong>8:00 AM:</strong> Practice ice session</p>
                  <p><strong>11:00 AM:</strong> Competition begins</p>
                  <p><strong>6:00 PM:</strong> Team dinner</p>
                </ScheduleDetails>
              </ScheduleItem>
              
              <ScheduleItem>
                <ScheduleDay>Saturday, April 12</ScheduleDay>
                <ScheduleDetails>
                  <p><strong>6:00 AM:</strong> Practice ice sessions</p>
                  <p><strong>7:30 AM:</strong> Competition resumes</p>
                  <p><strong>10:00 PM:</strong> Competition ends</p>
                  <p><strong>11:00 PM:</strong> Arrive back at hotel</p>
                </ScheduleDetails>
              </ScheduleItem>

              <ScheduleItem>
                <ScheduleDay>Sunday, April 13</ScheduleDay>
                <ScheduleDetails>
                  <p><strong>6:00 AM:</strong> Hotel checkout</p>
                  <p><strong>8:00 AM:</strong> Competition resumes</p>
                  <p><strong>5:00 PM:</strong> Competition ends</p>
                  <p><strong>5:30 PM:</strong> Bus Departure from ice rink</p>
                  <p><strong>1:30 AM:</strong> Estimated arrival at University Park</p>
                </ScheduleDetails>
              </ScheduleItem>
            </TravelSchedule>
            
            <TravelNotes>
              <h4>Important Notes</h4>
              <ul>
                <li>All team members must travel with the team unless prior arrangements have been approved</li>
                <li>Competition fees ($175) are due by March 10, 2025</li>
                <li>Roommate preferences form must be submitted by March 15, 2025</li>
                <li>Practice attire required for Thursday practice, competition dresses/costumes for events</li>
              </ul>
            </TravelNotes>
            
          </CompetitionInfo>
        </TravelSection>
      </MainContent>
      
      <Footer />
    </Section>
  );
};

// STYLED COMPONENTS
const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f4f4;
  padding-top: 80px; /* Adjust based on navbar height */
`;

const Header = styled.header`
  width: 100%;
  background-color: #041e42;
  color: white;
  padding: 40px 0;
  text-align: center;
`;

const Banner = styled.div`
  background-color: #0f3068; /* PSU Blue */
  padding: 8px 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 40px 0;
  gap: 2rem;
`;

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: #041e42;
    margin: 0;
  }
`;

const IconWrapper = styled.div`
  font-size: 1.8rem;
  color: #041e42;
  margin-right: 15px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TrackerSection = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TrackerForm = styled.form`
  margin-bottom: 30px;
`;

const WeekSelector = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  
  label {
    font-weight: 500;
    font-size: 1.1rem;
  }
  
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }
`;

const HoursGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
`;

const DayInput = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  input {
    padding: 8px 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    margin-bottom: 5px;
  }
  
  span {
    font-size: 0.9rem;
    color: #666;
  }
`;

const TotalHours = styled.div`
  font-size: 1.2rem;
  margin: 20px 0;
  padding: 10px;
  background-color: #f0f5ff;
  border-radius: 5px;
  border-left: 4px solid #041e42;
`;

const SubmitButton = styled.button`
  background-color: #041e42;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #1a3c7f;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const PreviousLogs = styled.div`
  margin-top: 30px;
  
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #041e42;
    margin-bottom: 15px;
  }
`;

const LogsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
    color: #041e42;
  }
  
  tr:hover {
    background-color: #f5f5f5;
  }
`;

const MerchandiseSection = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  p {
    font-size: 1.1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 20px;
  }
`;

const MerchandiseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
  margin: 30px 0;
`;

const MerchandiseItem = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const MerchandiseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 15px;
`;

const MerchandiseName = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #041e42;
  margin-bottom: 5px;
`;

const MerchandisePrice = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #1a3c7f;
  margin-bottom: 10px;
`;

const MerchandiseDescription = styled.p`
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-bottom: 15px;
`;

const OrderButton = styled.button`
  background-color: #041e42;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #1a3c7f;
  }
`;

const OrderNotes = styled.div`
  background-color: #f0f5ff;
  border-radius: 5px;
  padding: 15px;
  
  p {
    font-size: 0.95rem;
    margin-bottom: 10px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const TravelSection = styled.section`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CompetitionInfo = styled.div`
  margin-top: 15px;
`;

const CompetitionName = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  color: #041e42;
  margin-bottom: 15px;
`;

const CompetitionDetails = styled.div`
  margin-bottom: 25px;
  padding: 15px;
  background-color: #f0f5ff;
  border-radius: 5px;
`;

const CompetitionDetail = styled.div`
  font-size: 1.1rem;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  strong {
    color: #041e42;
  }
`;

const TravelSchedule = styled.div`
  margin-bottom: 25px;
  
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #041e42;
    margin-bottom: 15px;
    padding-bottom: 5px;
    border-bottom: 2px solid #041e42;
  }
`;

const ScheduleItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ScheduleDay = styled.div`
  font-weight: bold;
  width: 180px;
  color: #041e42;
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const ScheduleDetails = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 8px;
  }
`;

const TravelNotes = styled.div`
  margin-bottom: 25px;
  
  h4 {
    font-size: 1.4rem;
    font-weight: bold;
    color: #041e42;
    margin-bottom: 15px;
  }
  
  ul {
    padding-left: 20px;
    
    li {
      margin-bottom: 10px;
      font-size: 1.05rem;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  background-color: #041e42;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #1a3c7f;
  }
`;

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 100px 0;
  flex: 1;
`;

export default MembersOnly;