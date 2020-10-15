import React,{useState} from 'react'

export default function TryError() {
    const [count,setCount] = useState(0);
    if(count>5){
        throw Error ("more than five")
    }
    return (
        <div>
            <div>{count}</div>
            <button onClick={()=>setCount(count+1)}>one more</button>
        </div>
    )
}
