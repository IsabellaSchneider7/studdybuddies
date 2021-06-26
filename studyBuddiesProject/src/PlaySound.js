import React from "react";
import useSound from "use-sound";

function PlaySound() {
  const soundUrl = "/drumSound1.wav";
  const soundUrl2 = "/saxSound.wav";
  const soundUrl3 = "/trumpetSound.wav";
  const soundUrl4 = "/guitarSound.wav";

  const [play] = useSound(soundUrl);
  const [play2] = useSound(soundUrl2);
  const [play3] = useSound(soundUrl3);
  const [play4] = useSound(soundUrl4);

  function playSound1() {
    play4();
  }

  function playSound2() {
    play();
  }

  function playSound3() {
    play2();
  }

  function playSound4() {
    play3();
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
