import * as api from '../api/index';

export const getServices = () => async (dispatch)=>{

    try {
        const {data} = await api.fetchServices();

        dispatch({type: 'FETCH_ALL', payload:data });
    }catch(error){
        console.log(error)
    }


}
export const createServices = (services) => async (dispatch)=>{

    try {
        const {data} = await api.createServices(services);

        dispatch({type: 'CREATE', payload: data });
    }catch(error){
        console.log(error)
    }


}
// export const addFav = () => async (dispatch)=>{

//     try {
//         const addfav = await api.createServices(services);

//         dispatch({type: 'CREATE', payload: data });
//     }catch(error){
//         console.log(error)
//     }
