import React from 'react';

class SampleComponent extends React.Component{

    render(){
        const {number} = this.props 
        return (
            <div>
                <h1>Hello world</h1>
                <h2>Current number: {number}</h2>
            </div>
        )
    }
}

export default SampleComponent