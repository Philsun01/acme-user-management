import React, {useEffect, useState} from 'react';
import axios from 'axios';

const API = 'https://acme-users-api-rev.herokuapp.com/api/users';

function Users(){

	const [users, setUsers] = useState([]);
	const [count, setCount] = useState(0);
	const fetchUser = async() => {
		const userAPI = `${API}${ count ? `/${count}` : ''}`;
		console.log(userAPI);
		return axios.get(userAPI).then(res => res.data)
		}

	useEffect(()=>{

		fetchUser().then( res => { 
			console.log(res.users);
			setUsers(res.users) 
			})

		
		
	},[])

	return (<ul>
		hiiiii
		</ul>)
}

export default Users;