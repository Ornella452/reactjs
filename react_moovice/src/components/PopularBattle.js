import React from 'react';
import Card from './movie/Card';
import placeholder from '../img/placeholder.png';

class PopularBattle extends React.Component {


    constructor() {
        super();
        this.state = {
           
            currentPage: 1,
            movies: [],




        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                const movies = json.results.map((elem) => {

                    return {
                        
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt=""/>: placeholder,
                        title: elem.title,
                        overview: elem.overview,

                    }

                })
                this.setState({ movies })

            });
    }



    render() {

        console.log('popularBattle hello', this.state)

        const firstmovies = this.state.movies[0]
        console.log('heyyy', firstmovies)
        const secondmovies = this.state.movies[1]
        console.log('heyyy', secondmovies)
        return (
            <div className="row">
                <div className="col-6">
                <Card {...firstmovies}/>
                </div>
                <div className="col-6">
                <Card {...secondmovies}/>
                </div>
                
                
            </div>
        )
    }
}

export default PopularBattle;