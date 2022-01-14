import React, { useRef, useState } from 'react';
import './AddFilm.css';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux'
import { Form,Button } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { addFilm, getAllfilms } from '../../JS/filmSlice/filmSlice';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';


const AddFilms = () => {
    const dispatch = useDispatch();
    const history = useHistory()
    const wrapperRef = useRef(null);
    const reduxCategories = useSelector((state)=>state.category.categories);
    const [film,setFilm] = useState({name:"",date_sortie:"",director:"",affiche:"",videoSrc:"",categoryId:"",});
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
   
    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormData = new FormData();
        bodyFormData.append("file", file);
        const { data } = await axios.post(
          "http://localhost:5000/api/film/upload",
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        setFilm({...film,affiche:data});
    };
  
    const handleAdd = () => {
        dispatch(addFilm(film));
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
          )
        //window.location.reload();
        setFilm({name:"",date_sortie:"",director:"",affiche:"",videoSrc:"",categoryId:"",})
        dispatch(getAllfilms());

    }
    const check = ()=>{
        if(film.name === '' || film.date_sortie === '' || film.director === '' || film.affiche === '' || film.videoSrc === '' || film.categoryId === ''){
            alert('Please check again !');
        }else{handleAdd();}
    }
    const useStyles = makeStyles((theme) => ({
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 400,
        },
      }));
    const classes = useStyles();
    return (
        <div className="col-md-11 offset-1">
            <div className="row mt-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-10 box">
                            <div    ref={wrapperRef}
                                    className="drop-file-input"
                                    onDragEnter={onDragEnter}
                                    onDragLeave={onDragLeave}
                                    onDrop={onDrop}>
                                <div className="drop-file-input__label">
                                    <img src={process.env.PUBLIC_URL +"/cloud-upload-regular-240.png"}/>
                                    <p>Choisir une photo de profile</p>
                                </div>
                                <input onChange={uploadFileHandler} type="file"  name='file'/>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="col-md-6">
                    <img className={film.affiche? 'avatar':null} src={film?.affiche?`http://localhost:5000${film.affiche}`: null}/>
                </div>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        name="name"
                        type="text" 
                        value={film?.name}
                        onChange={(e)=>setFilm({...film,name:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Release date : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="date" 
                        value={film?.date_sortie}
                        onChange={(e)=>setFilm({...film,date_sortie:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Director : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="text" 
                        value={film?.director}
                        onChange={(e)=>setFilm({...film,director:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>videoSrc : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="text"  
                        value={film?.videoSrc}
                        onChange={(e)=>setFilm({...film,videoSrc:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category of film :</Form.Label><br/>
                        <Form.Select aria-label="Default select example" value={film?.categoryId} onChange={(e)=>setFilm({...film,categoryId:e.target.value})}>
                            <option>Open this select menu</option>
                            {reduxCategories?.map((el)=>(<option value={el._id}>{el.name}</option>))}
                        </Form.Select>   
                    </Form.Group>
                    <Button variant="success" onClick={check}>
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default AddFilms
