import useFetch from "../customs/fetch";

const User = () => {   
    const {data: userData, isLoading, isError} = useFetch('https://jsonplaceholder.typicode.com/users');
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

export default User;