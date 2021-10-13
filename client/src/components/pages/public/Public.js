import { Container, Grid, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import NewsCard from "../../news/NewsCard";
import NewsFilter from "../../news/NewsFilter";



const Public = ()=>{
    const news = useSelector((state)=>state.news);

    const dateTom = new Date().setDate(new Date().getDate() +1);
        console.log(new Date())
        console.log(new Date(dateTom).toDateString())
    
    return(
        
        <Container>                  
            <Grid container spacing={4} wrap="wrap-reverse">          
                <Grid item sm={8} > 
                {!news.length ? <LinearProgress/> :(                   
                    <Grid container spacing={4} justifyContent="center">
                       {news.map((news, key) =>
                            <Grid item key={news._id}>
                                <NewsCard news={news}/>
                            </Grid>
                        )}
                    </Grid>
                    )}
                </Grid>
            
                <Grid justifyContent="center" xs={3}>
                    <NewsFilter/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Public;