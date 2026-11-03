import { getValue } from "@testing-library/user-event/dist/utils"
import "./Book.css"
function High(props)
{
    return(
        <div className="add-book">
            <h1>Top books</h1>
            {props.highList.map((l,i) =>
            (  
                <h2 key={i} className="book">in {i+1} place:<br/>{l.name}<br/> with rating {(Number(l.rating)/Number(l.poeple)).toFixed(2)}</h2>
            )
            )}

        </div>
    )

}
export default High;