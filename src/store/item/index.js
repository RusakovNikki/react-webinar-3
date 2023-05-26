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
        const response = await fetch(`/api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`);
        const json = await response.json();

        console.log(json);
        this.setState({
            ...this.getState(),
            data: {...json.result}
        }, 'Загружены товары из АПИ');
    }
}

export default Item;