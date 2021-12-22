import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AlignItemsList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
      <ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                TSLA
              </Typography>
              {" —  9x26.4   Current:2000"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider style={{width:"80%",margin:"auto"}} />
    </List>
  );
}