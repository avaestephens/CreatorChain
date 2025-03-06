import { google } from 'googleapis';

// Google Calendar credentials
const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

// Google Calendar API scopes
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// Create JWT auth client
const getJwtClient = () => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    SCOPES
  );
  return jwtClient;
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const jwtClient = getJwtClient();
    const calendar = google.calendar({ version: 'v3', auth: jwtClient });
    
    // Get calendar events
    // By default, fetch events for the next 3 months
    const now = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(now.getMonth() + 3);
    
    const events = await calendar.events.list({
      calendarId: GOOGLE_CALENDAR_ID,
      timeMin: now.toISOString(),
      timeMax: threeMonthsLater.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });
    
    const formattedEvents = events.data.items.map((event) => {
      return {
        id: event.id,
        title: event.summary,
        description: event.description,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
        location: event.location,
      };
    });
    
    return res.status(200).json({ events: formattedEvents });
  } catch (error) {
    console.error('Error fetching calendar events:', error);
    return res.status(500).json({ message: 'Error fetching calendar events' });
  }
}