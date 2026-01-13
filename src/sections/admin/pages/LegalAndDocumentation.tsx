import { Box, Typography, Tabs, Tab, TextField, Button, Paper } from '@mui/material';
import { useState } from 'react';

export default function LegalAndDocumentation() {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>Legal & Documentation</Typography>
      
      <Paper sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="primary" textColor="primary" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tab label="Privacy Policy" />
          <Tab label="Terms of Service" />
          <Tab label="About Us Content" />
        </Tabs>

        <Box p={3}>
          <Typography variant="subtitle2" gutterBottom>Edit Content ({value === 0 ? "Privacy Policy" : value === 1 ? "Terms" : "About Us"})</Typography>
          <TextField
            multiline
            rows={15}
            fullWidth
            variant="outlined"
            defaultValue="Enter your legal text here..."
            sx={{ mb: 2 }}
          />
          <Box display="flex" justifyContent="flex-end">
            <Button variant="contained" color="primary">Save Changes</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}