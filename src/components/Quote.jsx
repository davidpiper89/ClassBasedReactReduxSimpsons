import React, { Component } from 'react';


class Quote extends Component {
    render() { 
        return ( 
            <>    
            {this.props.simpson.quote}
            </>  
        );
    }
}
 
export default Quote ;