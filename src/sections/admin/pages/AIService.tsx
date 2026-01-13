import { Box, Typography, Grid, Card, CardContent, Switch, FormControlLabel, LinearProgress } from '@mui/material';

export default function AIService() {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>AI Service Control</Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Model Status</Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography>Speech Recognition Engine</Typography>
                <Chip status="Online" color="success" />
              </Box>
              <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                <Typography>Tajweed Correction Module</Typography>
                <Chip status="Processing" color="warning" />
              </Box>
              
              <Typography variant="caption" color="text.secondary" display="block" mt={4} mb={1}>Current Server Load</Typography>
              <LinearProgress variant="determinate" value={65} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Configuration</Typography>
              <Box display="flex" flexDirection="column" gap={2}>
                <FormControlLabel control={<Switch defaultChecked />} label="Enable Real-time Correction" />
                <FormControlLabel control={<Switch defaultChecked />} label="Allow Offline Mode Sync" />
                <FormControlLabel control={<Switch />} label="Debug Mode (Log Audio)" />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

// Simple internal helper component
function Chip({ status, color }: { status: string, color: string }) {
  return (
    <span style={{ 
      padding: '4px 12px', 
      borderRadius: '16px', 
      backgroundColor: color === 'success' ? '#e8f5e9' : '#fff3e0', 
      color: color === 'success' ? '#2e7d32' : '#ef6c00',
      fontSize: '0.75rem',
      fontWeight: 'bold'
    }}>
      {status}
    </span>
  )
}