import React, { Component } from 'react';
import Spinner from '../UI/Spinner/Spinner';
import './front.css';
import axios from 'axios';
import Input from '../UI/Input/Input';

class Front extends Component {
    state = {
        orderForm: {
            username: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            }},
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) => {
        console.log("kjhkj");
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const credentials = {
            id: formData.username,
            password: formData.password
        }
        // axios.post('https://jsonplaceholder.typicode.com/posts',credentials)
        axios.post('https://sih-ecms-server.herokuapp.com/users/login', credentials)

                 .then(response => {
                    this.setState({ loading: false });
                    // this.props.history.push('/');
                    localStorage.setItem("token",response.headers["x-auth"]);
                    this.props.history.push("/");
                    // const auth=localStorage.getItem("token");
                    // console.log(response.headers["x-auth"]);
                    // console.log(auth);
                })
                .catch(error => {
                    window.alert('Enter Valid Credentials');
                    this.setState({ loading: false });
                    window.alert('enter valid credentials')
                    console.log(error);
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
        localStorage.removeItem("token");
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        let form = (
            <form onSubmit={this.orderHandler} >
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
                {/* <Button clicked={this.orderHandler} className="" variant="success" disabled={!this.state.formIsValid}>Log In</Button> */}
                <button type="submit">Log In</button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div>
                <div className='navabar fixed-top'>
                    <div className='brand'>
                        <img
                        alt=""
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        />
                        <div className='projectName'>
                            {'Effective Complaint Management System'}
                        </div>
                        
                    </div>
                </div>

                <div className='outerBox'>
                    
                    <div className='innerBox ContactData'>
                        {form}
                    </div>
                </div>
            </div>
            // ../assets/images/C1.jpg
        );
    }
}

export default Front;