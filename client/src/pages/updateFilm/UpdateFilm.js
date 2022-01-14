import { makeStyles,Button} from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { getAllfilms, updateFilm } from '../../JS/filmSlice/filmSlice';
import './Update.css';
import Swal from 'sweetalert2';

const UpdateFilm = () => {
    const params  = useParams();
    const reduxfilms = useSelector((state)=>state.film.films);
    const movie = reduxfilms?.find((el)=>(el._id === params.id));
    const dispatch = useDispatch();
    const history = useHistory();
    const wrapperRef = useRef(null);
    const reduxCategories = useSelector((state)=>state.category.categories);
    const [filmupdate,setFilmUpdate] = useState({name:"",date_sortie:"",director:"",affiche:"",videoSrc:"",categoryId:"",});
    const onDragEnter = () => wrapperRef.current.classList.add('dragover');
    const onDragLeave = () => wrapperRef.current.classList.remove('dragover');
    const onDrop = () => wrapperRef.current.classList.remove('dragover');
   
    useEffect(() => {
        setFilmUpdate(movie);
    }, [movie])
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
        setFilmUpdate({...filmupdate,affiche:data});
    };
    const handleUpdate = () => {
        dispatch(updateFilm(filmupdate));
        Swal.fire(
            'Good job!',
            'successfully modified',
            'success'
            
          )
          dispatch(getAllfilms());
        // history.push("/films");
        // window.location.reload();

    };
    const check = ()=>{
        if(filmupdate.name === '' || filmupdate.date_sortie === '' || filmupdate.director === '' || filmupdate.affiche === '' || filmupdate.videoSrc === '' || filmupdate.categoryId === ''){
            alert('Please check again !');
        }else{handleUpdate();}
    };
    const useStyles = makeStyles((theme) => ({
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 400,
        },
    }));
    const classes = useStyles();
    return (
        <div className="col-md-11 offset-1 mt-4 pt-5" >
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
                                    <p>Choose a poster on the film  </p>
                                </div>
                                <input onChange={uploadFileHandler} type="file"  name='file'/>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="col-md-6">
                    <img className={filmupdate?.affiche? 'avatar1':null} src={filmupdate?.affiche?`http://localhost:5000${filmupdate?.affiche}`: null}/>
                </div>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Name of film : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        name="name"
                        value={filmupdate?.name}
                        type="text" 
                        onChange={(e)=>setFilmUpdate({...filmupdate,name:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Release date : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="date" 
                        value={filmupdate?.date_sortie}
                        onChange={(e)=>setFilmUpdate({...filmupdate,date_sortie:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Director : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="text" 
                        value={filmupdate?.director}
                        onChange={(e)=>setFilmUpdate({...filmupdate,director:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>videoSrc : <b>*</b></Form.Label>
                        <input
                        className="form-control"
                        type="url"  
                        value={filmupdate?.videoSrc}
                        onChange={(e)=>setFilmUpdate({...filmupdate,videoSrc:e.target.value})}
                        />          
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category of film : <b>*</b></Form.Label><br/>
                        <Form.Select aria-label="Default select example" value={filmupdate?.categoryId} onChange={(e)=>setFilmUpdate({...filmupdate,categoryId:e.target.value})}>
                            <option onClick={()=>setFilmUpdate({...filmupdate,categoryId:''})}>Open this select menu</option>
                            {reduxCategories?.map((el)=>(<option value={el._id}>{el.name}</option>))}
                        </Form.Select>   
                    </Form.Group>
                    <Button className='mt-3 btn btn-success' onClick={check}>
                        Save
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default UpdateFilm;
