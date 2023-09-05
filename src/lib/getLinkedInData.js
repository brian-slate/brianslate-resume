import axios from 'axios';

async function getLinkedInData(URI = 'https://api.linkedin.com/v2/me') {
  try {
    // Step 1: Exchange Authorization Code for Access Token
    const tokenResponse = await axios.post('https://www.linkedin.com/oauth/v2/accessToken', null, {
      params: {
        grant_type: 'client_credentials',
        client_id: '---',
        client_secret: '---',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const accessToken = tokenResponse.data.access_token;

    // Step 2: Use Access Token to Fetch LinkedIn Profile
    const profileResponse = await axios.get(URI, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return profileResponse.data;
  } catch (error) {
    console.error('Error fetching LinkedIn data:', error);
    return null;
  }
}

export { getLinkedInData };
