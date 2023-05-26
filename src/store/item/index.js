import StoreModule from '../module';

class Item extends StoreModule {
    constructor(store, name) {
        super(store, name);
    }

    initState() {
        return {
            data: {
                description: '',
                madeIn: {
                    title: ''
                },
                category: {
                    title: ''
                },
                edition: 0,
                price: 0
            }
        }
    }

    async load(id) {
        const json = await this.fetchItem(id)

        console.log(json);
        this.setState({
            ...this.getState(),
            data: {...json.result}
        }, 'Загружены товары из АПИ');
    }

    async fetchItem(id) {
        const response = await fetch(`/api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`);
        const json = await response.json();

        return json
    }
}

export default Item;