import { Box, Typography, Paper, Avatar, Grid, TextField, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { type RootState } from '../../../store';

export default function Profile() {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <Box maxWidth="md">
      <Typography variant="h5" fontWeight="bold" mb={3}>My Profile</Typography>

      <Paper sx={{ p: 4, mb: 4, display: 'flex', alignItems: 'center', gap: 3 }}>
         <Avatar sx={{ width: 80, height: 80, bgcolor: 'primary.main', fontSize: 32 }}>
            {user?.firstName?.charAt(0) || 'A'}
         </Avatar>
         <Box>
            <Typography variant="h5" fontWeight="bold">{user?.firstName} {user?.lastName}</Typography>
            <Typography color="text.secondary">{user?.email}</Typography>
            <Typography variant="caption" sx={{ bgcolor: 'grey.200', px: 1, borderRadius: 1 }}>{user?.role}</Typography>
         </Box>
      </Paper>

      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom mb={3}>Edit Details</Typography>
        <Grid container spacing={3}>
           <Grid item xs={12} md={6}>
             <TextField fullWidth label="First Name" defaultValue={user?.firstName} />
           </Grid>
           <Grid item xs={12} md={6}>
             <TextField fullWidth label="Last Name" defaultValue={user?.lastName} />
           </Grid>
           <Grid item xs={12}>
             <TextField fullWidth label="Email" defaultValue={user?.email} disabled />
           </Grid>
           <Grid item xs={12}>
             <Button variant="contained">Save Changes</Button>
           </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}