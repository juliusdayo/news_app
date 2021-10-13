import { Card, CardContent, CardMedia, Typography,Box,Grid } from "@material-ui/core"

const NewsCard = ({news}) =>{

    
    const Headline = news.Headline
    const Content = news.Content
    const FeatureImage = news.FeatureImage
    
    
    return(
        <Box sx={{
            width: '90%',
            height :'40%',
            m:2}} >
        <Card >
            
            <CardContent>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h6">
                            {Headline}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container direction="row" spacing={2}>
                            <Grid item sm={6}>
                                <CardMedia image={FeatureImage} alt={Headline} component="img" width="40%"/>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography >
                                    {Content}
                                </Typography>
                        </Grid>
                    </Grid>
                </Grid>
               </Grid>
            </CardContent>
        </Card>
        </Box>
    )
}

export default NewsCard;