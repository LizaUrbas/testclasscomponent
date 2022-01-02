function Numbers({number,set}){
    return(
       <div>
        <p>{number}</p> 
        <button onClick={() =>set(prev=>prev+1) }>Press me</button>
        </div>
    )
}

export default Numbers;