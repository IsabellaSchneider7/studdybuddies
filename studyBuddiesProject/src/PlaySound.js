import React from "react";
import useSound from "use-sound";

function PlaySound() {
  const soundUrl = "/drumSound1.wav";

  const [play] = useSound(soundUrl);

  function playSound1() {
    alert("You clicked me!");
  }

  function playSound2() {
    play();
  }

  function playSound3() {
    alert("you click button");
  }

  function playSound4() {
    alert("you click button");
  }

  return (
    <div className="flex">
      <div className="flex playButton">
        <button onClick={playSound1}>1</button>
      </div>
      <div className="flex playButton">
        <button onClick={playSound2}>2</button>
      </div>
      <div className="flex playButton">
        <button onClick={playSound3}>3</button>
      </div>
      <div className="flex playButton">
        <button onClick={playSound4}>4</button>
      </div>
    </div>
  );
}

export default PlaySound;
