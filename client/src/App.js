import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch,BrowserRouter } from 'react-router-dom';
import PrivateRoute from './Components/router/PrivateRoute';
import './App.css';
import { currentUser, getAllUsers } from './JS/userslice/userSlice';
import Home from './pages/home/Home';
import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import Navbar from './Components/navBar/Navbar';
import Footer from './Components/Footer/Footer';
import Films from './pages/Films/Films';
import AddFilms from './pages/AddFilm/AddFilms';
import { getAllCategories } from './JS/categorySlice/categorySlice';
import { getAllfilms } from './JS/filmSlice/filmSlice';
import { Film } from './pages/film/Film';
import AdminRouter from './Components/router/AdminRouter';
import UpdateFilm from './pages/updateFilm/UpdateFilm';
import Message from './Components/message/Message';
import Users from './pages/users/Users';

const  App = () =>{
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  useEffect(() => {
    if(isAuth){dispatch(currentUser());}
    dispatch(getAllCategories());
    dispatch(getAllfilms());
    dispatch(getAllUsers());
  }, []);

  return (
      <div>
          <Navbar/>
          <Switch>
            <Route path="/"  exact component={Home}/>
            <PrivateRoute path="/film/:id"  component={Film}/>
            <AdminRouter path="/updatefilm/:id" component={UpdateFilm}/>
            <AdminRouter path="/allusers" component={Users}/>
            <Route path="/message" component={Message}/>
            <Route path="/addfilm" component={AddFilms}/>
            <Route path="/films"  component={Films}/>
            {/* <Route path="/signin" exact component={Signin}/> */}
            <Route path="/signin" exact component={SignUp}/>
          </Switch>
          {/* <Footer/> */}
      </div>
    
  );
}

export default App;
