import Book from "./components/Book";
import "./App.css"
import AddBook from "./components/AddBook";
import Books from "./components/Books";
import High from "./components/High";
import { useState } from "react"

function App() {
  const [listBook, SetListBook] = useState([
    { name: "al otomat", author: "batya ana", cost: 65, amount: 5, precent: 20, category: ["science fiction", "Adults", "tension"] ,rating:1, poeple:1},
    { name: "isterak", author: "maya keinan", cost: 80, amount: 2, category: ["Adults", "tension"] ,rating:1, poeple:1 },
    { name: "zuzuz", author: "yael roi", cost: 50, amount: 7, precent: 30, category: ["youth"],rating:1, poeple:1 },
    { name: "almoni", cost: 30, amount: 10, precent: 10, category: ["Adults", "tension"] ,rating:1, poeple:1},
    { name: "masuman", author: "ruti kepler", cost: 70, amount: 0, category: ["Adults", "tension"] ,rating:1, poeple:1}])
const highList = [...listBook]
  .sort((a, b) => (Number(b.rating)/Number(b.poeple)) - (Number(a.rating)/Number(b.poeple)))
  .slice(0, 3);
    return (
    <div>
      <AddBook SetListBook={SetListBook} />
      <Books listBook={listBook} setListBook={SetListBook}/>
      <High highList={highList}></High>
    </div>);

}

export default App
