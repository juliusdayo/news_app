
import { Card,CardHeader, Container,Paper, CardContent, TextField,Button } from "@material-ui/core";
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
                       <TextField 
                       label="Headline" 
                       name="Headline" 
                       value={newsData.Headline}
                        onChange={(event)=>setNewsData({...newsData, Headline:event.target.value})}
                        />
                       <TextField 
                       label="Content" 
                       name="Content" 
                       onChange={(event)=>setNewsData({...newsData, Content:event.target.value})}/>
                       <FileBase 
                            type="file"
                            multiple={false}
                            onDone={({base64}) => setNewsData({...newsData, FeatureImage: base64})}
                       />
                       <TextField label="Posted By" defaultValue="Admin" name="PostedBy" disabled/>

                    </CardContent>
                    <Button type="submit" onClick={handleSubmit}>Submit</Button>
                </Card>
                </form>
            </Paper>
        </Container>
    )
}

export default CreateNewsForm;