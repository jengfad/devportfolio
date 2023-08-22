import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function PortfolioBlock(props) {
   const {image, live, source, title, description} = props;
   return (
      <Card sx={{ maxWidth: 820, padding: 2 }}>
         <CardMedia
            sx={{ height: 550 }}
            image={image}
            title={title}
         />
         <CardContent>
         <Typography gutterBottom variant="h5" component="div">{title}</Typography>
         <Typography variant="body2" color="text.secondary">
            {description}
         </Typography>
         </CardContent>
         <CardActions sx={{paddingBottom: 3}}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </CardActions>
      </Card>
   );
}

export default PortfolioBlock;