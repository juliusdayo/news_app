
import { Card,CardHeader, Container,Paper, CardContent, TextField,Button,Grid, CardMedia,Box } from "@material-ui/core";
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import { useState } from "react";
import { createNews } from "../../../../actions/news";
import { useEffect } from "react";

const CreateNewsForm =()=>{
    const [newsData, setNewsData] = useState({ Headline: '', Content:'',FeatureImage:'',StartDate:new Date(),DatePosted:new Date(),PostedBy:'Admin'})
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(newsData)
    },[newsData]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createNews(newsData))
    }
    

    return(
        <Container>
            <Paper>
                <form>
                <Card>
                    <CardHeader title="Publish News"/>
                    <CardContent>
                        <Grid container direction="column" spacing={4}>
                            <Grid item lg={12}>
                                <TextField 
                                label="Headline" 
                                name="Headline" 
                                value={newsData.Headline}
                                    onChange={(event)=>setNewsData({...newsData, Headline:event.target.value})}
                                    />
                            </Grid>
                            <Grid item>
                                <TextField 
                                label="Content" 
                                name="Content" 
                                onChange={(event)=>setNewsData({...newsData, Content:event.target.value})}/>
                            </Grid>
                            <Grid item container direction="column">
                                <Box sx={{width: 400,height: 200,}}>
                                    <CardMedia component="img" image={newsData.FeatureImage} height="200"/>
                                </Box>
                                <FileBase 
                                        type="file"
                                        multiple={false}
                                        onDone={({base64}) => setNewsData({...newsData, FeatureImage: base64})}/>
                            </Grid>
                            <Grid item>
                                <TextField label="Posted By" defaultValue="Admin" name="PostedBy" disabled/>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </Card>
                </form>
            </Paper>
        </Container>
    )
}

export default CreateNewsForm;