import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Schedule from "./Schedule";
import About from "./About";

function Home() {
    return ( 
        <div className="home">
            <Routes>
                <Route path="/" element = {<Main />}/>
                <Route path="/schedule" element ={<Schedule />}/>
                <Route path="/about" element= {<About />}/>
            </Routes>
        </div>
     );
}

export default Home;