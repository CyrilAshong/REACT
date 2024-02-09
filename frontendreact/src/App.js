import Navbar from './Navbar';
import Home from './Homepage';
import Page from './Page';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        <Page />
      </div>
    </div>
  );
}

export default App;
