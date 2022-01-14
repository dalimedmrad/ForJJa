import React, { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch} from "react-redux";
import Swal from "sweetalert2";
import { getAllCategories, updateCategory } from "../../JS/categorySlice/categorySlice";

const EditCategory = ({cg}) => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [Data,setData] = useState({
      name:''
    });
    useEffect(() => {
        setData(cg);
        console.log(Data)
    }, []);
    const handleupdate = ()=>{
      dispatch(updateCategory(Data));
      handleClose();
      Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      dispatch(getAllCategories());
    }
    return (
        <div>
        <Button variant='success' style={{width:"110px"}} onClick={handleShow}>
            update
        </Button>
        <Modal show={show} onHide={handleClose} style={{height: 300}}>
            <Modal.Header closeButton>
            <Modal.Title>Update category</Modal.Title>
            </Modal.Header>
            <Modal.Body className='inps'>
              <label>Name :</label>
              <input
                className="form-control"
                type='text'
                value={Data.name}
                onChange={(e) => setData({...Data,name:e.target.value})}
              />
                </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button
                variant='success'
                onClick={handleupdate}>
                Save
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
    )
}

export default EditCategory
