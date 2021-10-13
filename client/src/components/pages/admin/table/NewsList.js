import { Table,TableBody,TableCell,TableHead,TableContainer,TableRow, CardMedia,Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { deleteNews } from "../../../../actions/news";

const NewsList = ({news}) =>{
    
    const dispatch =  useDispatch();
    //Converts DATE to mm/dd/yyyy
    
    

    const convertDate=(date)=>{
        return (new Date(date).toLocaleDateString())
    }

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        
                        <TableCell>Headline</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell>Feature Image</TableCell>
                        <TableCell>Date Posted</TableCell>
                        <TableCell>Posted By</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {news.map((item,key)=>(
                        <TableRow key={key}>         
                            <TableCell>{item.Headline}</TableCell>
                            <TableCell>{item.Content}</TableCell>
                            <TableCell>
                                <CardMedia component="img" image={item.FeatureImage} height="100" alt={item.Headline+"Image"}/>
                            </TableCell>
                            <TableCell>{convertDate(item.DatePosted)}</TableCell>
                            <TableCell>{item.PostedBy}</TableCell>
                            <TableCell><Button onClick={()=>dispatch(deleteNews(item._id))} >Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

    
}

export default NewsList;
