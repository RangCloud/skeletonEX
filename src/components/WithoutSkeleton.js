import "../App1.css";

const WithoutSkeleton = props =>{
    return(
        <div>
            <h1>WithoutSkeleton</h1>
            {!props.isLoading &&    // isLoading : true --5s-> false
                props.data.map(
                    item =>(
                        <li></li>
                    )
                )
            }
        </div>
    )
};

export default WithoutSkeleton;