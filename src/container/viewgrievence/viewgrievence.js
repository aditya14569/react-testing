import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import Input from '../../components/UI/Input/Input';
import Post from './post/postlog';

class Eligibility extends Component {
    state = {
        orderForm: {
            id: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'write grievence id'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
           

        formIsValid: false,
        loading: false
    },
    hasGot: false,
    data: []
}

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
       
        const url = 'https://sih-ecms-server.herokuapp.com/student/grievancelog/' + formData.id;
        axios.get(url, {
            headers: {
                "x-auth": localStorage.getItem("token")
            }
        })
            .then(response => {
                let data3 = [...response.data]
                this.setState({ data: data3, hasGot: true });
                console.log("hey");
                console.log(response);
            })
            .catch(err =>this.setState({hasGot:false}) );
    
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
            {console.log(formElementsArray)}
                {   
                    formElementsArray.map(formElement => (
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
                <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        const p2 = this.state.data.map(data => {
            return <Post 
                createdAt={data["createdAt"]}
                id={data["id"]}
                userId={data["userId"]}
                updatedAt={data["updatedAt"]}
                grievanceId={data["grievanceId"]}
                log= {data["log"]}
            />

        })
        if(this.state.hasGot)
            return ( p2 );
        else 
        return (
            <div className='ContactData'>
                <h4>Please fill the form</h4>
                {form}
            </div>
        );
    }
}

export default Eligibility;