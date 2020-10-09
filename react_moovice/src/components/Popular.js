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
            currentMovice: null,
            def: placeholder,
           



        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=134d92c3d72c8501356da2496ace8c7e")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    poster_path: json.results[0].poster_path,
                    title: json.results[0].title,
                    overview: json.results[0].overview,
                    movies: json.results
                })
             
            });
    }


    click(poster_path) {
        fetch(poster_path)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    currentMovice: json
                })
               /* if(json.success){
                    this.setState({
                        def: json.def
                    })
                }*/console.log(json)
            })
    }

    render() {
        return (
            <div>
                <Card
                    title={this.state.title}
                    overview={this.state.overview}
                    poster_path={this.state.poster_path}/>

                <section>
                    {this.state.movies.map((elem, index) => {
                        return (
                            <span onClick={() => this.click(elem.poster_path)} key={index}>
                                <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`}/>
                             
                        <p>{elem.title}</p>
                        <p>{elem.overview}</p>
                            </span>
                        )
                    })}
                </section>
            </div>
        )
    }
}

export default Popular;