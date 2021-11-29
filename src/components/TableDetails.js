import React from 'react';

const TableDetails = (props) => {
    const film = props.film ;
    return (
       
             <div className="container">
           <h2> Les détails du film : {film.title}  </h2>
           <br/>
           <table className="table table-bordered" id="details" >
           <tbody>
            
           <tr>
               <td> image</td>   
               <td> <img src={"https://image.tmdb.org/t/p/w500/" + film.backdrop_path } alt={""} />
                </td>
           </tr>
            <tr>
               <td> budget</td>                 
               <td> {film.budget} </td>
           </tr>
           <tr>
               <td> Link</td>                 
               <td> <a href={film.homepage} > {film.homepage} </a></td>
           </tr>
           <tr>
               <td> id</td>                 
               <td> {film.id} </td>
           </tr>
           <tr>
               <td> imdb_id</td>                 
               <td> {film.imdb_id} </td>
           </tr>
           <tr>
               <td> original_language</td>                 
               <td> {film.original_language} </td>
           </tr>
           <tr>
               <td> original_title</td>                 
               <td> {film.original_title} </td>
           </tr>
           <tr>
               <td> overview</td>                 
               <td> {film.overview} </td>
           </tr>
           <tr>
               <td> popularity</td>                 
               <td> {film.popularity} </td>
           </tr>
           <tr>
               <td> Poster</td>                 
               <td>
               <img src={"https://image.tmdb.org/t/p/w500/" + film.poster_path} alt={"Sans poster "} />
                 
                    </td>
           </tr>
           
           <tr> 
               <td> production companies </td>
               <td><ul>
                      
                       {film?.production_companies.map((comp) =>(
                           <li > {comp.name}
                               </li>
                       ))
                       }      
               </ul></td>
           </tr>
           <tr> 
               <td> production countries </td>
               <td><ul>
                      
                       {film?.production_countries.map((count) =>(
                           <li> {count.name}
                               </li>
                       ))
                       }      
               </ul></td>
           </tr>
           <tr> 
               <td> genres </td>
               <td><ul>
                      
                       {film?.genres.map((genre) =>(
                           <li> {genre.name}
                               </li>
                       ))
                       }      
               </ul></td>
           </tr>

           <tr>
               <td> release_date</td>                 
               <td> {film.release_date} </td>
           </tr>
           <tr>
               <td> revenue</td>                 
               <td> {film.revenue} </td>
           </tr>
           <tr>
               <td> runtime</td>                 
               <td> {film.runtime} </td>
           </tr>
           <tr> 
               <td> Spoken languages </td>
               <td><ul>
                      
                       {film?.spoken_languages.map((lang) =>(
                           <li> {lang.english_name}
                               </li>
                       ))
                       }      
               </ul></td>
           </tr>
           <tr>
               <td> status</td>                 
               <td> {film.status} </td>
           </tr>
           <tr>
               <td> vote_average</td>                 
               <td> {film.vote_average} </td>
           </tr>
           <tr>
               <td> vote_count</td>                 
               <td> {film.vote_count} </td>
           </tr>
           <tr>
               <td> Tagline</td>                 
               <td> {film.tagline} </td>
           </tr>
           </tbody>
           </table>
                        <h2> Bande annonce </h2>
           {
                
                <iframe width="560" height="315" src={'https://www.youtube.com/embed/'+film.video_url}
                frameBorder='50'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
                />
             
        }
        </div>
    );
};

export default TableDetails;