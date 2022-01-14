import React, {useState } from 'react';
import './Films.css'
import {useSelector } from 'react-redux';
import Category from '../../Components/Category/Category';
import Film from '../../Components/film/Film'



const Films = () => {
    const isAdmin = localStorage.getItem('isAdmin');
    const reduxCategories = useSelector((state)=>state.category.categories);
    const reduxfilms = useSelector((state)=>state.film.films);
    const [idCat, setidCat] = useState('');
    const [nameFilm,setNameFilm]=useState('')
    
    return (
        <div className="liste">
           <div className={isAdmin?'categoriesadmin':'categories'}>
               <table>
                <tbody>
                    {reduxCategories?.map((el)=>(<Category idCat={idCat} setidCat={setidCat} cat={el}/>))}
                </tbody>
               </table>
           </div>
           <div className={isAdmin?'filmsadmin':'films'}>
                <div className={isAdmin?'searchadmin':'search'}>
                    <div><button style={{width:"123px"}} className="btn btn-success" onClick={()=>setidCat('')}>All Movies</button></div>
                    <div><input type="text" placeholder="Search for your movie" className="form-control" onChange={(e)=>setNameFilm(e.target.value)}/></div>
                </div>
                <div className={isAdmin?'mapingadmin':'maping'}>
                    {(idCat || nameFilm)?(reduxfilms?.filter(el=>el.categoryId===idCat).map((el)=><Film f={el}/>)):(reduxfilms?.map((e)=>(<Film f={e}/>)))}
                    {(nameFilm)?(reduxfilms?.filter(el=>el.name.toLowerCase().includes(nameFilm.toLowerCase())).map((el)=><Film f={el}/>)):null}
                </div>
            </div>
            <footer className={isAdmin?'footeadmin':'foote'}>
                <div class="container-fluid mt-5">
                    <div class="carda">
                        <div className="row" style={{fontsize: '"10px'}}>
                        <div className="col-md-6 col-sm-6 mt-2 col-xs-6">
                            <div className="pull-left">
                            <p><i className="fa fa-copyright" /> 2021°</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <div className="pull-right mr-4 d-flex policy">
                            <div>Terms of Use</div>
                            <div>Privacy Policy</div>
                            <div>Cookie Policy</div>
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </footer> 
        </div>
    )
}

export default Films;
