import background from './../resources/shifaaz-shamoon-sLAk1guBG90-unsplash.jpg'
import background3 from './../resources/kayla-kozlowski-ECQ-3QXThAA-unsplash.jpg'
import background2 from './../resources/godslar-zboO0K1WfY4-unsplash.jpg'

const color = (state = {
    colorName: 'Robbins egg blue',
    color: '#00cec9',
    compColor: '#6c5ce7',
    background:"url(" + background + ")"
}, action) => {
    switch (action.type) {
        case 'RED':
            return state = {
                colorName: 'Chi-gong red',
                color: '#d63031',
                compColor: '#fdcb6e',
                background:"url(" + background3 + ")"

            }
        case 'YELLOW':
            return state = {
                colorName: 'Sour lemon yellow',
                color: '#ffeaa7',
                compColor: '#00b894',
                background:"url(" + background2 + ")"
            }
        default:
            return state
    }
}

export default color;