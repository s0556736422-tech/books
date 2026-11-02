import "./Book.css"
import { useState } from "react"
function Book(props){
    const {name, author="anonymous", cost, amount, precent=0}=props
    const[isSelected, setIsSelected]=useState(false)
    const[stock, setStock]=useState(amount)
    return <div className={isSelected?"book selected":"book"}>
<p>name: {name}</p>
<p>author: {author}</p>
<p>cost: {cost}</p>
{precent>0&&<p>cost after discount: {cost*((100-precent)/100)}</p>}
{stock>0?
<p>amount: {stock}</p>:
<p>over!</p> }
<h3>categories:</h3>
<ol>
    {props.category.map((c,i)=><li key={i}>{c}</li>)}
</ol>
<button onClick={()=>setIsSelected(!isSelected)} >{isSelected?"בטל התלבטות":" מתלבט"} </button>
<button onClick={()=>
    alert('המוצר נוסף לסל')
}>העבר לסל</button>
<button onClick={()=>setStock(stock+Number(prompt("כמה ספרים ברצונך להוסיף?")))}>הוסף ספרים למלאי</button>

    </div>
}
Book.defaultProps={author:"anonymous", precent:0}
export default Book