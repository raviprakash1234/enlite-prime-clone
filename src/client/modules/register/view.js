import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system"
import style from "./style";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import Autocomplete from "@mui/material/Autocomplete";



const RegisterView = ()=>{

  


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const Lanuages = [
        { label: "English" },
        { label: "Hindi" },
        { label: "Telugu" },
        { label: "Kannada" },
      ];
      
    const navigate = useNavigate();
    const handleNavigationHome = ()=>{
        navigate("/home")
    }
    const handleNavigationRegister = ()=>{
        navigate("/register")
    }

    return (
        <Box  sx={{display : "flex"}}>

            <Box  sx={style.leftBox}>
              
               
                <Typography variant="h5" sx={{color : "#ffffff",margin : 5}}>Enlite Prime</Typography>

                <Typography variant="h3" sx={{marginLeft : 5,marginTop : 30,width:400}}>Hello, nice to meet you</Typography>
               
                <Typography  sx={{marginLeft : 5,marginTop : 3,fontSize:"20px",}}>Just register to join with us</Typography>
                <Box sx={{display:"flex"}}>
                <Box  sx={{display : "flex",margin : 5,color:"#f3afc6",width:200,}} onClick = {handleNavigationHome}>

                  <ArrowBackIcon/>
                  <Typography>back to site</Typography>

              
                </Box>
                <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={Lanuages}
            size="small"
            sx={{ width: 120,mt:4.5,ml:10,fontSize:"9px","& .MuiAutocomplete-inputRoot":{
                backgroundColor:"#de465f",
                 color:"white" },
             }}
            defaultValue="English"
            disableClearable="true"
            renderInput={(params) => <TextField {...params} />}
          />
          </Box>
            </Box>

              

            <Box sx={style.rightBox}> 
              <Box sx= {{display: "flex",flexDirection : "row",borderBottom:"1px solid black",width : 550,margin :10,marginLeft : 40,padding:1}}>
                 <Typography variant="h3" sx={{color:"#eb4b64"}}> Register</Typography>
                 <Box  sx={{display : "flex",marginLeft : 25,mt:1}} onClick = {handleNavigationRegister}>
                  <ArrowForwardIcon/>
                  <Typography>Already have account?</Typography>
                  
                </Box>
              

                 </Box>
               <Box sx={{display:"flex",flexDirection : "column",ml:20,gap:5}}>
                  <Box   sx={{width: 850,maxWidth: '100%',  }}>
                     <TextField fullWidth label="Username*" id="fullWidth" sx={{	 "& .MuiOutlinedInput-root": { backgroundColor: "white", },}} />
                     </Box> 
                     <Box   sx={{width: 850,maxWidth: '100%', }}>
                     <TextField fullWidth label="Your Email*" id="fullWidth"  sx={{	 "& .MuiOutlinedInput-root": { backgroundColor: "white", },}} />
                     </Box>  
                     <Box sx={{display :"flex",mb:2}}>
                     <Box   sx={{width: 400,maxWidth: '100%',mr:5  }}>
                     <TextField fullWidth label="Your Password*" id="fullWidth" sx={{	 "& .MuiOutlinedInput-root": { backgroundColor: "white", },}} />
                     </Box> 
                     <Box   sx={{width: 400,maxWidth: '100%',  }}>
                     <TextField fullWidth label="Re-type Password*" id="fullWidth" sx={{	 "& .MuiOutlinedInput-root": { backgroundColor: "white", },}} />
                     </Box> 

                     </Box>
               </Box>

               <Box sx={{display :"flex"}}>
               <Checkbox {...label} defaultChecked  sx={{ml:20}} />
                     <Typography sx={{mr:2,mt:1}}>Agree with</Typography>
                     <Typography sx={{mt:1.2,color :"#de465f",fontSize:"14px"}}>Terms and Condition</Typography>

               </Box>
               <Box sx={{ml :22,mb:5,mt:5}}>
                    <Button  style={{width : 800,backgroundColor : "#eb4b64",color :"#ffffff",height  : 45}}>continue <ArrowForwardIcon/> </Button>
               </Box>

               <Box  sx={{width:800,ml:22,mb:5}} >
               <Divider >Or register with</Divider>   
               </Box>
               <Box sx={ { ml:22,height : 90 ,width : 800,backgroundColor : "#f2f2f2",borderRadius : "30px",paddingLeft:25,paddingTop:3,}}>
                    <Button style={{width : 130,height : 45,backgroundColor : "#f24636",marginRight:10,fontSize:"15px",color : "white"}}>
                        <GoogleIcon fontSize="small"sx={{mr:0.5}}/> 
                    GOOGLE</Button>
                    <Button style={{width : 130,height : 45,backgroundColor : "#3dbdd4",marginRight:10,fontSize:"15px",color : "white"}}>
                        <TwitterIcon  fontSize="small"sx={{mr:0.5}}/>
                        TWITTER</Button>
                    <Button style={{width : 130,height : 45,backgroundColor : "#90a4ae",fontSize:"15px",color : "white"}}>
                    <GitHubIcon  fontSize="small"sx={{mr:0.5}}/>
                        GITHUB</Button>
               </Box>
            </Box>
           
        </Box>
    )
}



export default RegisterView;