import { FC, useState } from 'react';
import BookCreate from "./components/BookCreate";
import BookList from './components/BookList'

import './style.css';

export const App: FC = () => {

  const [books, setBooks] = useState([{id:1, title: 'harry potter'}, {id:2, title:'dark tower'}])

  const deleteBookById = (id)=> {
    const updatedBooks = books.filter((book)=> {
      return book.id !== id
    })

    setBooks(updatedBooks)
  }

  const createBook = (title)=>{
    console.log('need to add book with: ',title)
    // BAD CODE
    //books.push({id:123, title:title})
    //setBooks(books)
    //END BAD CCODE

    const updatedBooks= [
      ...books,
      {id:Math.round(Math.random() * 9999), title}
    ]

    setBooks(updatedBooks)

  }

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById}/>
      <BookCreate onCreate={createBook}/>

    </div>
  );
};
