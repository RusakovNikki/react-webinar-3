import React, {useState} from 'react'
import './style.css'

const FormEnter = ({onClickLogin}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function onChangeLogin(e) {
        setLogin(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmitForm(e) {
        e.preventDefault();
        onClickLogin({
            login,
            password
        });
    }

    return (
        <form className='FormEnter'>
            <h2>Вход</h2>
            <label htmlFor='login'>Логин</label>
            <input type='text' value={login} onChange={onChangeLogin} id='login' required />
            <label htmlFor='pass'>Пароль</label>
            <input type='password' value={password} onChange={onChangePassword} id='pass' required />
            <button className='FormEnter-btn' onClick={onSubmitForm}>Войти</button>
        </form>
    )
}

export default FormEnter
