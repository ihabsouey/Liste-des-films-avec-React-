import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Table from "../components/Table"
function Search() {
    const [query,setQuery] = useState('')
    const [films,setFilms] = useState([])
    const API = `https://api.themoviedb.org/3/search/multi?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr&query=${query}&page=1&include_adult=false`
    React.useEffect(() => {
        fetch(API)
        .then((res)=> {
            return res.json()
        })
        .then((f)=>{
            setFilms(f.results)
        })
    },[API,query])

    
    return (
        <div className="container">
           <br/><br/>
          
            <Link to="/Liste-des-films-avec-React-/" > 
                    <button className="btn btn-primary" id="btnr">
                    
                    <img src="https://www.freeiconspng.com/uploads/home-page-icon-0.png" width="35" alt="Search Free Icon Image" /> 
                    </button>
                </Link>
              
                <div className="ss">  <br/>
                    <div class="input-group input-group-sm mb-3" >
                        <div class="input-group-prepend">
                        <span class="input-group-text btn btn-secondary" id="inputGroup-sizing-sm"> Tapez le nom du film :</span>
                        </div>
                        <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"  value={query} onChange={(e)=>setQuery(e.target.value)}/>
                    </div> 
                    </div>
             
                <br/> <br/>
                { films && 
                 
                    <Table films={films}/>
                
                }
                 { !films && 
                
                     <h2> Loading ... </h2>
              
                }
           
           
        </div>

    )
}
export default Search
