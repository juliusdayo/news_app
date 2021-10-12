import { Container, Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

import NewsCard from "../../news/NewsCard";
import NewsFilter from "../../news/NewsFilter";



const Public = ()=>{
    const news = useSelector((state)=>state.news);

    console.log(news)
    return(
        <Container>
            <Grid container spacing={4} wrap="wrap-reverse">
                <Grid item sm={8}>
                    <NewsCard/>
                </Grid>
                <Grid>
                    <NewsFilter/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Public;