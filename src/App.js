
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, deleteUser,updateUsername } from "./features/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  return (
    <div className="App">
      <div className="addUser">
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder='email...' onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => {
          dispatch(
            addUser({
              id: userList[userList.length - 1].id + 1,
              name,
              email,
            })
          )
        }}
        >Add User</button>
      </div>
      <div className='displayUsers'>
        {userList.map((user) => {
          return (
            <div key={user.id}>
              <h1 >{user.name}</h1>
              <h1 >{user.email}</h1>
              <input text="text"
                placeholder='New Username...'
                onChange={(e) => {
                 setNewEmail(e.target.value)
                }} />
              <button onClick={() => dispatch(
                updateUsername({id:user.id , email: newEmail})

              )}>Update name</button>
              <button onClick={() => { dispatch(deleteUser({ id: user.id })); }}>Delete</button>
            </div>

          )
        })}
      </div>

    </div>
  );
}

export default App;
