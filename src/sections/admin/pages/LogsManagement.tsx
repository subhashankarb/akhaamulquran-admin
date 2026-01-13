import { Box, Typography, Paper } from '@mui/material';

export default function LogsManagement() {
  const logs = [
    { time: '10:42:01 AM', level: 'INFO', msg: 'User login success: admin@akhaamulquran.com' },
    { time: '10:41:55 AM', level: 'WARN', msg: 'High latency detected on /api/recite endpoint' },
    { time: '10:40:12 AM', level: 'ERROR', msg: 'Failed to sync with Storage Bucket' },
    { time: '10:38:00 AM', level: 'INFO', msg: 'New user registration: guest_123' },
  ];

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>System Logs</Typography>
      <Paper sx={{ bgcolor: '#1e1e1e', color: '#00ff00', p: 3, fontFamily: 'monospace', borderRadius: 2 }}>
        {logs.map((log, i) => (
          <Box key={i} mb={1}>
            <span style={{ color: '#888' }}>[{log.time}]</span>{' '}
            <span style={{ color: log.level === 'ERROR' ? 'red' : log.level === 'WARN' ? 'orange' : '#0af' }}>{log.level}</span>:{' '}
            {log.msg}
          </Box>
        ))}
      </Paper>
    </Box>
  );
}