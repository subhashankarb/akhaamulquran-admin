import { useNavigate, useLocation } from 'react-router-dom';
import { 
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, 
  Divider, Box, Typography, Tooltip 
} from '@mui/material';
import { 
  Dashboard, People, Gavel, Analytics, MenuBook, 
  Notifications, Description, SmartToy, Person, Logout 
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onLogout: () => void;
}

const MENU_ITEMS = [
  { text: 'Dashboard', icon: <Dashboard />, path: '/admin/dashboard' },
  { text: 'User Management', icon: <People />, path: '/admin/users' },
  { text: 'Legal & Documentation', icon: <Gavel />, path: '/admin/legal' },
  { text: 'User Analytics', icon: <Analytics />, path: '/admin/analytics' },
  { text: 'The Holy Quran', icon: <MenuBook />, path: '/admin/quran' },
  { text: 'Push Notifications', icon: <Notifications />, path: '/admin/notifications' },
  { text: 'Logs Management', icon: <Description />, path: '/admin/logs' },
  { text: 'AI Service', icon: <SmartToy />, path: '/admin/ai' },
];

export default function Sidebar({ open, onLogout }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
      {/* Logo Area */}
      <Box 
        sx={{ 
          height: 64, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: open ? 'flex-start' : 'flex-start', 
          px: 2,
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          transition: 'all 0.3s ease'
        }}
      >
        <Box 
          sx={{ 
            width: 40, 
            height: 40, 
            bgcolor: 'rgba(255,255,255,0.2)', 
            borderRadius: 1, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          <Typography variant="h6" fontWeight="bold">A</Typography>
        </Box>
        
        <Typography 
          variant="subtitle1" 
          fontWeight="bold" 
          sx={{ 
            ml: 2, 
            opacity: open ? 1 : 0, 
            whiteSpace: 'nowrap', 
            transition: 'opacity 0.2s',
            display: open ? 'block' : 'none'
          }}
        >
          AkhaamUlQuran
        </Typography>
      </Box>

      <Divider />

      {/* Main Menu */}
      <List sx={{ flexGrow: 1, pt: 2 }}>
        {MENU_ITEMS.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block', mb: 0.5 }}>
            <Tooltip title={!open ? item.text : ''} placement="right">
              <ListItemButton
                onClick={() => navigate(item.path)}
                selected={location.pathname === item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  mx: 1,
                  borderRadius: 1,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': { bgcolor: 'primary.dark' },
                    '& .MuiListItemIcon-root': { color: 'inherit' }
                  }
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : 'auto',
                    justifyContent: 'center',
                    color: location.pathname === item.path ? 'inherit' : 'text.secondary'
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  sx={{ opacity: open ? 1 : 0, whiteSpace: 'nowrap' }} 
                />
              </ListItemButton>
            </Tooltip>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* Bottom Menu */}
      <List sx={{ pb: 2 }}>
        <Typography 
          variant="caption" 
          sx={{ 
            pl: 3, 
            pt: 2, 
            pb: 1, 
            display: open ? 'block' : 'none', 
            opacity: 0.7, 
            fontWeight: 'bold', 
            textTransform: 'uppercase' 
          }}
        >
          Settings
        </Typography>

        <ListItem disablePadding sx={{ display: 'block', mb: 0.5 }}>
          <Tooltip title={!open ? 'Profile' : ''} placement="right">
            <ListItemButton
              onClick={() => navigate('/admin/profile')}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                mx: 1,
                borderRadius: 1
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center' }}>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Profile" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>

        <ListItem disablePadding sx={{ display: 'block' }}>
           <Tooltip title={!open ? 'Logout' : ''} placement="right">
            <ListItemButton
              onClick={onLogout}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                mx: 1,
                borderRadius: 1,
                color: 'error.main',
                '&:hover': { bgcolor: 'error.light', color: 'error.contrastText', '& .MuiListItemIcon-root': { color: 'inherit' } }
              }}
            >
              <ListItemIcon sx={{ minWidth: 0, mr: open ? 2 : 'auto', justifyContent: 'center', color: 'inherit' }}>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );
}