
import './App.css';
import Header from './Components/Header';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home'
import AddBook from './Components/AddBook'
import Books from './Components/Book/Books'
import About from './Components/About'
import BookDetails from './Components/Book/BookDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/add" element={<AddBook />} />
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/books/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;