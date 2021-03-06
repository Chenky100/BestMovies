import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router,Switch,Route , Link} from 'react-router-dom';
import TopThree from './Components/TopThree'
import Movie from './Components/Movie'

let arr = [ {name:"movie 1",description: "just like the Titanic but with a good endings", score: 0, votes: 0,   }, {name:"movie 1",description: "just like the Titanic but with a good endings", score: 0, votes: 0,   }]

function App() {
  
  const [movies, setMovies] = useState(
        [ {name:"The Godfather", year:"1972", score: 92, votes: 20,img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" ,description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."   }, 
          {name:"Fight Club",year:"1999", score: 39, votes: 10,img:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."   },
          {name:"Interstellar",year:"2014",score: 17, votes: 4,img:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",    }, 
          {name:"The Matrix",year:"1999", score: 15, votes: 5,img:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."   },
          {name:"Joker",year:"2019", score: 6, votes: 5,img:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg" , description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."   }]
        
  );
  const [ranking, setRanking] = useState([0,2,1,3,4]);
  const [currMovieIndx, setCurr] = useState(ranking[0]);
  const rate1 = (index, val) =>{
    console.log("rateing registered for movie "+movies[index].name+" with the score of " + val +" !");
    
    
    updateVote(index,val);
    calcRanking();
  }
  const navPress = (i) =>{
        
    setCurr(i);
    
}

  const updateVote = (index, val) =>{
    let newArr = [ {name:"The Godfather", year:"1972", score: 92, votes: 20,img:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg" ,description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."   }, 
    {name:"Fight Club",year:"1999", score: 39, votes: 10,img:"https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."   },
    {name:"Interstellar",year:"2014",score: 17, votes: 4,img:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",    }, 
    {name:"The Matrix",year:"1999", score: 15, votes: 5,img:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg" ,description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers."   },
    {name:"Joker",year:"2019", score: 15, votes: 5,img:"https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg" , description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker."   }];

    for (let i = 0; i < 5; i++) {
      if(i == index){

        newArr[i].score = movies[i].score + val;
        newArr[i].votes = movies[i].votes + 1;
      }else{

        newArr[i].score = movies[i].score;
        newArr[i].votes = movies[i].votes;
      }
    }
    setMovies(newArr);
  }

  const calcRanking = () =>{
    let arr = [-1,-1,-1,-1,-1];
    let count = 0;
    
  
    while (count < 5) {
      let high = 0;
      let highIndex= 0;
      for (let i = 0; i < movies.length; i++) {
       
          if(arr[0] == i || arr[1] == i || arr[2] == i || arr[3] == i || arr[4] == i ){
            continue;
          }
        
        if(movies[i].score / movies[i].votes > high){
          high = movies[i].score / movies[i].votes;
          highIndex = i;
        }
      }
      arr[count] = highIndex;
      count++;

    }
    setRanking(arr);    
  }
  const rate = (val) =>{
    let tmp = currMovieIndx;
    rate1(tmp,val)
    console.log(" curr movie: "+ movies[currMovieIndx].name);
    
  }

  return (
    <div className="main">
      <h1>BestMovies</h1>
        <Router>
          
          <div className="main1">
                <TopThree ranking={ranking} navPress={navPress} movies={movies}/>
          </div>

          <div className="main2" >
              <div className="row mainrow">

                <div className="col-10">
                <Switch>
                    <Route exact path='/HomePage/bestMovies' component={()=>{return  <Movie rate={rate} movie={movies[ranking[0]]}/>}}/>
                    

                    <Route exact path={'/HomePage/bestMovies/' + movies[0].name} component={()=>{return  <Movie rate={rate} movie={movies[0]}/>}}/>
                    <Route exact path={'/HomePage/bestMovies/' + movies[1].name} component={()=>{return  <Movie rate={rate} movie={movies[1]}/>}}/>
                    <Route exact path={'/HomePage/bestMovies/' + movies[2].name} component={()=>{return  <Movie rate={rate} movie={movies[2]}/>}}/>
                    <Route exact path={'/HomePage/bestMovies/' + movies[3].name} component={()=>{return  <Movie rate={rate} movie={movies[3]}/>}}/>
                    <Route exact path={'/HomePage/bestMovies/' + movies[4].name} component={()=>{return  <Movie rate={rate} movie={movies[4]}/>}}/>
                }/>


                </Switch>
        
                  
                </div>
                <div className="col-2">
                            {movies.map((movie,index)=>{
     
                                return (
                                  <Link to={'/HomePage/bestMovies/' + movies[index].name} > 
                                    <div className="smallwin"><button className="navButton" onClick={() => { return( navPress(index)  )}}> <h4> { movie.name } </h4> </button> </div></Link>
                                )
                            })}
                </div>
              </div>
              
          </div>
        </Router>
          
        
      

    <div className="botBar"> © 2020 Chen Kahalany </div>
    </div>
  );
}

export default App;
