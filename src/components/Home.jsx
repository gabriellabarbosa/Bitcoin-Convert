import React, {useState, useEffect} from "react";
import CriptoTile from "./CriptoTile";
import BuyForm from "./BuyForm";
import Transactions from "./Transactions";
import bitcoin_icon from "../assets/bitcoin_icon.png"
import eth_icon from "../assets/eth_icon.png"
import ltc_icon from "../assets/ltc_icon.png"

const Home = () => {

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
        <div>
            <div>
                <div>
                    <div>
                        {
                            tiles.map(
                                (coin) => (
                                    <CriptoTile key={coin.id}
                                    data={coin}
                                    onClick={handleSelect}
                                    selectedTile={coin.id === selectedTile.id}
                                    />
                                )
                            )
                        }
                    </div>
                </div>
                <BuyForm data={selectedTile} onPurchase={buildList} />
                <div>
                    <Transactions list={list} />
                </div>
            </div>
        </div>
    )
}

export default Home