import React, { Component } from 'react'
import { movies } from '../movieData'

export class Favourites extends Component {
    constructor() {
        super();

        this.state = {
            genres: [],
            currentgenre: "All genres"
        }
    }
    render() {
        const moviesArr = movies.results
        console.log(moviesArr)
        let genreids = { 28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy', 80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family', 14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller', 10752: 'War', 37: 'Western' };
        let tempArr = []
        moviesArr.map((movieObj) => {
            if (!tempArr.includes(genreids[movieObj.genre_ids[0]])) {
                tempArr.push(genreids[movieObj.genre_ids[0]])

            }
        })
        tempArr.unshift("All genres")
        return (
            <div className='main'>
                <div class="row">
                    <div class="col-3">
                        <ul class="list-group genre-selector">
                            {
                                tempArr.map((genre) => (
                                    this.state.currentgenre == genre ?
                                        <li class="list-group-item active" style={{
                                            background: "#3f51b5",
                                            color: "white",
                                            fontWeight: "bold",
                                        }}>{genre}</li> :
                                        <li style={{ color: "#3f51b5" }} class="list-group-item" >{genre}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className='col-9 favourites-table'>
                        <div className='row'>
                            <input type='text' className='input-group-text col'></input>
                            <input type='number' className='input-group-text col'></input>
                        </div>

                        <div className='row'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Popularity</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        moviesArr.map((movieElem) => (
                                            <tr>
                                                <td><img style={{ 'width': '5rem', 'float': 'left', 'marginRight': '1rem' }} src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`}
                                                    alt="movieImg" />
                                                    <th scope="row">{movieElem.title}</th></td>
                                                <td>{genreids[movieElem.genre_ids[0]]}</td>
                                                <td>{movieElem.popularity}</td>
                                                <td>{movieElem.vote_average}</td>
                                                <td><button type="button" class="btn btn-danger">Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>


                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>

        )
    }
}

export default Favourites