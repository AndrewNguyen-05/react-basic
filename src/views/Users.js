import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
    const [userData, setUserData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    
    useEffect(async () => {
        setTimeout(async ()=>{
            try{
                let res = await axios.get('https://jsonplaceholder.typicode.com/users')
                let data = res && res.data ? res.data : [];
                setUserData(data);
                console.log(">>>>>>check data: ", data);
                setIsLoading(false);
                setIsError(false);
            }
            catch(e){
                setIsLoading(false);
                setIsError(true);
            }        
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
                {isError === false && isLoading === false && userData && userData.length > 0 &&
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

                {isLoading === true && 
                    <tr>
                        <td colSpan='6' style = {{'textAlign': 'center'}}>Loading...</td>
                    </tr>
                }

                {isError === true && 
                    <tr>
                        <td colSpan='6' style = {{'textAlign': 'center'}}>Something is wrong... can't find the data!</td>
                    </tr>
                }
            </tbody>
        </table>
    )
}

export default Users;