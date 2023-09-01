import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Schedule from "./Schedule";
import About from "./Pricing";

function Home() {
    return ( 
        <div className="home">
            <Routes>
                <Route path="/" element = {<Main />}/>
                <Route path="/schedule" element ={<Schedule />}/>
                <Route path="/pricing" element= {<About />}/>
            </Routes>
        </div>
     );
}

export default Home;