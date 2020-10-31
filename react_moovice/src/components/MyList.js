import React from 'react';

import Card from './movie/Card'
import placeholder from '../img/placeholder.png'

class List extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            movieIds: this.getFromLocalStorage()
        };
    }

    componentDidMount() {



        const arrayFetch = this.state.movieIds.map(elem => {

            const url = `http://api.themoviedb.org/3/movie/${elem}?api_key=134d92c3d72c8501356da2496ace8c7e`;

            return fetch(url).then(res => res.json())


        })


        Promise.all(arrayFetch)
            .then(results => {

                console.log("result[]", results)


                const newArray = results.map((elem) => {
                    return {

                        title: elem.title,
                        overview: elem.overview,
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt="" /> : placeholder


                    }
                })

                this.setState({
                    movies: newArray
                })

            })
            .catch(error => console.error('error'))




    }
    getFromLocalStorage() {
        const mylist = JSON.parse(localStorage.getItem('my-list'));
        //  console.log('Ma liste en json', mylist)
        return mylist
    }
    render() {
        return (
            <div>

                {
                    this.state.movies.map(elem => {

                        return (

                            <Card title={elem.title} overview={elem.overview} poster_path={elem.poster_path} ></Card>
                        )

                    })
                }
            </div >
        )
    }
}

export default List;
