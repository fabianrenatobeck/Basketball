
import court from "/src/assets/Court.jpg"
export default function History() {
    return (
        <>
            <img src={court} width="400" alt="Basketballfeld"/>
            <label>History</label>
            {/*<ul>{history.map((value, index)=> <li key={index}>{value}</li>)}</ul>*/}
            <input type="button" value="reset" onClick={() => console.log("Reset pressed") } />
        </>
    )
}