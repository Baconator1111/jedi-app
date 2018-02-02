import React from 'react';
import { setLukeMsg, setEmperorMsg, setVaderAura } from '../reducer';
import { connect } from 'react-redux';

function Luke(props) {
    return (
        <div className ="Luke" onClick={ () => {
            props.setLukeMsg('Join me, Father!')
            props.setEmperorMsg('')
            props.setVaderAura('25')
        } } >
            <h2>Luke</h2>
        </div>
    )
}

const mapDispatchToProps = { setLukeMsg, setEmperorMsg, setVaderAura }

export default connect(null, mapDispatchToProps)(Luke)