import { Box, Typography, Paper, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { Send } from '@mui/icons-material';

export default function PushNotifications() {
  return (
    <Box maxWidth="md">
      <Typography variant="h5" fontWeight="bold" mb={3}>Push Notifications</Typography>
      
      <Paper sx={{ p: 4 }}>
        <Typography variant="h6" gutterBottom>Create Campaign</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Title" placeholder="e.g., Don't forget your daily recitation!" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth multiline rows={4} label="Message Body" />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel>Target Audience</InputLabel>
              <Select label="Target Audience" defaultValue="all">
                <MenuItem value="all">All Users</MenuItem>
                <MenuItem value="inactive">Inactive Users (7+ days)</MenuItem>
                <MenuItem value="premium">Premium Users Only</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" endIcon={<Send />}>
              Send Notification
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}