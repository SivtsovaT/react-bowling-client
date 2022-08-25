import React, {useState} from 'react';
import './App.css';
import GenderPage from "./components/gender-page/GenderPage";
import NamePage from "./components/name-page/NamePage";

const App = () => {
    const [user, setUser] = useState({
        userName: '',
        userGender: '',
        userBirthday: ''
    })
    const updateData = (v1, v2, v3) => {
        setUser({
            userName: v1,
            userGender: v2,
            userBirthday: v3

        })
    }
    return (
        <div>
           <NamePage updateData={updateData}/>
            {/*<GenderPage/>*/}
        </div>
    )
}

export default App;


// state = {
//     name: 'Бумеранг не запущен'
// };
//
// updateData = (value) => {
//     this.setState({ name: value })
// }
//
// render() {
//     return (
//         <div>
//             <p>State: {this.state.name}</p>
//             <ChildComponent updateData={this.updateData} />
//         </div>
//     )
// }
// }