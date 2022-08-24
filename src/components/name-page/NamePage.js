import React, {useState} from "react";
import './NamePage.css';

const NamePage = () => {
	const [userName, setUserName] = useState('');
	const handleChange = (event) => {
		setUserName(event.target.value);
	}
	const handleSubmit  = () => {
		let users = {
			userName: userName,
		}
		console.log(users);
	}
	return (
		<div className='container'>
			<div className='header'>
				<a href='#'></a>
			</div>
			<div className='content'>
				<h2>What is your name?</h2>
				<input
					className='w-90'
					type='text'
					placeholder='enter name'
					value={userName}
				    onChange={handleChange}
				/>
				<button onClick={handleSubmit} className='w-90 accept-button'>NEXT</button>
			</div>
		</div>
	)
}
export default NamePage;

