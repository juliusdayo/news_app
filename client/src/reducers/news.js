const news = (news = [], action)=>{
    switch(action.type){
        case 'UPDATE':
            return news.map((n)=> n._id === action.payload._id ? action.payload: n);
        case "FETCH_ALL":
            return action.payload;
        case "FETCH_TODAY":
            return action.payload;
        case 'CREATE':
            return [...news,action.payload];
        
        case 'DELETE':
            return news.filter((news) => news._id !== action.payload);
        default:
            return news;
    }
}
export default news;