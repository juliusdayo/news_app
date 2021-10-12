import { Card, CardContent, CardMedia, Typography } from "@material-ui/core"

const NewsCard = () =>{

    return(
        <Card sx={{display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
            
            <CardContent>
                <Typography>
                    Headline
                </Typography>
                <Typography>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
            </CardContent>
        </Card>
    )
}

export default NewsCard;