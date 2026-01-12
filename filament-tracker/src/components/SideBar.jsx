import "./style.css"

const SideBar = () => {
    return(
        <div className="side-bar">
            <h1>3D Print Lab</h1>
            <div className="buttons">
                <button className="sb-btn">Filaments</button>
                <button className="sb-btn">Settings</button>
            </div>
        </div>
    )
}

export default SideBar;