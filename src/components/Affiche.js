import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Table from "../components/Table"

import '../App.css';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
 
function Affiche () {
    const API_LIST = 'https://api.themoviedb.org/3/movie/popular?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&page=1'
    const [films,setFilms] = React.useState([]);
    
    useEffect(() => {
        fetch(API_LIST)
        .then((res)=> {
            return res.json()
        })
        .then((film)=>{
            setFilms(film.results)
        })
    },[])

    return (
        <div className='container'> 
        <br/><br/>
        <Link to="/search" > 
        <button className="btn btn-primary" id="btnr">
            Recherche des films &nbsp;
            <img src="https://www.freeiconspng.com/uploads/search-icon-png-21.png" width="35" alt="Search Free Icon Image" /> 
        </button> </Link> <br/> <br/> <br/>
            <h1> Liste des films populaires  </h1><br/> 
              <Table films={films}/>
        </div>
    )

}

export default Affiche