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
        }, 'Загружен пользователь');

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
            }, 'Загружен пользователь');

        } catch (error) {
            console.log(error.toString());
            // this.setState({
            //     ...this.getState(),
            //     waiting: false,
            //     error: error.toString()
            // }, 'Загружен пользователь');
        }

    }

}

export default User;