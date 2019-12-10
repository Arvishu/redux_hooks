
  const color = (state = 'blue', action)=>{
    switch (action.type) {
      case 'RED':
        return  state ='red' 
      case 'YELLOW':
        return state='yellow'
      default:
        return state
    }
  }
  
  export default color;