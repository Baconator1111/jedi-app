import React from 'react';
import { setEmperorMsg, setLukeMsg, setVaderAura } from '../reducer';
import { connect } from 'react-redux';

function Emperor(props) {
    return (
        <div className ="Emperor" onClick={ () => {
            props.setEmperorMsg('Join me and the dark side!')
            props.setLukeMsg('')
            props.setVaderAura('-25')    
        } } >
            <h2>Emperor</h2>
        </div>
    )
}

const mapDispatchToProps = { setEmperorMsg, setLukeMsg, setVaderAura }

export default connect(null, mapDispatchToProps)(Emperor)