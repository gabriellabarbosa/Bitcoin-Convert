import React from "react";  

const CriptoTile = ({data, selectedTile, onClick}) => {
    const {name, rate, icon} = data // name = data.name  rate = data. rate...
    const handleClick = () => onClick(data)

    return (
        <div className={`card ${selectedTile}`} onClick={handleClick}>
            <div>
                <img src={icon} alt="icon" />
                <div>{name}</div>
                <div>{rate}</div>
            </div>
        </div>
    )
}

export default CriptoTile