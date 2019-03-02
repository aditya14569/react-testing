import React, { Component } from 'react';

import Button from '../../../../UI/Button/Button';
import Spinner from '../../../../UI/Spinner/Spinner';
//import classes from './eligibility.css';
import axios from 'axios';
import Input from '../../../../UI/Input/Input';

class Eligibility extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            grievance_subject: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'subject'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            


            grievance_description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'grievance description'
                    /*options: [
                        { value: 'fastest', displayValue: 'Fastest' },
                        { value: 'cheapest', displayValue: 'Cheapest' }
                    ]*/
                },
                value: '',
                validation: {
                    required: true,

                },
                valid: false,
                touched: false
                //validation: {},
                //valid: true
            }
        },
        attached_documents: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'attached_documents'
            },
            value: '',
            validation: {
                required: true,
                //isEmail: true
            },
            valid: false,
            touched: false
        },
        // days_till_response: {
        //     elementType: 'input',
        //     elementConfig: {
        //         type: 'text',
        //         placeholder: 'days till response'
        //     },
        //     value: '',
        //     validation: {
        //         required: true,
        //         //isEmail: true
        //     },
        //     valid: false,
        //     touched: false
        // },

        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const data = {
            name: formData.name,
            grievance_description: formData.grievance_description,
            grievence_subject: formData.grievance_subject,
            attached_documents: formData.attached_documents
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(response => {
                this.setState({ loading: false });
                //this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            });
        this.setState({ loading: false });
    }

    checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.maxLength && isValid
        }

        if (rules.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className='ContactData'>
                <h4>Please fill the form</h4>
                {form}
            </div>
        );
    }
}

export default Eligibility;