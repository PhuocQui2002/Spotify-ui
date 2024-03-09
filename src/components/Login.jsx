import React from "react";
import styled from "styled-components";

export default function Login() {
  ////Create Account https://developer.spotify.com/dashboard
  ////
  const handleClick = async () => {
    const client_id = "12884aabc71f4a77b6834f1c61174e27";
    const redirect_uri = "http://localhost:3000/";
    const api_uri = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  };
  return (
    <Container>
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
      <button onClick={handleClick}>Connect Spotify</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
  button:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;
