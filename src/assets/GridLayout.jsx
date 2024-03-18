import './GridLayout.css'
import {useState} from "react";
import Card from "./Card.jsx";
import F1 from './F1.png'
import Airbus from './Airbus.png'
import GDH from './GraffDiamondsHallucination.png'
import Kohinoor from './Kohinoor.png'
import MonaLisa from './MonaLisa.png'
import LanaiIsland from './LanaiIsland.png'
import HistorySupreme from './HistorySupreme.png'
import BuggatiChiron from './BuggatiChiron.png'
import RollsRoyce from './RollsRoyceCullinan.png'
import Ferrari from './Ferrari.png'
import McLaren from './mclaren.png'
import lambo from './lambo.png'
function GridLayout({expense}){
    const [object,setObject]=useState([
        {name: "Kohinoor",price: 20000000000,link: Kohinoor},
        {name: "F1 Car",price: 15000000 ,link: F1},
        {name: "Graff Diamonds Hallucination",price: 55000000,link: GDH},
        {name: "Mona Lisa",price: 20000000000,link: MonaLisa},
        {name: "Lanai Island",price: 300000000,link: LanaiIsland},
        {name: "Airbus",price: 500000000,link: Airbus},
        {name: "History Supreme",price: 4800000000,link: HistorySupreme},
        {name: "Buggati Chiron",price: 3900000,link: BuggatiChiron},
        {name: "Rolls Royce Cullinan",price: 335000,link: RollsRoyce},
        {name: "Ferrari SF90",price: 918218 ,link: Ferrari},
        {name: "McLaren SpeedTail",price: 2250000 ,link: McLaren},
        {name: "Lamborgini Veneno Roadster",price: 8300000 ,link: lambo}
    ]);
    return (
        <div className="container p-1">
            <div className="row row-cols-md-3 row-cols-1 gy-1 gx-1">
                {object.map((item,index)=>{
                    return <div className="cols p-1" key={index}>
                        <Card object={item} expense={expense}></Card>
                    </div>
                })}
            </div>
        </div>
    )
}

export default GridLayout;