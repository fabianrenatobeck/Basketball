//import {useState} from "react";

export default function Teams({label, name, points, setName, setPoints}) {
    //const [points, setPoints] = useState(0);
    //const [name, setName] = useState(0);


    function onClickButtonEvent() {
        const value = Math.random() > 0.5 ? Math.floor(Math.random() * 3) + 1 : 0;
        setPoints(points + value);
    }
    return (
        <>
            <label>{label}</label>
            <input
                type="text"
                value={name}
                onChange={e => {
                    setName(e.target.value)
                }}
            />
            <label>Points</label>

            <input
                type="number"
                value={points}
                readOnly/>
            <input type="button"
                   value="Werfen"
                   onClick={() => onClickButtonEvent()}/>
        </>
    )
}