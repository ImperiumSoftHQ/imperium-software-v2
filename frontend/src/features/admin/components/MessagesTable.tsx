import { Box } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { ContactMessage } from '@/lib/api/messages.api'

interface MessagesTableProps {
  messages: ContactMessage[]
  loading: boolean
}

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 70,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 220,
  },
  {
    field: 'subject',
    headerName: 'Subject',
    width: 200,
  },
  {
    field: 'message',
    headerName: 'Message',
    flex: 1,
    minWidth: 300,
  },
  {
    field: 'createdAt',
    headerName: 'Date',
    width: 180,
    valueFormatter: (value: string) => {
      return new Date(value).toLocaleString()
    },
  },
]

export const MessagesTable = ({ messages, loading }: MessagesTableProps) => {
  return (
    <Box
      sx={{
        height: 600,
        width: '100%',
        '& .MuiDataGrid-root': {
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'background.paper',
        },
        '& .MuiDataGrid-cell': {
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '& .MuiDataGrid-columnHeaders': {
          backgroundColor: 'rgba(41, 182, 246, 0.1)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
        '& .MuiDataGrid-footerContainer': {
          borderColor: 'rgba(255, 255, 255, 0.1)',
        },
      }}
    >
      <DataGrid
        rows={messages}
        columns={columns}
        loading={loading}
        pageSizeOptions={[10, 25, 50]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 10 },
          },
        }}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
