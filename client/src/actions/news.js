import * as api from '../api';





export const getNews = () => async(dispatch)=>{

    try {
        const {data} = await api.getNews();
        
        dispatch({type:'FETCH_ALL', payload:data});
        
    } catch (error) {
        
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