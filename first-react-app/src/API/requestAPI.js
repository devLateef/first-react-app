import axios from "axios";
import { useState } from "react";

export const ApiRequest = ()=>{
    let [users, setUsers] = useState([]);
    const getUsers = async()=>{
    const result = (await axios.get("https://jsonplaceholder.typicode.com/users")).data;
    setUsers(result);
}
    return (
        <div>
            <button onClick={getUsers}>Click Me</button>
            <table border={1}>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

