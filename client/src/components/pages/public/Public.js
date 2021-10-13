import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import NewsCard from "../../news/NewsCard";
import NewsFilter from "../../news/NewsFilter";



const Public = ()=>{
    const news = useSelector((state)=>state.news);

    

    const NewsContent = news.map((news, key) =>
        <Grid item key={news._id}>
            <NewsCard news={news}/>
        </Grid>
    )
    console.log(news)
    return(
        <Container>
            <Grid container spacing={4} wrap="wrap-reverse">
                <Grid item sm={8}>
                    <Grid container spacing={4}>
                       {NewsContent}
                    </Grid>
                </Grid>
                <Grid>
                    <NewsFilter/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Public;