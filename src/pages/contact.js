import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';

import { register, useForm } from "react-hook-form"; 

const drawerWidth = 240;
const navItems = ['Contact Us'];

function Contact(props) {

  const { register, setValue, getValues, handleSubmit, watch, formState: { errors } } = useForm();

  const [initialValues, setInitialValues] = useState({
    email: '',
    password: '',
    color: '',
    showBear: false,
    bear: '',
    showTiger: false,
    tiger: '',
    showSnake: false,
    snake: '',
    showDonkey: false,
    donkey: '',
  })

  const {
    email,
    password,
    color,
    showBear,
    bear,
    showTiger,
    tiger,
    showSnake,
    snake,
    showDonkey,
    donkey
  } = initialValues

  const handleChange = (name) => (e) => {
    if(name === 'showBear') {
        setInitialValues({...initialValues, [name]: e.target.checked})
        setValue(name, e.target.checked)
    } else if(name === 'showSnake') {
        setInitialValues({...initialValues, [name]: e.target.checked})
        setValue(name, e.target.checked)
    } else if(name === 'showTiger') {
        setInitialValues({...initialValues, [name]: e.target.checked})
        setValue(name, e.target.checked)
    }else if(name === 'showDonkey') {
        setInitialValues({...initialValues, [name]: e.target.checked})
        setValue(name, e.target.checked)
    } else {
        setInitialValues({...initialValues, [name]: e.target.value})
        setValue(name, e.target.value)
    }
    
    console.log(name, e.target.value)
  }

  useEffect(() => {
    setValue('email', email)
    setValue('password', password)
    setValue('color', color)
    setValue('showBear', showBear)
    setValue('bear', bear)
    setValue('showTiger', showTiger)
    setValue('tiger', tiger)
    setValue('showSnake', showSnake)
    setValue('snake', snake)
    setValue('showDonkey', showDonkey)
    setValue('donkey', donkey)
  })

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Contact Page
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const onSubmit = () => {
    console.log(getValues())
  }

  const showBearField = (d) => {
    if(d===true) {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Bear"
                    type="text"
                    {...register("bear", { required: true })}
                    onChange={handleChange('bear')}
                />
                {errors.bear && <span style={{color: 'red'}}>Bear field is required</span>}
                <br/>
            </>
        )
    } else {
        setValue('bear', '')
        return
    }
  }
  const showTigerField = (d) => {
    if(d===true) {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Tiger"
                    type="text"
                    {...register("tiger", { required: true })}
                    onChange={handleChange('tiger')}
                />
                {errors.tiger && <span style={{color: 'red'}}>Tiger field is required</span>}
                <br/>
            </>
        )
       
        
    } else {
        setValue('tiger', '')
        return
    }
  }
  const showSnakeField = (d) => {
    if(d===true) {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Snake"
                    type="text"
                    {...register("snake", { required: true })}
                    onChange={handleChange('snake')}
                />
                {errors.snake && <span style={{color: 'red'}}>Snake field is required</span>}
                <br/>
            </>
        )
    } else {
        setValue('snake', '')
        return
    }
  }
  const showDonkeyField = (d) => {
    if(d===true) {
        return (
            <>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    label="Donkey"
                    type="text"
                    {...register("donkey", { required: true })}
                    onChange={handleChange('donkey')}
                />
                {errors.donkey && <span style={{color: 'red'}}>Donkey field is required</span>}
                <br/>
            </>
        )
        
    } else {
        setValue('donkey', '')
        return
    }
  }

  return (
    <>
        <CssBaseline />
        <AppBar component="nav">
            <Toolbar>
                <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
                >
                <MenuIcon />
                </IconButton>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                Seen Safety 
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                    <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                    </Button>
                ))}
                </Box>
            </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
        <main>
            <Box 
                sx={{ 
                    pt: 8,
                    pb: 6
                }}
            >
            
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                        mt={5}
                    >
                        Contact Us
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            {...register("email", { required: true })}
                            onChange={handleChange('email')}
                        />
                        {errors.email && <span style={{color: 'red'}}>Email address is required</span>}
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                            onChange={handleChange('password')}
                        />
                        {errors.password && <span style={{color: 'red'}}>Password is required</span>}
                        <br/>
                        <FormControl>
                            <FormLabel 
                                id="demo-radio-buttons-group-label"
                                required>
                                    Color
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                {...register("color", { required: true })}
                                onChange={handleChange('color')}
                            >
                                <FormControlLabel value="Blue" control={<Radio />} label="Blue" />
                                <FormControlLabel value="Green" control={<Radio />} label="Green" />
                                <FormControlLabel value="Red" control={<Radio />} label="Red" />
                                <FormControlLabel value="Black" control={<Radio />} label="Black" />
                                <FormControlLabel value="Brown" control={<Radio />} label="Brown" />
                            </RadioGroup>
                        </FormControl>
                        <br/>
                        {errors.color && <span style={{color: 'red'}}>Color field is required</span>}
                        <br/>
                        <FormLabel id="demo-radio-buttons-group-label">
                            Animals
                        </FormLabel><br/>
                        <FormControlLabel value="Bear" control={<Checkbox />} label="Bear" onChange={handleChange('showBear')}/>
                        { showBearField(showBear) }
                        <FormControlLabel value="Tiger" control={<Checkbox />} label="Tiger" onChange={handleChange('showTiger')}/>
                        { showTigerField(showTiger) }
                        <FormControlLabel value="Snake" control={<Checkbox />} label="Snake" onChange={handleChange('showSnake')}/>
                        { showSnakeField(showSnake) }
                        <FormControlLabel value="Donkey" control={<Checkbox />} label="Donkey" onChange={handleChange('showDonkey')}/>
                        { showDonkeyField(showDonkey) }

                        <br/>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        
                    </Box>
                </Container>
            </Box>

        </main>
        
    </>
    
  );
}

Contact.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Contact;