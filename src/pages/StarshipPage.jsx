import React from 'react';
import {Link} from 'react-router-dom';
import './StarshipPage.css';


const StarshipPage = ({location}) => {
    const starship = location.state;
    return (
        <div className="StarshipPage">
            <h3>Name: {starship.name}</h3>
            <h4>Model: {starship.model}</h4>
            <h4>Manufacturer: {starship.manufacturer}</h4>
            <Link className="StarshipPage-link" to="/">Return</Link>
        </div>
    )
}

export default StarshipPage;