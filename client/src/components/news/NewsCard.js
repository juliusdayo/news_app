import { Card, CardContent, CardMedia, Typography,Box } from "@material-ui/core"

const NewsCard = ({news}) =>{

    const id = news._id
    const Headline = news.Headline
    const Content = news.Content
    const FeatureImage = news.FeatureImage
    return(
        <Box sx={{
            width: 300,
            height: 300,}}>
        <Card sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            
            <CardContent>
                <Typography>
                    {Headline}
                </Typography>
                <CardMedia image={FeatureImage} alt={Headline} component="img"/>
                <Typography>
                    {Content}
                </Typography>
               
                
            </CardContent>
        </Card>
        </Box>
    )
}

export default NewsCard;