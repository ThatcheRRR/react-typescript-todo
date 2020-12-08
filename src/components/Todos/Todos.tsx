import React from 'react';
import { TextField } from '@material-ui/core';

const Todos: React.FC = () => {
    return (
        <div className="todos">
            <TextField
                label="Add new task"
                variant="outlined"
                fullWidth
            />
        </div>
    )
};

export default Todos;
