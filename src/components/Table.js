import React from 'react';
import { Link } from 'react-router-dom';

const Table = (props) => {
    const films = props.films ;
    return (
       
          
                     <div className="container2">        
                    {films.map((film) => (
                        ( film.title && ( 
                            <article class="film-card">
                        
                         
                            <img className="film-image" src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path } alt={film.title} /> 
                            <br/><br/>
                            <h4 className="film-title"> {film.title}</h4>  
                                   <Link to={"/details/"+film.id} >
                                       <button className="btn btn-primary film-text" >Voire plus détails</button> </Link>  
                                       </article>   
                          ))  
                    ))}
                    </div>
                 
        
        
    );
};

export default Table;