import React from 'react'
import { Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2';
import { deleteFilm, getAllfilms } from '../../JS/filmSlice/filmSlice';
import './film.css'

const Film = ({f}) => {
    const isAdmin = localStorage.getItem('isAdmin');
    const dispatch = useDispatch();
    const handleDelete=()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Do you want to delete this movie ?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteFilm(f._id))
                swalWithBootstrapButtons.fire(
                'Deleted !',
                'Your film has been deleted.',
                'success'
              )
              dispatch(getAllfilms())
              // window.location.reload();
            };
          })
     }
    return (
        <div class="cardi">
        <div class="overlay">
          <div class="contenu">
            <Link to={`/film/${f._id}`}>
              <i className="far fa-play-circle" />
            </Link>
            
          </div>
          {isAdmin?<button onClick={handleDelete} className='btn btn-danger'><i class="fas fa-trash-alt"></i></button>:null}
          {isAdmin?<Link to={`/updatefilm/${f._id}`}><button title='Watch' className='btn btn-success'><i  class="fal fa-edit"></i></button></Link>:null}
        </div>
        <img src={f.affiche} alt="fgrgrgÂ²" />
        <h3>{f.name}</h3>
      </div>
    )
}

export default Film;
