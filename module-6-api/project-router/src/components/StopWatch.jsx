import React, { useRef, useState } from 'react'

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let timeInterval = useRef(null);

    const handleStart = () => {
        if(isRunning) return;
        setIsRunning(true);
        timeInterval.current = setInterval(() => {
            setTimer(prevTimerValue => prevTimerValue + 1);
        }, 10);
    }
    const handlePause = () => {
        if(!isRunning) return;
        setIsRunning(false);
        clearInterval(timeInterval.current);
    }
    const handleReset = () => {
        setIsRunning(false);
        setTimer(0);
        clearInterval(timeInterval.current);

    }

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60000).toString().padStart(2, '0');
        const seconds = Math.floor((time % 1000) % 60).toString().padStart(2, '0');
        const milliseconds = (time % 1000).toString().padStart(2, '0');
        return { minutes, seconds, milliseconds };
    }
    const { minutes, seconds, milliseconds } = formatTime(timer);

    return (
        <div style={{textAlign: "center"}}>
            <h1>StopWatch</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "300px",
                marginBottom: "20px"
            }}>
                <div style={{background: "#f5f5f5", padding:"20px", borderRadius: "10px"}}>
                    <h1 style={{fontSize: "36px", margin: "0px 5px"}}>Minutes: {minutes}</h1>
                </div>
                <span style={{fontSize:'2rem', margin: '0 5px'}}>:</span>
                <div style={{background: "#f5f5f5", padding:"20px", borderRadius: "10px"}}>
                    <h1 style={{fontSize: "36px", margin: "0px 5px"}}>Seconds: {seconds}</h1>
                </div>
                <span>:</span>
                <div style={{background: "#f5f5f5", padding:"20px", borderRadius: "10px"}}>
                    <h1 style={{fontSize: "36px", margin: "0px 5px"}}>Milliseconds: {milliseconds}</h1>
                </div>
            </div>

            <div>
                <button onClick={handleStart} style={{fontSize:'1rem', margin: '0 10px', padding: "10px 20px", cursor:"pointer", border:'none', borderRadius: "5px", backgroundColor: '#4caf50', color:'white'}}>
                    Start
                </button>
                <button onClick={handlePause} style={{fontSize:'1rem', margin: '0 10px', padding: "10px 20px", cursor:"pointer", border:'none', borderRadius: "5px", backgroundColor: '#4caf50', color:'white'}}>
                    Pause
                </button>
                <button onClick={handleReset} style={{fontSize:'1rem', margin: '0 10px', padding: "10px 20px", cursor:"pointer", border:'none', borderRadius: "5px", backgroundColor: '#4caf50', color:'white'}}>
                    Reset
                </button>

            </div>
        </div>
    )
}

export default StopWatch