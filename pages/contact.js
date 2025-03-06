import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Navbar from '@/components/Dashboard/Navbar'
import Footer from "@/components/LandingPage/Footer"
import { useStateContext } from '@/context/StateContext'
import { FaInstagram, FaTiktok, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import TikTokEmbed from '@/components/TikTokEmbed' 




const Contact = () => {
  const { user } = useStateContext();

  const [tiktokVideos, setTiktokVideos] = useState([]);
  //const [loading, setLoading] = useState(true);

  const [instagramFeed, setInstagramFeed] = useState([]);
  const [tiktokFeed, setTiktokFeed] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const videoIds = ['7430827958723530026'];

  useEffect(() => {
    const fetchInstagramFeed = async () => {
      try {
        const sampleData = [
          {
            id: 'post1',
            media_url: '/api/placeholder/300/300',
            caption: 'Team practice today! #PSUFigureSkating',
            permalink: 'https://instagram.com/p/sample1',
            timestamp: '2023-02-15T18:30:00Z'
          },
          {
            id: 'post2',
            media_url: '/api/placeholder/300/300',
            caption: 'Competition ready! ⛸️ #CollegiateFigureSkating',
            permalink: 'https://instagram.com/p/sample2',
            timestamp: '2023-02-10T15:45:00Z'
          },
          {
            id: 'post3',
            media_url: '/api/placeholder/300/300',
            caption: 'Join us for our spring showcase next weekend!',
            permalink: 'https://instagram.com/p/sample3',
            timestamp: '2023-02-05T12:15:00Z'
          }
        ];
        setInstagramFeed(sampleData);
      } catch (err) {
        console.error('Error fetching Instagram feed:', err);
        setError('Failed to load Instagram content');
      }
    };

    fetchInstagramFeed();
  }, []);



  useEffect(() => {
    const fetchTikTokVideos = async () => {
      try {
        const response = await fetch('/api/tiktok');
        if (!response.ok) {
          throw new Error('Failed to fetch TikTok videos');
        }
        const data = await response.json();
        setTiktokVideos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching TikTok videos:', error);
        setLoading(false);
      }
    };
    
    fetchTikTokVideos();
  }, []);
  

  useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script); // Clean up on unmount
  };
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Submitting form data:', formData);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <Section>
      <Navbar />
      <Header>
        <Banner>
          <Title>Contact Us</Title>
        </Banner>
      </Header>

      <MainContent>
        <ContactInfo>
          <h2>Get in Touch with PSUFS</h2>
          <p>
            We'd love to hear from you! Whether you're interested in joining the team,
            have questions about our events, or just want to learn more about figure skating
            at Penn State, please don't hesitate to reach out.
          </p>

          <ContactMethod>
            <IconWrapper>
              <FaEnvelope />
            </IconWrapper>
            <ContactDetails>
              <ContactTitle>Email</ContactTitle>
              <ContactDetail><strong>General Inquiries:</strong> psufigureskating@psu.edu</ContactDetail>
              <ContactDetail><strong>Club President:</strong> aes6592@psu.edu</ContactDetail>
            </ContactDetails>
          </ContactMethod>

          <ContactMethod>
            <IconWrapper>
              <FaPhone />
            </IconWrapper>
            <ContactDetails>
              <ContactTitle>Phone</ContactTitle>
              <ContactDetail><strong>Club Office:</strong> (814) 555-1234</ContactDetail>
              <ContactDetail><strong>Pegula Ice Arena:</strong> (814) 555-5678</ContactDetail>
            </ContactDetails>
          </ContactMethod>

          <ContactMethod>
            <IconWrapper>
              <FaMapMarkerAlt />
            </IconWrapper>
            <ContactDetails>
              <ContactTitle>Practice Location</ContactTitle>
              <ContactDetail>
                <strong>Pegula Ice Arena</strong><br />
                University Park, PA 16802<br />
                <LocationLink href="https://maps.app.goo.gl/jiURBRdSVyA88TT49" target="_blank">View on Map</LocationLink>
              </ContactDetail>
            </ContactDetails>
          </ContactMethod>
        </ContactInfo>

        <ContactForm>
          <h2>Send Us a Message</h2>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="What is this regarding?" value={formData.subject} onChange={handleChange} required />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea id="message" rows="5" placeholder="Type your message here..." value={formData.message} onChange={handleChange} required></TextArea>
            </FormGroup>

            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactForm>
      </MainContent>




      <SocialFeedsSection>
      <h2>Latest from Our Social Media</h2>
      
      {loading ? (
        <LoadingMessage>Loading social media feeds...</LoadingMessage>
      ) : (
        <>
          {/* Instagram feed section */}
          
          <FeedContainer>
            <FeedTitle><FaTiktok /> Our Latest TikTok</FeedTitle>
            {tiktokVideos.length > 0 ? (
              tiktokVideos.map(video => (
                <div key={video.id} className="tiktok-video-container">
                  <TikTokEmbed videoId={video.id} />
                </div>
              ))
            ) : (
              <p>No TikTok videos available</p>
            )}
          </FeedContainer>
        </>
      )}
    </SocialFeedsSection>
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

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  margin: 40px 0;
  gap: 2rem;
  
  @media (max-width: 900px) {
    flex-direction: column;
  }
`

const ContactInfo = styled.div`
  flex: 1;
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

const ContactMethod = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: flex-start;
`

const IconWrapper = styled.div`
  font-size: ${props => props.large ? '2.5rem' : '1.5rem'};
  color: #041e42;
  margin-right: 15px;
  min-width: ${props => props.large ? '60px' : '30px'};
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactDetails = styled.div`
  flex: 1;
`

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  color: #041e42;
  margin-bottom: 10px;
  font-weight: bold;
`

const ContactDetail = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  line-height: 1.5;
`

const LocationLink = styled.a`
  display: inline-block;
  color: #1a3c7f;
  text-decoration: none;
  margin-top: 5px;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`

const ContactForm = styled.div`
  flex: 1;
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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
`

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #1a3c7f;
  }
`

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #1a3c7f;
  }
`

const SubmitButton = styled.button`
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
`

const SocialSection = styled.section`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #041e42;
    text-align: center;
  }
`

const SocialConnectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
`

const SocialConnectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

const SocialTitle = styled.h3`
  font-size: 1.3rem;
  margin: 15px 0;
  color: #041e42;
`

const SocialLink = styled.a`
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

const SocialFeedsSection = styled.section`
  width: 80%;
  margin-bottom: 40px;
  
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 30px;
    color: #041e42;
    text-align: center;
  }
`

const LoadingMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 40px 0;
`

const ErrorMessage = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #d32f2f;
  padding: 40px 0;
`

const FeedContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`

const FeedTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #041e42;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const InstagramFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`

const InstagramPost = styled.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const InstagramImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px;
`

const InstagramCaption = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const TikTokFeed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
`

const TikTokVideo = styled.a`
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const TikTokThumbnail = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 8px;
`

const TikTokTitle = styled.p`
  font-size: 0.9rem;
  margin-top: 10px;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

const TeamMembersSection = styled.section`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
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

const TeamMembers = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

const TeamMember = styled.div`
  width: 200px;
  text-align: center;
`

const MemberPhoto = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #041e42;
`

const MemberName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 15px 0 5px;
  color: #041e42;
`

const MemberRole = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2px;
`

const MemberEmail = styled.a`
  font-size: 0.9rem;
  color: #1a3c7f;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

// const FeedTitle = styled.h2`
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
// `;

const VideoContainer = styled.div`
  margin-bottom: 2rem;
`;





export default Contact