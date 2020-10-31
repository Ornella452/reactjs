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


        this.choseFilm = this.choseFilm.bind(this);
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                console.log(json)
                const movies = json.results.map((elem) => {
                    return {
                        id: elem.id,
                        title: elem.title,
                        overview: elem.overview,
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt="" /> : placeholder

                    }
                })
                this.setState({ movies })
            })
    }


    choseFilm(id) {
        //console.log('choseFilm ok',id)

        let mylist = JSON.parse(localStorage.getItem('my-list')) || []

        // Evité les duplicats de film enregistre

        if (!mylist.includes(id)) {
            mylist.push(id)
            localStorage.setItem('my-list', JSON.stringify(mylist))
        }
        console.log('mylist', mylist)

        this.setState({
            currentPage: this.state.currentPage + 1
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

        console.log('first', firstmovies)
        console.log('second', secondmovies)

        if ((secondmovies === undefined) || (firstmovies === undefined)) {
            return (<div> Films are loading, please wait !</div>)
        } else if (this.state.movies.length === 0) {
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




