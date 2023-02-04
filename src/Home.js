import { useState } from "react";
import { data } from "./data";
import Buttons from "./Buttons";
import Books from "./Books";

function Home() {
    const [books,setBooks] = useState(data);
    const choseBook = (searchTerm) =>{
    const newBooksArray = data.filter(element =>
        element.searchTerm === searchTerm);
        setBooks(newBooksArray);
    }

    return (
    <div>
    <div className='container'>
        <h2 className='header'>Spend your time with coffee & book!</h2>
    </div>
    <div className='container'>
        <p className='questionAfterHeader'>What do you choose today?</p>
    </div>
    <Buttons filteredStyleBook ={choseBook} />
    <Books itemBooks ={books} />
    </div>
    );
}

export default Home;