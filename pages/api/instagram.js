
export default async function handler(req, res) {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&access_token=${token}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error.message || 'Failed to fetch Instagram posts');
    }

    res.status(200).json(data.data); // send the posts array
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
