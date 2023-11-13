import "../App1.css";

const WithoutSkeleton = props =>{
    return(
        <div>
            <h1>WithoutSkeleton</h1>
            {!props.isLoading &&    // isLoading : true --5s-> false
                props.data.map(
                    item =>(
                        <li className="'item" key={item.id}>
                            <div>
                                <img className="img" src={item.avatar}></img>
                            </div>
                            <div className="info">
                                <h2>{item.first_name}/{item.last_name}</h2>
                                <p>{item.email}</p>
                            </div>
                        </li>
                    )
                )
            }
        </div>
    )
};

export default WithoutSkeleton;