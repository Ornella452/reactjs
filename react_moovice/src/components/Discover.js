import React from 'react';
import Card from './movie/Card';
import placeholder from '../img/placeholder.png';
import moment from 'moment';

class Discover extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],

        }

    }

    componentDidMount() {

        const TODAY = moment().toISOString();
        const NEXT_WEEK= moment().add(1, 'weeks').toISOString();
        console.log('discover today', TODAY)
        console.log('discover newt week', NEXT_WEEK)
        

        const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXT_WEEK}&api_key=134d92c3d72c8501356da2496ace8c7e`;     
        fetch(url)
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
            <div className='row'>
                   {this.state.movies.map((elem, index) => 
                   

             <Card key={index} title={elem.title} overview={elem.overview} poster_path={elem.poster_path} />

         
                          )}
            </div>
        )
    }
}

export default Discover;