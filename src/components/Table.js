import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const films = props.films ;
    return (
       
          
                     <div className="container2">         <article class="film-card"><h4 class="film-title"> Friendzone</h4><img class="film-image" src="https://image.tmdb.org/t/p/w500//8Df8Wsstu76Wr8cTPfNHrSveVe6.jpg" alt="Friendzone"/><a href="/details/869617"><button class="btn btn-primary film-text">Voire plus détails</button> </a></article>
      
                    {films.map((film) => (
                        ( film.title && ( 
                            <article class="film-card">
                        
                              <h4 className="film-title"> {film.title}</h4>  
                            <img className="film-image" src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path } alt={film.title} /> 
                                   <Link to={"/details/"+film.id} >
                                       <button className="btn btn-primary film-text" >Voire plus détails</button> </Link>  
                                       </article>   
                          ))  
                    ))}
                    </div>
                 
        
        
    );
};

export default Table;