import React, {useState} from "react";
import './NamePage.css';
import {value} from "firebase-tools/lib/deploymentTool";

const NamePage = (props) => {
	const [userName, setUserName] = useState('');
	const [gender, setGender] = useState('male');
	const [date, setDate] = useState('');
	const [user, setUser] = useState({
		userName: userName,
		userGender: gender,
		userBirthday: date
	})

	const handleChange = (event) => {
		setUserName(event.target.value);
	}
	const handleChooseGender = (event) => {
		setGender(event.target.value);
	}
	const handleChooseBirthday = (event) => {
		setDate(event.target.value);
	}

	const handleSubmit  = () => {
		let user = {
			userName: userName,
			userGender: gender,
			userBirthday: date
		}
		console.log(user);
	}
// 	state = {
// 		name: 'Бумеранг вернулся назад'
// 	}
//
// 	render() {
// 		return (
// 			<div>
// 				<button onClick={() => { this.props.updateData(this.state.name)}}>Запустить бумеранг</button>
// 			</div>
// 		)
// 	}
// }


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
						   checked={gender === 'male' ? true : false}
						   onChange={handleChooseGender}/>

					<input type='radio'
						   name='radio'
						   value='female'
						   checked={gender === 'female' ? true : false}
						   onChange={handleChooseGender}/>
					<p>{gender}</p>
					<input type='date'
						   name='date'
						   value={date}
						   onChange={handleChooseBirthday}/>
				</div>
				<button onClick={() => {props.updateData(userName, gender, date)}}>SAVE</button>
				<button onClick={handleSubmit} className='w-90 accept-button'>NEXT</button>
			</div>
		</div>
	)
}
export default NamePage;

