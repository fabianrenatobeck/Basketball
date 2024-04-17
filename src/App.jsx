import "./mvp.css"
import Teams from "./Komponente/Teams.jsx";
import History from "./Komponente/History.jsx";
import {useState} from "react";

function App() {
    const [homeName, setHomeName] = useState("linux");
    const [guestName, setGuestName] = useState("riot");
    const [homePoints, setHomePoints] = useState(0);
    const [guestPoints, setGuestPoints] = useState(0);
    const [history, setHistory] = useState("Game start");


    const onAddHomePoints = (newPoints)=>{

        setHomePoints(newPoints);
        history.push("Heim Wurf, neue Punkte: " + newPoints)
        if(newPoints>= 12){
            history.push("Heim Team gewinnt")
        }
    }
    const onAddGuestPoints = (newPoints)=>{

        setGuestPoints(newPoints);
        history.push("Heim Wurf, neue Punkte: " + newPoints)
        if(newPoints>= 12){
            history.push("Heim Team gewinnt")
        }
    }

    return (
      <>
        <h1>Basketball</h1>
        <section>
          <aside>
            <Teams
            label="Home Team"
            name={homeName}
            points={homePoints}
            setName={setHomeName}
            setPoints={onAddHomePoints}
            />
          </aside>
          <aside>
            <History
            history={history}

            />
          </aside>
          <aside>
            <Teams
            label="Guest Team"
            name={guestName}
            points={guestPoints}
            setName={setGuestName}
            setPoints={onAddGuestPoints}
            />
          </aside>
        </section>
      </>
  )
}
export default App

