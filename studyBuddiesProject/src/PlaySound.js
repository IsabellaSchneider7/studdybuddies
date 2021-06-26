import React from "react"
import useSound from 'use-sound';

function PlaySound() {
  const soundUrl = '/sounds/909-drums.mp3';

  const [play] = useSound(soundUrl, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    }
  });

  // Custom hook that listens for 'keydown',
  // and calls the appropriate handler function.
  // useKeyboardBindings({
  //   1: () => play({ id: 'kick' }),
  //   2: () => play({ id: 'hihat' }),
  //   3: () => play({ id: 'snare' }),
  //   4: () => play({ id: 'cowbell' }),
  // })

  function playSound1() {
    alert('You clicked me!');
  }

  function playSound2() {
    alert("you click button")
  }

  function playSound3() {
    alert("you click button")
  }

  function playSound4() {
    alert("you click button")
  }

//   const ButtonGroup = styled.div`
//   display: flex;
// `

  return (
    <div>
        <div>
        <button onClick={playSound1}>1</button>
        </div>
        <div>
        <button onClick={playSound2}>2</button>
        </div>
        <div>
        <button onClick={playSound3}>3</button>
        </div>
        <div>
        <button onClick={playSound4}>4</button>
        </div>
    
    </div>
     
  );
}

export default PlaySound;