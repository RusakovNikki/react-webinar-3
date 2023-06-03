import StoreModule from '../module';

class User extends StoreModule {
    initState() {
        return {
            data: {},
            token: '',
            waiting: false,
            error: ''
        }
    }

    async login(data) {

        this.setState({
            ...this.getState(),
            waiting: true
        }, 'Загрузка пользователя');

        try {
            const result = await fetch('/api/v1/users/sign', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if (result.ok) {
                const json = await result.json();

                this.setState({
                    ...this.getState(),
                    data: json.result.user,
                    token: json.result.token,
                    error: '',
                    waiting: false
                }, 'Пользователь загружен');

                localStorage.setItem('token', json.result.token);
            } else {
                throw new Error(`Ошибка HTTP: ${result.status}, ${result.statusText}`);
            }

        } catch (error) {
            this.setState({
                ...this.getState(),
                waiting: false,
                error: error.toString()
            }, 'Ошибка');
        }

    }

    async setUserData() {
        const token = localStorage.getItem('token');

        try {
            const result = await fetch('/api/v1/users/self', {
                method: 'GET',
                headers: {
                    "X-Token": token,
                    "Content-Type": "application/json"
                }
            })
            if (result.ok) {
                const json = await result.json()

                this.setState({
                    ...this.getState(),
                    data: json.result,
                    token,
                    error: '',
                    waiting: false
                }, 'Пользователь загружен');
            } else {
                throw new Error(`Ошибка HTTP: ${result.status}, ${result.statusText}`)
            }
        } catch (error) {
            this.setState({
                ...this.getState(),
                waiting: false,
                error: error.toString()
            }, 'Ошибка');
        }

    }

    async logout() {
        this.setState({
            ...this.getState(),
            waiting: true
        }, 'Загружен пользователь');

        try {
            const token = this.getState().token;

            const result = await fetch('/api/v1/users/sign', {
                method: "DELETE",
                headers: {
                    "X-Token": token,
                    "Content-Type": "application/json"
                }
            })

            if (result.ok) {

                this.setState({
                    ...this.getState(),
                    ...this.initState()
                }, 'Пользователь вышел');

                localStorage.removeItem('token')
            } else {
                throw new Error(`Ошибка HTTP: ${result.status}, ${result.statusText}`)
            }


        } catch (error) {
            this.setState({
                ...this.getState(),
                waiting: false,
                error: error.toString()
            }, 'Ошибка');
        }

    }

}

export default User;