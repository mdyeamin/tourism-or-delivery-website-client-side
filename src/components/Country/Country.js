import React from 'react';
import './Country.css'
const Country = (props) => {
    const { flags, name, maps } = props.country
    console.log(props.country);
    return (
        <div className="country">
            <img style={{ height: "15px" }} src={flags?.png} alt="" />
            <a target="_blank" href={maps?.googleMaps}>{name?.common}</a>
        </div>
    );
};

export default Country;