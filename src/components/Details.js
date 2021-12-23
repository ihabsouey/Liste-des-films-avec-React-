import React , {useEffect} from "react" 
import { Link } from 'react-router-dom';
import {useParams} from "react-router-dom"
import TableDetails from "./TableDetails";
function Details(){
    const [film,setFilm] = React.useState(null);
    const {id} = useParams() ;
    const API ="https://api.themoviedb.org/3/movie/"+id+"?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr" ; 
    
    useEffect(() => {
        fetch(API)
        .then((res)=> {
            return res.json()
        })
        .then((f)=>{
                const API_VIDEO = `https://api.themoviedb.org/3/movie/${f.id}/videos?api_key=e3e3d29c3d379923c3ef3321c35b73c0&language=fr`;
                fetch(API_VIDEO)
                .then((res)=> {
                    return res.json()
                }).then((_f)=>{
                    let _film = f;
                    _film.video_url = _f?.results[0]?.key
                    setFilm(_film)
                }).catch( error => { } )
            
        })
    },[API])
    console.log(film);
    return (

   <div>
        
          <header>
                <nav>
                <Link to="/Liste-des-films-avec-React-/" > 
                    <button className="btn btn-primary " id="btnr">
                    
                    <img src="https://www.freeiconspng.com/uploads/home-page-icon-0.png" width="35" alt="Search Free Icon Image" />  Accueil
                    </button>
                </Link>
                </nav>
                
                <div>
                <h1 id="headerTitle">  Plus de détails sur le film  </h1>
                </div>

            </header>


  
     {(film) &&
         (
            <div>
               
                <TableDetails film={film}/>
            
             </div>
     
         )}
       
    { (!film) &&  ( <h1>Loading ...</h1> ) }
     </div>
     )
}

export default Details