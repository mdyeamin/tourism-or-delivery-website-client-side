import React, { useEffect, useState } from 'react';
import bannerVideo from '../../img/banner.mp4';
import Countrys from '../Countrys/Countrys';
import TravelService from '../TravelService/TravelService';
import './Home.css'
const Home = () => {
    const [travelInfo, setTravelInfo] = useState([])

    useEffect(() => {
        fetch("https://pacific-shore-80224.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setTravelInfo(data))
    }, [])

    return (
        < >
            <div>
                <h2 className="h text-white">Authentic private tours led by handpicked guides</h2>
                <video id="videoBG" poster="" autoPlay muted loop>
                    <source src={bannerVideo} />
                </video>
            </div>
            <div>
                <h1 className="my-5">Most Popular Tours</h1>
                <div className="cards">

                    {
                        travelInfo.map(travel => <TravelService
                            key={travel.id}
                            travel={travel}
                        ></TravelService>)
                    }
                </div>
            </div>
            <div className="destinations">

                <Countrys></Countrys>
            </div>
        </>
    );
};

export default Home;