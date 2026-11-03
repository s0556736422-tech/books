import "../App.css"
import Book from  "./Book"
function Books(props) {
  return (
    <div className="App">
      {props.listBook.map((a, i) => (
        <Book
          key={i}
          name={a.name}
          author={a.author}
          cost={a.cost}
          amount={a.amount}
          precent={a.precent}
          category={a.category}
          rating={a.rating}
          poeple={a.poeple}
          setListBook={props.setListBook}
        />))}
    </div>
  )
}
export default Books;