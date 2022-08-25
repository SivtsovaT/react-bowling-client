import React, {useState} from "react";
import './NamePage.css';

const NamePage = () => {
	const [userName, setUserName] = useState('');
	const [value, setValue] = useState('male');
	const [date, setDate] = useState('');

	const handleChange = (event) => {
		setUserName(event.target.value);
	}
	const handleChooseGender = (event) => {
		setValue(event.target.value);
	}
	const handleChooseBirthday = (event) => {
		setDate(event.target.value);
	}

	const handleSubmit  = () => {
		let user = {
			userName: userName,
			userGender: value,
			userBirthday: date
		}
		console.log(user);
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
				<div>
					<input type='radio'
						   name='radio'
						   value='male'
						   checked={value === 'male' ? true : false}
						   onChange={handleChooseGender}/>

					<input type='radio'
						   name='radio'
						   value='female'
						   checked={value === 'female' ? true : false}
						   onChange={handleChooseGender}/>
					<p>{value}</p>
					<input type='date'
						   name='date'
						   value={date}
						   onChange={handleChooseBirthday}/>
				</div>


				<button onClick={handleSubmit} className='w-90 accept-button'>NEXT</button>
			</div>
		</div>
	)
}
export default NamePage;

