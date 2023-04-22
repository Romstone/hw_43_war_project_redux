import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Start from "./components/Start";
import {Link, Route, Routes} from "react-router-dom";
import Game from "./components/Game";
import Result from "./components/Result";

const App = () =>
{
  return (
      <>
          <div style={{
              backgroundColor: "lightgray",
              textAlign: "center"
          }}>
              <Link style={{
                  textDecoration: "none",
              }} to="/">Home</Link>
          </div>
          <br/>
          <Routes>
              <Route path="/" element={<Start/>}/>
              <Route path="/game" element={<Game/>}/>
              <Route path="/result" element={<Result/>}/>
          </Routes>
      </>
  );
}

export default App;
