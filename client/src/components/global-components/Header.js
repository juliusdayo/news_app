import {Container,Grid,Link,AppBar,Box,Toolbar,Typography,IconButton} from '@material-ui/core';
import '@fortawesome/fontawesome-svg-core';
const Header = () =>{
    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
           
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Container>
            <Grid container justifyContent="flex-end" spacing={3}>
              <Grid item>
                <Link href="/" color="secondary">Public</Link>
              </Grid>
              <Grid item>
                <Link href="/admin" color="secondary">Admin</Link>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default Header;