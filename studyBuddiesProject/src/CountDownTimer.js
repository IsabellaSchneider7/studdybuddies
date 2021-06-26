import React from 'react'
import './App.css';
import PlaySound from "./PlaySound";

var counter = 1
const CountDownTimer = ({hoursMinSecs}) => {

    const { hours = 0, minutes = 0, seconds = 60 } = hoursMinSecs;
    const [[hrs, mins, secs], setTime] = React.useState([hours, minutes, seconds]);
    const [pageColour, setPageColour] = React.useState("#CA5130")
    const [pomoText, setPomoText] = React.useState("STUDY TIME");
    
    
    const tick = () => {

        if (hrs === 0 && mins === 0 && secs === 0) {
            //get rid of reset so that it changes to a diff length
            counter++;
            console.log("count", counter);
            
            reset()
        }
        else if (mins === 0 && secs === 0) {
            setTime([hrs - 1, 59, 59]);
        } else if (secs === 0) {
            setTime([hrs, mins - 1, 59]);
        } else {
            setTime([hrs, mins, secs - 1]);
        }
    };

    const studyHours = "0";
    const studyMinutes = "0";
    const studySeconds = "5";
    const breakHours = "0";
    const breakMinutes = "0";
    const breakSeconds = "20";

    const reset = () => {
        if(counter % 2 === 1){
            //on even counter vals take study
            setTime([parseInt(studyHours), parseInt(studyMinutes), parseInt(studySeconds)]);
            setPageColour("#CA5130");
            setPomoText("STUDY TIME");
        }
        else {
            //on odd counter vals break
            setTime([parseInt(breakHours), parseInt(breakMinutes), parseInt(breakSeconds)]);
            setPageColour("#27ca6e");
            setPomoText("BREAK TIME");
        }


    }


    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 1000);
        return () => clearInterval(timerId);
    });


    return (
        <div style = {{backgroundColor: pageColour}}>
            <h1>{pomoText}</h1>
            <p>{`${hrs.toString().padStart(2, '0')}:${mins
            .toString()
            .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`}</p> 
        </div>
    );

}


export default CountDownTimer;