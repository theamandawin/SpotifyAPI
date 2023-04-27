fetch('path/to/playlist.json')
  .then(response => response.json())
  .then(data => {
   
    const playlistsData = [
        {
          name: 'Blue',
          color: '#0a52efff',
          tracks: [
            {
              name: 'And We Knew It Was Our Time',
              url: 'https://open.spotify.com/track/2tIv3DITNBTTayAM6Rewqi?si=77a239f683994b56'
            },
            {
              name: 'An Analog Guy in a Digital World',
              url: 'https://open.spotify.com/track/1CNvWuZSW8wiTmz6H011xU?si=72f37e22ba5041ab'
            },
            {
              name: 'Lightning Over Heaven',
              url: 'https://open.spotify.com/track/0S0zgiheqNBkRjEMo7pnig?si=cb7926ebaabe4e65'
            }
          ]
        },
        {
          name: 'White',
          color: '#FFFFFF',
          tracks: [
            // Repeat for each playlist
          ]
        },
        // Repeat for each playlist
      ]
      
      function handleClick(event) {
        const playlistId = event.target.id
        const playlistData = playlistsData.find(playlist => playlist.name === playlistId)
        const randomTrack = playlistData.tracks[Math.floor(Math.random() * playlistData.tracks.length)]
        window.open(randomTrack.url, '_blank')
      }
      
      document.querySelectorAll('.playlist-box').forEach(box => box.addEventListener('click', handleClick))
      
  })
  .catch(error => console.error(error))
