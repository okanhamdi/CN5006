import React, {useState ,useEffect} from "react"
import App from './App';
import Love from './Love.png'
import Sad from './sad.png'
import Happy from './happy.png'
import Like from './like.png'

function EmojeeCounter(props)
{
console.log("pic is ", props.pic)

const [pic, setPic]=useState(Happy)
const[count,setCount]=useState(0)
useEffect(() =>{
    console.log("fuction called", props.pic)
    if (props.pic=="Love")
        setPic(Love)
        else if (props.pic=="Sad")
            setPic(Sad)
        else if (props.pic=="Happy")
            setPic(Happy)
        else if (props.pic=="Like")
            setPic(Like)
    })

    const ClickHandle=() =>
    {
        setCount(count+1)
    }
    return (
        <div className="App">
            <p>{props.pic}<span></span>
            <button onClick={ClickHandle}>{count}
            <img src={pic} alt=""/>
            </button>
            </p>
            
        </div>
    )
}
export default EmojeeCounter;


