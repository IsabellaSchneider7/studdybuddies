import React from "react";
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const auth = firebase.auth();

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit,
  connecting,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter a room</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="field"
          value={username}
          onChange={handleUsernameChange}
          readOnly={connecting}
          required
        />
      </div>

      <div>
        <label htmlFor="room">Room name:</label>
        <input
          type="text"
          id="room"
          value={roomName}
          onChange={handleRoomNameChange}
          readOnly={connecting}
          required
        />
      </div>

      <button type="submit" disabled={connecting}>
        {connecting ? "Connecting" : "Join"}
      </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={() => auth.signOut()}> SignOut</button>
      <h1> </h1>
    </form>
  );
};

export default Lobby;
