import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import Autocomplete from '@material-ui/lab/Autocomplete';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import SaveIcon from '@material-ui/icons/Save';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
      minWidth: 275,
    },
  },
  divColo: {
    backgroundColor:'#e0e0e0',
    width:1250,
    marginLeft:300
  },
  cardColo: {
    backgroundColor:'#e0e0e0',
    width:1000,
    marginLeft:10
  },
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '55ch',
  },
  savebutton: {
    margin: theme.spacing(1),
    backgroundColor:'#4caf50',
  },
  resetbutton: {
    margin: theme.spacing(1),
    backgroundColor:'#01579b',
  },
  

}));

const language = [
  { title: 'Select Role'},
  { title: 'Admin'},
  { title: 'User'},
]

export default function AddNewUser() {
  const classes = useStyles();

  const [value, setValue] = React.useState(language[0]);
  const [inputValue, setInputValue] = React.useState('');

   const [values, setValues] = React.useState({
    password: '',
  });

   const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}/>
        <Grid item xs={6}>
          <div className={classes.divColo}>
             <Card style={{margin:30}}>
                   <CardActions>
                    <CardContent>
                      <FontAwesomeIcon icon={faEdit}/>Add New User
                      <br/>
                      <br/>
                      <br/>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Username"
                            label="Username"
                            helperText="Enter Username"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Email"
                            label="Email"
                            helperText="Enter Email Address"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                       <Autocomplete
                       className={clsx( classes.textField)}
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(event, newInputValue) => {
                          setInputValue(newInputValue);
                        }}
                        id="combo-box-demo"
                        options={language}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Role" 
                        helperText="Please select your Role"
                        variant="outlined" />}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                          <OutlinedInput
                            required
                            id="outlined-adornment-password"
                            type={'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            labelWidth={70}
                            helperText="Please select your Role"
                          />
                        </FormControl>
                      </Grid>
                    </Grid>

                    <CardActions>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          startIcon={<SaveIcon />}>
                            <span>Save</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          startIcon={<RotateLeftOutlinedIcon />}>
                            <span>Reset</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          startIcon={<ListAltOutlinedIcon />}>
                            <span>Food items Lists</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                    </CardActions>
                    </CardContent>
                    
                  </CardActions>
                </Card>
          </div>
        </Grid>
        <Grid item xs={3}/>
      </Grid>
    </div>
  );
}