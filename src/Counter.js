import { useEffect, useState } from "react";

export default function Counter (){

    const [timer,setTimer] = useState(0);
    const [paused,setPaused] = useState(false);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            if(!paused){
                setTimer((prev) => prev + 1);
            }
        },1000)
    },[])

    const handlePause = ()=>{
        setPaused(true);
    }

    return(
        <div>
            {}
            <button>Pause</button>
            <button>Resume</button>
            <button>Reset</button>
        </div>
    )
}