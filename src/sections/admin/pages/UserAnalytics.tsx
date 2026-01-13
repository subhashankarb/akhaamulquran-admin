import { Box, Typography, Grid, Paper } from '@mui/material';

export default function UserAnalytics() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>User Analytics</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', border: '2px dashed #ccc' }}>
            <Typography color="text.secondary">[Growth Chart Placeholder]</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', border: '2px dashed #ccc' }}>
             <Typography color="text.secondary">[Demographics Pie Chart]</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}