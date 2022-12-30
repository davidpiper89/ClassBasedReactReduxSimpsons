import React, { Component } from 'react';

class Image extends Component {
    
    render() { 
        return (
            
           <img src={this.props.simpson.image} alt=""></img> 
           
        );
    }
}
 
export default Image;