import React from 'react';

const TodoInput = ({onSubmit, onChange, value}) => (
    <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">Add</button>
    </form>
);

export default TodoInput;
