import {useState} from "react";
import Header from "./assets/Header.jsx";
import "./App.css"
import GridLayout from "./assets/GridLayout.jsx";

function App(){
    const [total,setTotal] = useState(195000000000);
    const expense = (cost) => {
        setTotal(total-cost);
    }
    return (
        <div className={"mainBody"}>
            <Header total={total} ></Header>
            <GridLayout expense={expense}></GridLayout>
        </div>
    )
}

export default App;