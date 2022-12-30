import React, { Component } from 'react';

class Name extends Component {
    
    render() { 
        
        return (<>    
            {this.props.simpson.character}
            </>  );
    }
}
 
export default Name;