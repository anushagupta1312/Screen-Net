import React, { Component } from 'react'
import { movies } from '../movieData'

export default class Banner extends Component {
    render() {
        let movieElem = movies.results[Math.floor((Math.random() * 10) + 1)]
        let backdrop = movieElem.backdrop_path
        return (
            <div className="card banner-card" >
                <img src={`https://image.tmdb.org/t/p/original${backdrop}`}
                    className="card-img-top banner-img" alt="..." />
                {/* <div className="card-body"> */}
                <h5 className="card-title banner-title">{movieElem.title}</h5>
                <p className="card-text banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                {/* </div> */}
            </div>
        )
    }
}
