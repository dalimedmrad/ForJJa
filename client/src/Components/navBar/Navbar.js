import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { logout } from '../../JS/userslice/userSlice';
import './navbar.css';
import $ from 'jquery';
import AddCategory from '../AddCategory/AddCategory';



const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth=localStorage.getItem("token");
    const isAdmin = localStorage.getItem('isAdmin');


  const handlelogout =()=>{
      dispatch(logout());
      history.push('/');
      window.location.reload()
   }
   useEffect(() => {
      $(window).on('scroll',function(){
          if($(window).scrollTop()){
            $('nav').addClass('black');
          }else {
            $('nav').removeClass('black');
          }
        })
   }, [])
 

    return (
      <section data-bs-version="5.1" className="menu menu1 cid-sOnyjK30Hb" once="menu" id="menu1-0">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <Link to="/">
                  <img src={process.env.PUBLIC_URL +"logo1.png"} alt="Mobirise" style={{height: '5.5rem'}} />
                </Link>
              </span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <Link to="/"><li className="nav-item"><a className="nav-link link text-black display-4"><span className="mobi-mbri mobi-mbri-home mbr-iconfont mbr-iconfont-btn" />Home<br /></a></li></Link>
             
              {isAdmin?<Link to="/allusers"><li className="nav-item"><a className="nav-link link text-black display-4"><span className="mobi-mbri mobi-mbri-users mbr-iconfont mbr-iconfont-btn" />All users<br /></a></li></Link>:null } 
             
                <Link to="/films"><li className="nav-item"><a className="nav-link link text-black display-4"><i class="fal fa-film"></i>&nbsp;Films</a></li></Link>
                { isAuth? 
                <div>
                    <li className="nav-item dropdown">
                    <a className="nav-link link text-black dropdown-toggle show display-4" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                      <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn" /></a>
                    <div className="dropdown-menu show" aria-labelledby="dropdown-undefined" data-bs-popper="none">
                      {isAdmin?<AddCategory/>:null}
                      {isAdmin?<Link to="/addfilm"><a className="text-black dropdown-item display-4"><span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />Add film</a></Link>:null}
                      <a onClick={handlelogout} className="text-black show dropdown-item display-4" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true"><span className="mobi-mbri mobi-mbri-logout mbr-iconfont mbr-iconfont-btn" />Log out</a></div>
                  </li>
                </div>
                :
                <div>
                    <li className="nav-item dropdown">
                    <a className="nav-link link text-black dropdown-toggle show display-4" data-toggle="dropdown-submenu" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="true">
                      <span className="mobi-mbri mobi-mbri-user-2 mbr-iconfont mbr-iconfont-btn" /></a>
                    <div className="dropdown-menu show" aria-labelledby="dropdown-undefined" data-bs-popper="none">
                      <Link to="/signin"><a className="text-black dropdown-item display-4"><span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />Sign In</a></Link>
                      {/* <Link to="/signup"><a className="text-black show dropdown-item display-4"><span className="mobi-mbri mobi-mbri-logout mbr-iconfont mbr-iconfont-btn" />Sign Up</a></Link> */}
                    </div>
                  </li>
                </div>
      
                }
                </ul>
            </div>
          </div>
        </nav>
      </section>
    )
}

export default Navbar;
