import {useEffect, useState} from "react";
import './Card.css'
function Card({object,expense}){
    const [multiple,setMultiple] = useState(0);
    const [premul,setPremul] = useState(0);
    useEffect(() => {
        expense((multiple-premul)*object.price)
    }, [multiple]);
    const handleAdd = () =>{
        setPremul(multiple)
        setMultiple(multiple+1);
    }
    const handleRemove = () =>{
        if(multiple>0){
            setPremul(multiple)
            setMultiple(multiple-1);
        }
        else{
            alert("You cannot buy things in negative");
        }
    }
    return (
        <div className={'mainCardBody p-1'}>
            <img className={"objectIMG"} src={object.link}></img>
            <p>{object.name}</p>
            <p>{object.price}</p>
            <div className={'mainCardPart'}>
                <button onClick={handleAdd}>Add</button>
                <div>{multiple}</div>
                <button onClick={handleRemove}>Remove</button>
            </div>
        </div>
    )
}

export default Card;