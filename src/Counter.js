import { useEffect, useState } from "react";

export default function Counter (){

    const [timer,setTimer] = useState(0);
    const [paused,setPaused] = useState(false);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            if(!paused){
                setTimer((prev) => prev + 1);
                console.log(timer);
            }
        },1000);

        return () => clearInterval(timerId);
    },[paused]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(seconds).padStart(2, '0');

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    const handlePause = ()=>{
        setPaused(!paused);
    }

    const handleReset = ()=>{
        setTimer(0);
        setPaused(true);
    }

    return(
        <div className="container">
            <h2>Timer</h2>
            <br></br>
            <div className="timer"><strong>{formatTime(timer)}</strong></div> <br></br> <br></br>
            <button onClick={handlePause}><strong>{paused ? "Resume" : "Pause"}</strong></button>&nbsp; &nbsp;
            <button onClick={handleReset}><strong>Reset</strong></button>
        </div>
    )
}