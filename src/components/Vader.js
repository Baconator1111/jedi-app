import React from 'react';
import { connect } from 'react-redux';

function Vader(props) {
    const aura = props.vadersAura
    return (
        <div className="Vader" style={ { borderColor: `rgb(${aura}, ${aura}, ${aura})` } } ></div>
    )
}

function mapStateToProps(state) {
    return {
        vadersAura: state.vadersAura
    }
}

export default connect(mapStateToProps)(Vader)