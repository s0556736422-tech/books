import Book from "./components/Book";
import "./App.css"
import AddBook from "./components/AddBook";
import { useState } from "react"

function App(){
const[listBook, SetListBook]=useState([{name:"al otomat", author:"batya ana", cost:65, amount:5, precent:20,category:["science fiction","Adults","tension"]},
{name:"isterak", author:"maya keinan" ,cost:80, amount:2, category:["Adults","tension"]},
{name:"zuzuz" ,author:"yael roi" ,cost:50, amount:7, precent:30,category:["youth"]},
{name:"almoni",  cost:30, amount:10, precent:10,category:["Adults","tension"]},
{name:"masuman", author:"ruti kepler", cost:70, amount:0,category:["Adults","tension"]}])
return (
<div>
  <AddBook SetListBook={SetListBook}/>
  <Books listBook={listBook}/>
</div>);
 
}


function Books(props)
{
 

return(
  <div className="App">
    {props.listBook.map((a,i)=>(
      <Book
      key={i}
      name={a.name}
      author={a.author}
       cost={a.cost}
       amount={a.amount}
       precent={a.precent}
       category={a.category}
      />))}
  </div>
)
}
export default App
