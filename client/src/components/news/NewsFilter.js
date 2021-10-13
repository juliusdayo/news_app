import { Paper,Box, CardHeader, CardContent,Button } from "@material-ui/core";
import { getNewsToday } from "../../api";

const NewsFilter = ({setFilter}) =>{

    return(
        <Box 
        sx={{
            m:4,
            width:'100%' 
        }}>
            <Paper >
                <CardHeader title="Filter"/>
                <CardContent>
                    <Button onClick={()=> setFilter({type: 'today'})}>News Today</Button>
                    <Button onClick={()=> setFilter({type: 'all'})}>All News</Button>
                </CardContent>
            </Paper>
        </Box>
    )
}

export default NewsFilter;