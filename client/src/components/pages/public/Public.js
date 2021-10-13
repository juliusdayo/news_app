import { Container, Grid, LinearProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import NewsCard from "../../news/NewsCard";
import NewsFilter from "../../news/NewsFilter";



const Public = ()=>{
    const news = useSelector((state)=>state.news);

    

    
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
            
                <Grid justifyContent="center">
                    <NewsFilter/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Public;