import React from 'react';


export default function Input({ label, value, onChange }) {


    return (
        <label>
            {label}
            <input
                value={value}
                onChange={e => onChange(e.target.value)} />
        </label>
    )
}