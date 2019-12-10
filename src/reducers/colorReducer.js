
const color = (state = { colorName: 'Robbins egg blue', color: '#00cec9', compColor: '#6c5ce7' }, action) => {
    switch (action.type) {
        case 'RED':
            return state = {
                colorName: 'Chi-gong red',
                color: '#d63031',
                compColor: '#fdcb6e'
            }
        case 'YELLOW':
            return state = {
                colorName: 'Sour lemon yellow',
                color: '#ffeaa7',
                compColor: '#00b894'
            }
        default:
            return state
    }
}

export default color;