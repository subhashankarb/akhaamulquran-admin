import { 
  Box, Typography, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Chip, IconButton, Button 
} from '@mui/material';
import { Edit, Delete, Add } from '@mui/icons-material';

const rows = [
  { id: 1, name: 'Subhashankar Behera', email: 'subhashankar@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Surbhi Pandey', email: 'surbhi@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Inactive' },
];

export default function UserManagement() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5" fontWeight="bold">User Management</Typography>
        <Button variant="contained" startIcon={<Add />}>Add User</Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>
                  <Chip label={row.role} color={row.role === 'Admin' ? 'primary' : 'default'} size="small" />
                </TableCell>
                <TableCell>
                  <Chip 
                    label={row.status} 
                    color={row.status === 'Active' ? 'success' : 'error'} 
                    size="small" 
                    variant="outlined" 
                  />
                </TableCell>
                <TableCell align="right">
                  <IconButton color="primary" size="small"><Edit /></IconButton>
                  <IconButton color="error" size="small"><Delete /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}