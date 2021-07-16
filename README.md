# react-portfolio
My personal portfolio made entirely with ReactJS, CSS, and SASS (compiled to css).


Fetches current playback from spotify to display it on the home(index) page using SpotifyAPI.


# Credentials
To fetch spotify data from the spotify API, you need to make a new app on Spotify's developer portal and receive the following:
  1. Client Secret
  2. Client ID
  3. Refresh Token

After receiving the above, you have to create a .env.production file in the root folder with following as variable names:
  1. REACT_APP_C_ID
  2. REACT_APP_C_SECRET
  3. REACT_APP_REF_TOKEN

It should look like this:
  1. REACT_APP_C_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  2. REACT_APP_C_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  3. REACT_APP_REF_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  
With (xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx) being your credentials.


To build/Run:
  npm run start => Testing
  npm run build => Production Build
