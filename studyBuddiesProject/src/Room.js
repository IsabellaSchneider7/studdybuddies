import React, { useEffect, useState } from "react";
import Participant from "./Participant";
import CountDownTimer from "./CountDownTimer";
import PlaySound from "./PlaySound";
import firestore from "./App";
import useCollectionData from "./App";

const Room = ({ roomName, room, handleLogout }) => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  // const [messages] = useCollectionData(query, { idField: "id" });
  // const [participants, setParticipants] = useState([]);
  // const hoursMinSecs = { hours: 0, minutes: 0, seconds: 5 };

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    room.on("participantConnected", participantConnected);
    room.on("participantDisconnected", participantDisconnected);
    room.participants.forEach(participantConnected);
    return () => {
      room.off("participantConnected", participantConnected);
      room.off("participantDisconnected", participantDisconnected);
    };
  }, [room]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <header>
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </header>
      <h2>Room: {roomName}</h2>
      <div className="logoutButton">
        <button onClick={handleLogout}>Log out</button>
      </div>
      <PlaySound />
      <div className="local-participant">
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
      <div className="ChatBox"></div>
      <h3>Remote Participants</h3>
      <div className="remote-participants">{remoteParticipants}</div>
    </div>
  );
};

export default Room;
