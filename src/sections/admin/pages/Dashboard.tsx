import { Grid, Paper, Typography, Box, Card, CardContent } from '@mui/material';
import { TrendingUp, People, MenuBook, AccessTime } from '@mui/icons-material';

export default function Dashboard() {
  const stats = [
    { title: 'Total Users', value: '1,204', icon: <People />, color: '#e0f2f1', textColor: '#00695c' },
    { title: 'Daily Recitations', value: '850', icon: <MenuBook />, color: '#e8f5e9', textColor: '#2e7d32' },
    { title: 'Active Sessions', value: '124', icon: <TrendingUp />, color: '#fff3e0', textColor: '#ef6c00' },
    { title: 'Avg. Session Time', value: '14m', icon: <AccessTime />, color: '#f3e5f5', textColor: '#7b1fa2' },
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>Dashboard Overview</Typography>
      
      {/* Stats Grid */}
      <Grid container spacing={3} mb={4}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper 
              sx={{ 
                p: 3, 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                bgcolor: stat.color,
                borderRadius: 2
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', color: stat.textColor }}>{stat.value}</Typography>
                <Typography variant="body2" color="text.secondary" fontWeight="medium">{stat.title}</Typography>
              </Box>
              <Box sx={{ color: stat.textColor, opacity: 0.8 }}>
                {stat.icon}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Recent Activity Section */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom fontWeight="bold">Recent Recitations</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[1, 2, 3].map((i) => (
                  <Paper key={i} variant="outlined" sx={{ p: 2, display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                      <Typography fontWeight="bold">Surah Al-Mulk</Typography>
                      <Typography variant="caption" color="text.secondary">User: user_{i}@example.com</Typography>
                    </Box>
                    <Typography variant="caption" color="primary">Just now</Typography>
                  </Paper>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
             <CardContent>
                <Typography variant="h6" gutterBottom fontWeight="bold">System Status</Typography>
                <Box mt={2}>
                   <Typography variant="body2" color="success.main">● API Server: Online</Typography>
                   <Typography variant="body2" color="success.main" mt={1}>● AI Engine: Online</Typography>
                   <Typography variant="body2" color="warning.main" mt={1}>● Database: High Load</Typography>
                </Box>
             </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}