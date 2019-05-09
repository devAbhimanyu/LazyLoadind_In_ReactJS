import React, { Component } from 'react';

const lazyLoader = (importComponent) => {
    return class extends Component {
        state = {
            component: null
        }

        componentDidMount () {
            importComponent()
                .then(cmp => {
                    this.setState({component: cmp.default});
                });
        }
        
        render () {
            const CustComponent = this.state.component;

            return CustComponent ? <CustComponent {...this.props} /> : null;
        }
    }
}

export default lazyLoader;