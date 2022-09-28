import * as api from '../api/index';

export const getfavs = () => async (dispatch)=>{

    try {
        const {data} = await api.fetchfavs();

        dispatch({type: 'GET', payload:data });
    }catch(error){
        console.log(error)
    }


}
export const createfavs = (favs) => async (dispatch)=>{

    try {
        const {data} = await api.createfavs(favs);

        dispatch({type: 'CREATE', payload: data });
    }catch(error){
        console.log(error)
    }


}
// export const addFav = () => async (dispatch)=>{

//     try {
//         const addfav = await api.createfavs(favs);

//         dispatch({type: 'CREATE', payload: data });
//     }catch(error){
//         console.log(error)
//     }
