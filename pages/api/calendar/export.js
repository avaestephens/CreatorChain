// import { google } from 'googleapis';
// import ical from 'ical-generator';

// // Your Google Calendar credentials
// const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
// const GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
// const GOOGLE_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID;

// // Google Calendar API scopes
// const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

// // Create JWT auth client
// const getJwtClient = () => {
//   const jwtClient = new google.auth.JWT(
//     GOOGLE_CLIENT_EMAIL,
//     null,
//     GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//     SCOPES
//   );
//   return jwtClient;
// };

// export default async function handler(req, res) {
//   if (req.method !== 'GET') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const jwtClient = getJwtClient();
//     const calendar = google.calendar({ version: 'v3', auth: jwtClient });
    
//     // Get calendar events for the next 6 months
//     const now = new Date();
//     const sixMonthsLater = new Date();
//     sixMonthsLater.setMonth(now.getMonth() + 6);
    
//     const events = await calendar.events.list({
//       calendarId: GOOGLE_CALENDAR_ID,
//       timeMin: now.toISOString(),
//       timeMax: sixMonthsLater.toISOString(),
//       singleEvents: true,
//       orderBy: 'startTime',
//     });
    
//     // Create iCal calendar
//     const cal = ical({
//       domain: 'psu-figure-skating.edu',
//       name: 'Penn State Figure Skating Calendar',
//       timezone: 'America/New_York',
//     });
    
//     // Add events to calendar
//     events.data.items.forEach(event => {
//       const startDate = event.start.dateTime ? new Date(event.start.dateTime) : new Date(event.start.date);
//       const endDate = event.end.dateTime ? new Date(event.end.dateTime) : new Date(event.end.date);
      
//       cal.createEvent({
//         start: startDate,
//         end: endDate,
//         summary: event.summary,
//         description: event.description,
//         location: event.location,
//         url: event.htmlLink,
//       });
//     });
    
//     // Set headers for file download
//     res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
//     res.setHeader('Content-Disposition', 'attachment; filename="psu-figure-skating-calendar.ics"');
    
//     // Send the calendar data
//     return res.status(200).send(cal.toString());
//   } catch (error) {
//     console.error('Error exporting calendar:', error);
//     return res.status(500).json({ message: 'Error exporting calendar' });
//   }
// }