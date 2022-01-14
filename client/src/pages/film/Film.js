import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import './film.css';

export const Film = () => {
    const params  = useParams()
    const reduxfilms = useSelector((state)=>state.film.films);
    const isAuth = localStorage.getItem("token");
    const movie = reduxfilms?.find((el)=>(el._id === params.id));

    
    return (
        <div className='Movie'>
            <h1 className='name1'>{movie?.name}</h1>
            <div className="trajet-card1">
                <div><img className="image1" src={movie?.affiche}/></div>   
                <div className="trajet-body1">
                    <div className="trajet-row1"><span>Release date : {movie?.date_sortie}</span></div>
                    <div className="trajet-row1"><span>Director by : {movie?.director}</span></div>
                </div>  
            </div>  
            {isAuth?<iframe width="350" height="550" src={movie?.videoSrc} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>:<div>sign in to watch</div>}
           
            
        </div>
    )
}
