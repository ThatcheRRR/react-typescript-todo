import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { ITodo } from "../../interfaces/interfaces";
import TodosList from '../TodosList';

const Todos: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter') {
            const newTodo: ITodo = {
                title: value,
                id: Date.now(),
                completed: false
            };
            setTodos(prev => [newTodo, ...prev]);
            setValue('');
        }
    };

    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setValue(target.value);
    };

    const handleCheck = (id: number) => {
        setTodos(prev => prev.map(item => {
            if(item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        }));
    };

    return (
        <div className="todos">
            <TextField
                label="Add new task"
                variant="outlined"
                value={value}
                fullWidth
                onChange={handleChange}
                onKeyPress={handleSubmit}
            />
            <TodosList todos={todos} handleCheck={handleCheck} />
        </div>
    );
};

export default Todos;
