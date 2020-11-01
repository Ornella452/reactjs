import React from 'react';
import Card from './movie/Card'
import moment from 'moment'
import placeholder from '../img/placeholder.png'
class DiscoverBattle extends React.Component {


    constructor(){
        super();
        this.state = {
            currentPage: 1,
            movies: [],
            originalList:[]
        }

        this.cardClick = this.cardClick.bind(this)
    }

    componentDidMount() {

        if (this.state.movies === undefined){
            return ( <div>
                <p>List est vide</p>
            </div>)
        }

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
                        poster_path: elem.poster_path ? <img src={`https://image.tmdb.org/t/p/w300/${elem.poster_path}`} alt="" /> : <img className="col-8" src= {`${placeholder}`} alt="photo par default"/>

                    }
                })
                this.setState({ 
                    originalList: movies, 
                    movies: [movies[0], movies[1]]
                 })

            })

    }//fin de cmponenDidMount
     
    cardClick(id){

        console.log(id)
        this.setState( prevState => this.state.currentPage = prevState.currentPage + 1 )
       
        const myList = JSON.parse(localStorage.getItem('my-list'))
        if (myList.includes(id)){
            myList.push(id)
            localStorage.setItem('my-list', JSON.stringify(myList))
        }
        const secondindex = this.state.currentPage * 2 - 1
        const firstindex = secondindex - 1
        this.setState({ 
            movies :  [this.state.originalList[firstindex], this.state.originalList[secondindex]]
         })
       


    }

    render(){
        return(
            <div className="row">
                {this.state.movies.map((elem, index) =>(
                        <div  key={index}  className='col-6'  onClick={(id) => this.cardClick(elem.id)} >

                        <Card title={elem.title} overview={elem.overview} poster_path={elem.poster_path} />
           
                        </div>
                
                ))}
            </div>
        )
    }
}

export default DiscoverBattle;