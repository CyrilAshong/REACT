import { useState } from "react";

const Page = () => {

    const [books, setBooks] = useState([
        {title: "Kaya Girl", author: "Cyril", id: 1},
        {title: "Kaya Boy", author: "Psycho", id: 2},
        {title: "Kaya Dog", author: "Reborn", id: 3},
    ])
    return ( 
        <div className="content">
            {
                books.map((book) => (
                    <div className="preview" key={book.id}>
                        <h2> { book.title } </h2>
                        <p> Written By: { book.author } </p>
                    </div>
                ))
            }
        </div>
       
        
    );
}
 
export default Page;