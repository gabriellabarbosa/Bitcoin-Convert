import React, {useState, useEffect} from "react";
import CryptoTile from "./CriptoTile";
import BuyForm from "./BuyForm";
import Transactions from "./Transactions";
import bitcoin_icon from "../assets/bitcoin_icon.png"
import eth_icon from "../assets/eth_icon.png"
import ltc_icon from "../assets/ltc_icon.png"

const Home = () => {

    const mainContainer = {
        display: 'flex',
        flexDirection: 'row',
    }

    const cardsContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: '10%',
        paddingTop: '5%',
        paddingBottom: '5%',
        fontSize: '18px',
        borderRadius: '5px',
        border: '1px solid rgb(15, 16, 46)',
        color:'black',
    }

    const tiles = [
        {id: 1, icon: bitcoin_icon, name: 'BTC', rate: 135000},
        {id: 2, icon: eth_icon, name: 'ETH', rate: 7500},
        {id: 3, icon: ltc_icon, name: 'LTC', rate: 250},
    ]

    const [selectedTile, setSelectedTile] = useState(tiles[0])
    const [list, setList] = useState([])

    const handleSelect = (data) => {
        setSelectedTile(data)
    }

    const buildList = (list) => {
        setList(list)
    }

    return (
        <div style={mainContainer}>
            <div>
                <div>
                    <div style={cardsContainer}>
                        {
                            tiles.map(
                                (coin) =>(
                                    <CryptoTile 
                                        key={coin.id}
                                        data={coin}
                                        onClick={handleSelect}
                                        selectedTile={coin.id === selectedTile.id}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
                <div className='forms-container'>
                    <BuyForm data={selectedTile} onPurchase={buildList}/>
                    <div>
                        <Transactions list={list} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home