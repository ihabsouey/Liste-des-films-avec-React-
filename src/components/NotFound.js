import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
    render() {
        return (
            <body>
                <header>
                    <nav>
                    <Link to="/Liste-des-films-avec-React-/" > 
                    <button className="btn btn-primary " id="btnr">
                    
                    <img src="https://www.freeiconspng.com/uploads/home-page-icon-0.png" width="35" alt="Search Free Icon Image" />  Accueil
                    </button>
                </Link>
                    </nav>

                    <div>
                        <h1 id="headerTitle">  Page Not Found  </h1>
                    </div>

                </header>


                 
            </body> 
        )
    }
}
