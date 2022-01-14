import React from 'react'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './User.css';

const User = ({user}) => {
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
          title: 'Voulez-vous supprimer cet utilisateur ?',
          // text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Oui',
          cancelButtonText: 'Annuler',
          reverseButtons: true
        }).then((result) => {
          if (result.isConfirmed) {
              // dispatch(deleteuser(user._id))
              // dispatch(getAllUsers())
              swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            window.location.reload();
          };
        })
     }
    return (
        <tr>
            <td><img className="img" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3R5bGU9ImJhY2tncm91bmQ6I2RkZCI+PHBhdGggZmlsbD0iI0RERCIgZD0iTTAgMGg0OHY0OEgweiIvPjxwYXRoIGQ9Ik0yNCAyOWMyLjM3IDAgNS4yNC4yNDggNy42MTEuNzQ1IDMuODk5LjU0NCA2LjU4IDMuMTQzIDcuNzQgNy4wNzNDMzUuNjg1IDQxLjIwOCAzMC4xNjkgNDQgMjQgNDRjLTYuMTggMC0xMS43MDYtMi44MDMtMTUuMzc1LTcuMjA4IDEuMTA2LTMuNzk0IDMuNjgtNi4yMzcgNy43NjQtNy4wNDdDMTguNzU5IDI5LjI0OCAyMS42MjkgMjkgMjQgMjl6bTAtMjFhOCA4IDAgMDE4IDh2MmE4IDggMCAxMS0xNiAwdi0yYTggOCAwIDAxOC04eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="/></td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td><button onClick={handleDelete} className="btn btn-danger">Deactivate</button></td>
        </tr>
    )
}

export default User
