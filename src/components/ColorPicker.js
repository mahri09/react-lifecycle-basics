import React from 'react';
import { Button } from './Button';

class ColorPicker extends React.Component {
  

  componentDidMount() {
    console.log('i invoked immediately after component is mounted, just one time at the beginning; after render method')
    
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('i invoked immediately after updating occurs, upon every change.')
    
  }

  isLight(colorArr) {
    return    // it should return true or false according to the given array;
  }

  formatColor(colorArr) {
    return    // it should return rgb format of color acording to the given array;
  }

  
 chooseColor(){
  //it creates an array, consist of randomized numbers (between 0 and 256). And sets the state of color.
}
  

 


  render() {
    return (
      <div>
        <h1>
        Your color is ........!
        </h1>
        <Button >
          <p>Hi, im color picker</p>
        </Button>
      </div> 
    );
  }
}

export default ColorPicker;
