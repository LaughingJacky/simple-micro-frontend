/**
 * @file root.component.js
 * @author Laughing Jacky
 * @email 4264332(#qq.com)
 * @create date 2020-03-27 21:14:26
 * @modify date 2020-03-27 21:14:26
 */
import React, {useState} from 'react';

export default () => {
    const [name, setName] = useState('react');
    return (
        <h1>Hello from {name}</h1>
    );
};
