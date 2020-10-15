import React from 'react';
import Card from './movie/Card';
import placeholder from '../img/placeholder.png';

class PopularBattle extends React.Component {


    constructor() {
        super();
        this.state = {
            currentPage: 1,
            movies: []
        }


        this.choseFilm = this.choseFilm.bind(this);
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                const movies = json.results.map((elem) => {

                    return {
                        elem: elem.id,
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt="" /> : placeholder,
                        title: elem.title,
                        overview: elem.overview,

                    }

                })
                this.setState({ movies })

            });
    }


    choseFilm(id) {
        console.log("chosefilm ok")
        let myList = [];
        if (!JSON.parse(localStorage.getItem('my-Liste'))) {
            myList = localStorage.getItem('my-Liste')
            
        }
        myList.push(id)
        localStorage.setItem('mylist', JSON.stringify(myList))
        console.log('mylist', myList)

        this.setState({
            currentPage: this.state.currentPage + 1,
        })
    }



    render() {
        const {
            movies,
            currentPage,
        } = this.state;

        const secondIndex = currentPage * 2;
        const firstIndex = secondIndex - 1;

        const firstmovies = movies[firstIndex];
        const secondmovies = movies[secondIndex];

        console.log('heyyy', firstmovies)
        console.log('heyyy', secondmovies)

        if (this.state.movies.length === 0) {
            return <p>Loading...</p>
        } else return (
            <div className="row">
                <div className="col-6" onClick={() => this.choseFilm(firstmovies.id)}>
                    <Card title={firstmovies.title} overview={firstmovies.overview} poster_path={firstmovies.poster_path} />
                </div>
                <div className="col-6" onClick={() => this.choseFilm(secondmovies.id)}>
                    <Card title={secondmovies.title} overview={secondmovies.overview} poster_path={secondmovies.poster_path} />
                </div>
            </div>
        )
    }
}

export default PopularBattle;