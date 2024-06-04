import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function Sreach(){
    return (
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
            <div>
                    <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                    />
            </div>
        </Box>
  );
}

export default Sreach;