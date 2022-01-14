import React, { useState } from 'react'
import { Modal,Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {addCategory, getAllCategories} from '../../JS/categorySlice/categorySlice';
import Swal from 'sweetalert2'


const AddCategory = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName]=useState("");
    const handleAdd =()=>{
        dispatch(addCategory({name}))
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        )
        dispatch(getAllCategories());
    }
    return (
        <>
            <a className="text-black dropdown-item display-4" onClick={handleShow}><span className="mobi-mbri mobi-mbri-edit mbr-iconfont mbr-iconfont-btn" />Add Category</a>
            <Modal style={{height: 300}} show={show} onHide={handleClose} backdrop="static">
            
                <Modal.Header closeButton>
                <Modal.Title>Add new Category</Modal.Title>
                </Modal.Header>
                
                <Modal.Body className='inps'>
                <label>Name :</label>
                <input className="form-control" type='text' onChange={(e) => setName(e.target.value)}
                />
                
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" onClick={()=>{handleAdd();handleClose()}}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default AddCategory;
