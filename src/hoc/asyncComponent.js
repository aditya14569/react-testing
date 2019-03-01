import React, {Component} from 'react';
const asyncComponent = (importComponent) => {
    return class extends Component {
        state= {
            component : null
        }

        componentDidMount () {
            importComponent()
            .then(cmp => {
                this.setstate({component : cmp.default});
            });
        }

        render() {
            const C = this.state.component;

            return CC ? <C {...this.props} /> :null;
        }
    }
}
export default asyncComponent;
