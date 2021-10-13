import * as api from '../api';





export const getNews = () => async(dispatch)=>{

    try {
        const {data} = await api.getNews();
        
        dispatch({type:'FETCH_ALL', payload:data});
        
    } catch (error) {
        
        console.log(error)
    }
   

}
export const getNewsToday = () => async (dispatch)=>{

    try{
        const {data} = await api.getNewsToday();
        dispatch({type:'FETCH_TODAY',payload:data})
    }catch(error){
        console.log(error)
    }
}


export const createNews = (news) => async(dispatch)=>{
    try {
        const {data} = await api.createNews(news);
        dispatch({type:'CREATE', payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteNews = (id) => async(dispatch)=>{
    try {
        await api.deleteNews(id);
        dispatch({type:'DELETE', payload:id})
    } catch (error) {
        console.log(id)
        console.log(error)
    }
}