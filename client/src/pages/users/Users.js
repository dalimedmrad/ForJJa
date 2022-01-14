import React from 'react';
import { useSelector } from 'react-redux';
import User from '../../Components/User/User';
import './Users.css';

const Users = () => {
    const usersRedux = useSelector((state) => state.user.users);
    const userRedux = useSelector((state) => state.user.user);

    return (
        <div className="userList">
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Photo</th>
                <th>Name</th>
                <th>Lastname </th>
                <th>Age </th>
                <th>E-mail address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersRedux?.filter(el=>el._id !== userRedux?._id).map((el)=>(<User user={el}/>))}
            </tbody>
          </table>
      </div>
    )
}

export default Users;
