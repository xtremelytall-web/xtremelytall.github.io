// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token = 'a72242b097cf4e8c87cf2d88be0557b8';
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body:JSON.stringify(body)
  });
  return await res.json();
}

async function getTopTracks(){
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (await fetchWebApi(
    'v1/me/top/tracks?time_range=long_term&limit=5', 'GET'
  )).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({name, artists}) =>
      `${name} by ${artists.map(artist => artist.name).join(', ')}`
  )
);

function pollSpotify() {
  if (!accessToken) return;

  setInterval(async () => {
    try {
      const res = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: Bearer ${accessToken}
        }
      });

      if (res.status === 204 || res.status === 202) return;

      // Neccesary pulled data
      const json = await res.json();
      const track = json.item;
      const progress = json.progress_ms;
      const duration = track.duration_ms;
      const playing = json.is_playing;
      const album = json.item.album.images;
    } catch (err) {
      console.error("Failed to get track info:", err);
    }
  }, 1000);
}
