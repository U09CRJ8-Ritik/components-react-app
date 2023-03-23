import React, { useState } from 'react';
import Dropdown from './components/Dropdown'


const App = () => {

    const [selection, setSelection] = useState(null);

    const options = [
        { label: 'Red', title: 'red' },
        { label: 'Green', title: 'green' },
        { label: 'Blue', title: 'blue' },

    ];

    const handleSelect = (option) => {
        setSelection(option);
        setSelection(option);
    }

    return (
        <div>
            <Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    )
}

export default App
