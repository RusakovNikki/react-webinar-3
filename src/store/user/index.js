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

            const json = await result.json()

            this.setState({
                ...this.getState(),
                data: json.result.user,
                token: json.result.token,
                waiting: false
            }, 'Пользователь загружен');

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

            const json = await result.json()
            if (json?.result === true) {
                this.setState({
                    ...this.getState(),
                    ...this.initState()
                }, 'Пользователь вышел');
            }
        } catch (error) {

        }
        // this.setState({
        //     ...this.getState(),
        //     ...this.initState()
        // }, 'Загружен пользователь');
    }

}

export default User;