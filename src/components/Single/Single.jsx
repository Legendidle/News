const Single = () => {
    return (
        <div>
            <ul className="ul">  
                <li className="li">
                    <img src={data.urlToImage} alt="photo" width={800} height={480}/>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </li>    
            </ul> 
        </div>
    ) 
}


export default Single;