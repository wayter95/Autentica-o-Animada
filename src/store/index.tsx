import {createStore} from 'redux';

export interface Containers  {
    
        id:number,
        title: string
}
function reducer () {
    return [
        {
            id:1,
            title: "Dashboard"
        },
        {
            id:2,
            title: "Vendas"
        },
        {
            id:3,
            title: "Categorias"
        },
        {
            id:4,
            title: "Produtos"
        },
        {
            id:5,
            title: "Relatorios"
        },
    ]
}

export const setVisibleFilter = (filter:any) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
const store = createStore(reducer);

export default store;