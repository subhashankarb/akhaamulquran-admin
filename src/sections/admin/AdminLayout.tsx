import { useState, useMemo } from 'react';
import { Outlet, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Box, CssBaseline, AppBar, Toolbar, IconButton, 
  Typography, Drawer, useTheme, useMediaQuery 
} from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
import { type RootState } from '../../store';
import { logout } from '../../store/authSlice';
import { toggleTheme } from '../../store/themeSlice'; // Ensure this matches your slice
import Sidebar from './components/Sidebar';
import ConfirmDialog from './components/ConfirmDialog';

const EXPANDED_DRAWER_WIDTH = 260;
const COLLAPSED_DRAWER_WIDTH = 70;

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Redirect if not authenticated
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Determine Drawer State
  const isSidebarOpen = isMobile ? mobileOpen : isHovered;
  const currentDrawerWidth = isMobile 
    ? EXPANDED_DRAWER_WIDTH 
    : (isHovered ? EXPANDED_DRAWER_WIDTH : COLLAPSED_DRAWER_WIDTH);

  // Dynamic Title Logic
  const getPageTitle = (pathname: string) => {
    const routeName = pathname.split('/').pop() || 'Dashboard';
    // Capitalize and format (e.g., "user-management" -> "User Management")
    return routeName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
      .replace('Ai', 'AI')
      .replace('Quran', 'The Holy Quran');
  };

  const pageTitle = useMemo(() => getPageTitle(location.pathname), [location.pathname]);

  const handleLogoutConfirm = () => {
    dispatch(logout());
    setIsLogoutDialogOpen(false);
    navigate('/', { replace: true });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      {/* Top App Bar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          width: { sm: `calc(100% - ${currentDrawerWidth}px)` }, 
          ml: { sm: `${currentDrawerWidth}px` },
          transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          bgcolor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1
        }}
      >
        <Toolbar>
          <IconButton 
            color="inherit" 
            edge="start" 
            onClick={() => setMobileOpen(!mobileOpen)} 
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            {pageTitle}
          </Typography>

          <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
            {theme.palette.mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box 
        component="nav" 
        sx={{ width: { sm: currentDrawerWidth }, flexShrink: { sm: 0 }, transition: 'width 0.3s' }}
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{ 
            display: { xs: 'block', sm: 'none' }, 
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: EXPANDED_DRAWER_WIDTH } 
          }}
        >
          <Sidebar open={true} onLogout={() => setIsLogoutDialogOpen(true)} />
        </Drawer>

        {/* Desktop Drawer (Collapsible) */}
        <Drawer
          variant="permanent"
          sx={{ 
            display: { xs: 'none', sm: 'block' }, 
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: currentDrawerWidth,
              overflowX: 'hidden',
              transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
            } 
          }}
          open
        >
          <Sidebar open={isHovered} onLogout={() => setIsLogoutDialogOpen(true)} />
        </Drawer>
      </Box>

      {/* Main Content Area */}
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          width: { sm: `calc(100% - ${currentDrawerWidth}px)` },
          transition: 'width 0.3s',
          mt: 8
        }}
      >
        <Outlet />
      </Box>

      <ConfirmDialog 
        open={isLogoutDialogOpen}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
        onConfirm={handleLogoutConfirm}
        onCancel={() => setIsLogoutDialogOpen(false)}
      />
    </Box>
  );
}