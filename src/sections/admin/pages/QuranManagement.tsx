import { Box, Typography, Grid, Card, CardActionArea, CardContent } from '@mui/material';

export default function QuranManagement() {
  const surahs = Array.from({ length: 12 }, (_, i) => ({ number: i + 1, name: `Surah ${i + 1}`, verses: (i + 1) * 7 }));

  return (
    <Box>
      <Typography variant="h5" fontWeight="bold" mb={3}>Quran Management</Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>Manage Surah metadata and audio files.</Typography>

      <Grid container spacing={2}>
        {surahs.map((surah) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={surah.number}>
            <Card variant="outlined">
              <CardActionArea>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box 
                    sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: 'primary.light', color: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', mb: 1, fontWeight: 'bold' }}
                  >
                    {surah.number}
                  </Box>
                  <Typography variant="subtitle1" fontWeight="bold">{surah.name}</Typography>
                  <Typography variant="caption" color="text.secondary">{surah.verses} Verses</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}