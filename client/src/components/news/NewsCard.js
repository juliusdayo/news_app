import { Card, CardContent, CardMedia, Typography,Box,Grid, Divider } from "@material-ui/core"


const NewsCard = ({news}) =>{
   
   

    const convertDate=(date)=>{
        return (new Date(date).toLocaleDateString())
    }
    
    return(
        <Box sx={{
            width: '90%',
            height :'40%',
            m:2,
            }} >
        <Card >
            
            <CardContent>
                <Grid container direction="column" spacing={1}>
                                      
                    <Grid item container direction="row" spacing={2}>
                        <Grid item sm={6}>
                             <CardMedia image={news.FeatureImage}  alt={news.Headline} component="img" width="40%"/>
                        </Grid>
                        <Grid item xs>
                        <Typography variant="h5">
                            {news.Headline}
                        </Typography>
                        
                            <Typography paragraph variant="body2"  
                            style={{overflowX:'hidden',
                                    maxHeight:300,
                                    
                            }}>
                                 {news.Content}
                            </Typography>
                       
                         </Grid>
                     </Grid>
                     
                     <Grid item container justifyContent="space-between" >
                        <Divider/>
                        <Grid item >
                            <Typography variant="overline" >
                                {convertDate(news.DatePosted)}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1">
                                {'Author: '+news.PostedBy}
                            </Typography>
                        </Grid>
                     </Grid>
                     
                </Grid>
            </CardContent>
        </Card>
        </Box>
    )
}

export default NewsCard;