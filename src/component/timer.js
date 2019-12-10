import React from 'react';

const seconds = (x) => (Math.floor((x / 1000) % 60) < 10) ?"0" + Math.floor((x / 1000) % 60) :Math.floor((x / 1000) % 60);
const minutes = (x) => (Math.floor((x / (1000 * 60)) % 60) <10) ?"0" + Math.floor((x / (1000 * 60)) % 60) :Math.floor((x / (1000 * 60)) % 60);
const hours = (x) => (Math.floor((x / (1000 * 60 * 60)) % 24)<10) ?"0" + Math.floor((x / (1000 * 60 * 60)) % 24) :Math.floor((x / (1000 * 60 * 60)) % 24);


function Timer(props){
    return(<div className="clock">
<div className="hour"> <h1>{hours(props.clock.time)}</h1><p>Hour</p></div><h1>:</h1>
<div className="minute"> <h1>{minutes(props.clock.time)}</h1><p>Minute</p></div><h1>:</h1>
<div className="second"> <h1>{seconds(props.clock.time)}</h1><p>Second</p></div>


</div>);
}

export default Timer;