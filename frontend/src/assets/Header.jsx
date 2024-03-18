import './Header.css'
function Header({total}){
    return (
        <div className={"mainHeader"}>
            <h1>{total}</h1>
        </div>
    )
}

export default Header;