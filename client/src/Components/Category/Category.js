import {Button} from 'react-bootstrap';
import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import EditCategory from '../../Components/EditCategory/EditCategory';
import { deleteCategory, getAllCategories } from '../../JS/categorySlice/categorySlice';
import Swal from 'sweetalert2'
import Film from '../film/Film';

const Category = ({cat,setidCat}) => {
    const isAdmin = localStorage.getItem('isAdmin');
    const dispatch = useDispatch();
    const [donefilter, setDonefilter] = useState(false);
    const handleDelete=()=>{
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })
          
          swalWithBootstrapButtons.fire({
            title: 'Do you want to delete this category ?',
            // text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteCategory(cat._id))
                swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your category has been deleted.',
                'success'
              )
            }dispatch(getAllCategories());
          })
     }
    return (
        <tr style={{display:"block"}}>
            <td><Button style={{width:"110px"}} onClick={()=>setidCat(cat._id)}>{cat.name}</Button></td>
            {isAdmin?<td><EditCategory cg={cat}/></td>:null}
            {isAdmin?<td><Button style={{width:"110px"}} variant='danger' onClick={handleDelete}>delete</Button></td>:null}
        </tr>
    )
}

export default Category;
