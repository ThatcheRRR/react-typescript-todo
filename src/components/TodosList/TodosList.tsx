import React from 'react';
import { List, ListItem, Checkbox, Typography } from '@material-ui/core';
import { ITodo } from '../../interfaces/interfaces';

type TodosListProps = {
    todos: ITodo[],
    handleCheck: (id: number) => void
};

const TodosList: React.FC<TodosListProps> = ({ todos, handleCheck }) => {
    if(todos.length === 0) {
        return (
            <Typography variant="h5" align="center">Nothing to do!</Typography>
        );
    }

    return (
        <List>
            {todos.map(item => (
                <ListItem key={item.id}>
                    <Checkbox checked={item.completed} onClick={handleCheck.bind(null, item.id)} />
                    <Typography>
                        {item.title}
                    </Typography>
                </ListItem>
            ))}
        </List>
    );
};

export default TodosList;
