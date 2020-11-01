import React from 'react';
import Card from './movie/Card';
import placeholder from '../img/placeholder.png';

class Popular extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            poster_path: "",
            title: "",
            overview: "",
        }

    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                const movies = json.results.map((elem) => {
                    return {

                        title: elem.title,
                        overview: elem.overview,
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt="" /> : placeholder

                    }
                })
                this.setState({ movies })

                console.log('movice', json.results)
            })

    }




    render() {
        return (
            <div>
                {this.state.movies.map((elem, index) => {
                    return <Card key={index} title={elem.title} overview={elem.overview} poster_path={elem.poster_path} />

                })}

            </div>
        )
    }
}

export default Popular;