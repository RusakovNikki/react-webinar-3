import React, {useState} from 'react'
import {cn as bem} from '@bem-react/classname';
import './style.css'

const FormEnter = ({onClickLogin, error}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const cn = bem('FormEnter');

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
            <input className={cn('input')} type='text' value={login} onChange={onChangeLogin} id='login' />
            <label htmlFor='pass'>Пароль</label>
            <input className={cn('input')} type='password' value={password} onChange={onChangePassword} id='pass' />
            {error && <p className={cn('error')}>{error}</p>}
            <button className={cn('btn')} onClick={onSubmitForm}>Войти</button>
        </form>
    )
}

export default FormEnter
