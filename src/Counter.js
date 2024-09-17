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
        <div>
            {timer}
            <button onClick={handlePause}>{paused ? "Resume" : "Pause"}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}