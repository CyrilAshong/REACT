const Home = () => {

    const handleClick = () => {
        console.log("I was clicked");
    }

    return (
        <div className="home">
            <h1>Home Page</h1>
            <button onClick = { handleClick }>Click Me</button>
        </div>
    );
}
 
export default Home;
