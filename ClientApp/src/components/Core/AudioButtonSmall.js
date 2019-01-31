import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import './AudioButton.css';

const AudioButtonSmall = ({onClick, glyphicon}) => (
    <button onClick={() => onClick()} className='audioButtonSmall'>
        <Glyphicon glyph={glyphicon} />
    </button>);

export default AudioButtonSmall;