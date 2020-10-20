import React from 'react';
import Card from './movie/Card';
import placeholder from '../img/placeholder.png';

class PopularBattle extends React.Component {


    constructor() {
        super();
        this.choseFilm = this.choseFilm.bind(this);
        this.state = {
            currentPage: 1,
            movies: []// list for movies
        }




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
        console.log("chosefilm ok", id)
        let myList = JSON.parse(localStorage.getItem('my-list')) || [];

        // si ya les film on stock qui ont le meme le id sinon on sauvgarde un tableau vide
        if (!myList.includes(id)) {
            myList.push(id)
            localStorage.setItem('mylist', JSON.stringify(myList))

        }
        console.log('mylist', myList)

        this.setState({
            currentPage: this.state.currentPage + 1,

        })

    }



    render() {
        const {
            //movies,
            currentPage,
        } = this.state;

        const secondIndex = currentPage * 2 - 1;
        const firstIndex = secondIndex - 1;

        const firstmovies = this.state.movies[firstIndex];
        const secondmovies = this.state.movies[secondIndex];

        //console.log('first', firstmovies)
        //console.log('second', secondmovies)

        if (firstmovies === undefined) {
            return (<div>Films are loading, please wait</div>)
        }

        if (this.state.movies.length === 0) {
            return <p>Loading...</p>
        } else return (
            <div className="row">
                <div>
                    <button className="col-6" onClick={() => this.choseFilm(firstmovies.id)}>
                        <Card {...firstmovies} />
                    </button>

                </div>
                <div>
                    <button className="col-6" onClick={() => this.choseFilm(secondmovies.id)}>
                        <Card title={secondmovies.title} overview={secondmovies.overview} poster_path={secondmovies.poster_path} />
                    </button>

                </div>
            </div>
        )
    }
}

export default PopularBattle;