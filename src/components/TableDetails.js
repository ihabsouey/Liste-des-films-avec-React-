import React from 'react';

const TableDetails = (props) => {
    const film = props.film;
    return (


        <div className="detailContainer">

            <div className="detailLeft">

                <h2>  {film.title}  </h2>


                <img src={"https://image.tmdb.org/t/p/w500/" + film.poster_path} alt={"Sans poster "} />


                <h2> Bande annonce </h2>


                <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + film.video_url}
                    frameBorder='50'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
            <div className="detailRight">


                <table className="table table-bordered " id="details" >
                    <tbody>
                        <tr>
                            <td> original_title</td>
                            <td> {film.original_title} </td>
                        </tr>
                        <tr>
                            <th> Tagline</th>
                            <td> {film.tagline} </td>
                        </tr>
                        <tr>
                            <th> overview</th>
                            <td> {film.overview} </td>
                        </tr>
                        <tr>
                            <th> Link</th>
                            <td> <a target="_blank" href={film.homepage} > {film.homepage} </a></td>
                        </tr>

                        <tr>
                            <th> imdb link</th>
                            <td> <a target="_blank" href={"https://www.imdb.com/title/" + film.imdb_id} > imdb </a></td>
                        </tr>
                        <tr>
                            <th> Original language</th>
                            <td> {film.original_language} </td>
                        </tr>
                        <tr>
                            <th> production companies </th>
                            <td><ul>

                                {film?.production_companies.map((comp) => (
                                    <li > {comp.name}
                                    </li>
                                ))
                                }
                            </ul></td>
                        </tr>
                        <tr>
                            <th> production countries </th>
                            <td><ul>

                                {film?.production_countries.map((count) => (
                                    <li> {count.name}
                                    </li>
                                ))
                                }
                            </ul></td>
                        </tr>
                        <tr>
                            <th> genres </th>
                            <td><ul>

                                {film?.genres.map((genre) => (
                                    <li> {genre.name}
                                    </li>
                                ))
                                }
                            </ul></td>
                        </tr>

                     
                        <tr>
                            <th> Spoken languages </th>
                            <td><ul>

                                {film?.spoken_languages.map((lang) => (
                                    <li> {lang.english_name}
                                    </li>
                                ))
                                }
                            </ul></td>
                        </tr>
                        <tr>
                            <th> status</th>
                            <td> {film.status} </td>
                        </tr>  
                         <tr>
                            <th> release_date</th>
                            <td> {film.release_date} </td>
                        </tr>

                        <tr>
                            <th> vote_average</th>
                            <td> {film.vote_average} /10  ({film.vote_count} votes) </td>
                        </tr>
                       

                    </tbody>
                </table>
            </div>




        </div>

    );
};

export default TableDetails;