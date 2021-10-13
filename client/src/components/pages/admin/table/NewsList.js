import { Table,TableBody,TableCell,TableHead,TableContainer,TableRow, CardMedia } from "@material-ui/core";
import { useSelector } from "react-redux";

const NewsList = ({news}) =>{
    console.log(news)
    let List =news.map((item,key)=>(
        <TableRow>
            <TableCell>{key+1}</TableCell>
            <TableCell>{item.Headline}</TableCell>
            <TableCell>{item.Content}</TableCell>
            <TableCell><CardMedia component="img" image={item.FeatureImage}/></TableCell>
        </TableRow>
    ))

    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Row ID</TableCell>
                        <TableCell>Headline</TableCell>
                        <TableCell>Content</TableCell>
                        <TableCell>Feature Image</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {List}
                </TableBody>
            </Table>
        </TableContainer>
    )

    
}

export default NewsList;
