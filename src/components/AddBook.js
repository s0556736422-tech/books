import "./Book.css"
import { useState } from "react"
function AddBook(props){
    const[name, setName]=useState("")
    const[author, setAuthor]=useState("")
    const[cost, setCost]=useState("")
    const[amount, setAmount]=useState("")
    const[precent, setPrecent]=useState("")
    const[category, setCategory]=useState("")
    return <div className={"add-book"}>
<input value={name} onChange={(e)=>setName(e.target.value)} placeholder="name"></input>
<input value={author} onChange={(e)=>setAuthor(e.target.value)} placeholder="author"></input>
<input value={cost} type="number" onChange={(e)=>setCost(e.target.value)} placeholder="cost"></input>
<input value={amount} type="number" onChange={(e)=>setAmount(e.target.value)} placeholder="amount"></input>
<input value={precent} type="number" onChange={(e)=>setPrecent(e.target.value)} placeholder="precent"></input>
<input value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="category with ','"></input>
<button
onClick={()=>props.SetListBook(listBook=>listBook.concat({
    name: name,
    author: author,
    cost:Number( cost),
    amount:Number(amount),
    precent:Number(precent) ,
    category:category.split(',').map(c=>c.trim())
}))} 
>save</button>
</div>
}
export default AddBook