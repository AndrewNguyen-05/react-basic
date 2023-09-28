import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(async () => {
        setTimeout(async ()=>{
            let res = await axios.get('https://jsonplaceholder.typicode.com/users')
            let data = res && res.data ? res.data : [];
            setUserData(data);
            console.log(">>>>>>check data: ", data);
            setLoading(false);
        }, 1000);
    },[]);
    
    
    return (
        <table className='users'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Company</th>
                </tr>
            </thead>

            <tbody>
                {loading === false && userData && userData.length > 0 &&
                userData.map((item)=>{
                    return(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>{item.address.street}, {item.address.suite}, {item.address.city}</td>
                            <td>{item.company.name}</td>
                        </tr>
                    )           
                })}

                {loading === true && 
                    <tr>
                        <td colSpan='6' style = {{'textAlign': 'center'}}>Loading...</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Users;