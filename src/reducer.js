const initialState = {
    emperorsMessage: '',
    lukesMessage: '',
    vadersAura: '0'
}


const SET_LUKE_MSG = 'SET_LUKE_MSG',
      SET_EMPEROR_MSG = 'SET_EMPEROR_MSG',
      SET_AURA = 'SET_AURA'

export function setLukeMsg(msg) {
    return {
        type: SET_LUKE_MSG,
        payload: msg
    }
}

export function setEmperorMsg(msg) {
    return {
        type: SET_EMPEROR_MSG,
        payload: msg
    }
}

export function setVaderAura(influence) {
    return {
        type: SET_AURA,
        payload: influence
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case SET_LUKE_MSG:
            return Object.assign({}, state, { lukesMessage: action.payload })

        case SET_EMPEROR_MSG:
            return Object.assign({}, state, { emperorsMessage: action.payload })
        
        case SET_AURA:
            let newAura = +state.vadersAura + +action.payload 
            newAura = newAura < 0 ? '0' : newAura > 255 ? '255' : newAura.toString()
            return Object.assign({}, state, { vadersAura: newAura })
        
        default:
            return state
    }
}