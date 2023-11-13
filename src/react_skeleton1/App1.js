import "./App1.css";
import {userdata} from './userdata';
import {useState} from 'react';
import WithoutSkeleton from './components/WithoutSkeleton';
import WithSkeleton from './components/WithSkeleton';



export default function App(){
    const [data, setData] = useState(userdata);

    const [isLoading, setIsLoading] = useState(true);
    setTimeout( ()=>setIsLoading(false), 4000);

    return(
        <div className="App">
            <ul className="contentsDiv">
                <WithoutSkeleton data={data} isLoading={isLoading} />
            </ul>
            <ul className="contentsDiv">
                <WithSkeleton data={data} isLoading={isLoading} contentsLength={userdata.length} />
            </ul>
        </div>
    )
}


