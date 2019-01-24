import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioButton.css';

const AudioButton = ({onClick, buttonStyle, glyphicon}) => (
    <button onClick={() => onClick()} style={buttonStyle} className='audioButton'>
        <Glyphicon glyph={glyphicon} />
    </button>);

export default AudioButton;