import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioButton.css';

const AudioButton = ({onClick, glyphicon}) => (
    <button onClick={() => onClick()} className='audioButton'>
        <Glyphicon glyph={glyphicon} />
    </button>);

export default AudioButton;