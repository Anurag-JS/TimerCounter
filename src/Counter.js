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
    },[paused])

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
            <div className="timer"><strong>{timer}</strong></div> <br></br> <br></br>
            <button onClick={handlePause}><strong>{paused ? "Resume" : "Pause"}</strong></button>&nbsp; &nbsp;
            <button onClick={handleReset}><strong>Reset</strong></button>
        </div>
    )
}