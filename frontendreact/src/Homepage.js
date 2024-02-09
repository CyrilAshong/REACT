import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Ashong');
        setAge(19);
    }
    const [blogs, setBlogs] = useState([
        {title: "Scribbler's Dream", body: "In the Cock Crow", author: "Mr. Ashong", Id: 1},
        {title: "Makola", body: "It is in the Cock Crow", author: "Mr. Psycho", Id: 2},
        {title: "Colour of God", body: "Also in the Cock Crow", author: "Mr. Cyril", Id: 3}
    ])
    

    return (
        <div className="home">
            <h1>Home Page</h1>
            <p>{ name } is { age } years old! </p>
            <button onClick = { handleClick }>Click Me</button>

            {blogs.map((blog) => (
                <div className="preview" key={blog.Id}>
                    <h2> {blog.title} </h2>
                    <p>Written by {blog.author} </p>
                </div>
            ))}
        </div>
    );
}
 
export default Home;
