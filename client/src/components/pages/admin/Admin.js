import { Container,Grid} from '@material-ui/core';

import { useSelector } from 'react-redux';
import CreateNewsForm from './form/CreateNewsForm';
import NewsList from './table/NewsList';


const Admin = () =>{

    const news = useSelector((state)=>state.news);
    
    return(
        <Container>
                <Grid container direction="column" spacing={5}>
                    <Grid item>
                        <CreateNewsForm/>     
                    </Grid>
                    <Grid>
                        <NewsList news={news}/>
                    </Grid>
                </Grid>
        </Container>
    )
} 

export default Admin;