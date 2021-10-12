import RichTextEditor from "./RichTextEditor";
import { Card,CardHeader, Container,FormControl, FormLabel,InputLabel,Paper,Input, CardContent } from "@material-ui/core";

const CreateNewsForm =()=>{


    return(
        <Container>
            <Paper>
                <Card>
                    <CardHeader title="Publish News"/>
                    <CardContent>
                        <FormControl>
                            <InputLabel>Headline</InputLabel>
                            <Input  sx={{ width: 1/2 }}/>
                            <RichTextEditor/>
                        </FormControl>
                    </CardContent>
                </Card>
            </Paper>
        </Container>
    )
}

export default CreateNewsForm;