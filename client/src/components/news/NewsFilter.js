import { Paper,Box, CardHeader, CardContent } from "@material-ui/core";

const NewsFilter = () =>{

    return(
        <Box 
        sx={{
            m:4,
            width:'100%' 
        }}>
            <Paper >
                <CardHeader title="Filter"/>
                <CardContent>
                    
                </CardContent>
            </Paper>
        </Box>
    )
}

export default NewsFilter;