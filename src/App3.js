import "./App3.css";

import {useState, useEffect} from 'react';
import {youtubeData} from "./youtubeData";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState([]);

    useEffect(
        ()=>{
            setLoading(true);
            const timer = setTimeout(()=>{
                setVideos(youtubeData);
                setLoading(false);
            }, 5000);
            return ()=> clearTimeout(timer);
        }
    , []);
    return(
        <div>
            
        </div>
    )

}

export default App;