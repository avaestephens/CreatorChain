// export default async function handler(req, res) {
//     try {
//       const tiktokVideos = [
//         {
//           id: '7430827958723530026',
//           share_url: 'https://www.tiktok.com/@pennstatefs/video/7430827958723530026',
//           username: '@pennstatefs',
//           title: 'Who do YOU think had the best costume🧐😏',
//           tags: ['#pennstate', '#psufigureskating', '#halloween'],
//           sound: '♬ original sound - psuclubfigureskating'
//         }
//       ];
      
//       res.status(200).json(tiktokVideos);
//     } catch (error) {
//       console.error('Failed to fetch TikTok data:', error);
//       res.status(500).json({ error: 'Failed to load TikTok content' });
//     }
//   }