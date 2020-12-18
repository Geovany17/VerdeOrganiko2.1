/*
 *
 * Signup
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { Grid, Button, Form, } from 'semantic-ui-react';
import actions from '../../actions';
import Input from '../../components/Input';
import SignupButton from '../../components/SignupButton';
import LoadingIndicator from '../../components/LoadingIndicator';
import SignupProvider from '../../components/SignupProvider';
import Checkbox from '../../components/Checkbox';
import './Sign.css';

export class Signup extends React.PureComponent {
    state = {
        authenticated: false
    }
    render() {
        const {
            authenticated,
            signupFormData,
            formErrors,
            isLoading,
            isSubmitting,
            isSubscribed,
            signupChange,
            signUp,
            subscribeChange
        } = this.props;


        if (this.state.authenticated) return <Redirect to='/' />;

        const handleSubmit = event => {
            event.preventDefault();
            signUp();
            this.setState({ authenticated: true })
        };

        return (
            <div className='signup-form'>
                {isLoading && <LoadingIndicator />}
                <h2>Sign Up</h2>
                <hr />
                <form onSubmit={handleSubmit} noValidate>
                    <Form>
                        <Grid.Row>
                            <Form.Field>

                                <Input
                                    type={'text'}
                                    error={formErrors['email']}
                                    label={'Email Address'}
                                    name={'email'}
                                    placeholder={'Please Enter Your Email'}
                                    value={signupFormData.email}
                                    onInputChange={(name, value) => {
                                        signupChange(name, value);
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Input
                                    type={'text'}
                                    error={formErrors['firstName']}
                                    label={'First Name'}
                                    name={'firstName'}
                                    placeholder={'Please Enter Your First Name'}
                                    value={signupFormData.firstName}
                                    onInputChange={(name, value) => {
                                        signupChange(name, value);
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Input
                                    type={'text'}
                                    error={formErrors['lastName']}
                                    label={'Last Name'}
                                    name={'lastName'}
                                    placeholder={'Please Enter Your Last Name'}
                                    value={signupFormData.lastName}
                                    onInputChange={(name, value) => {
                                        signupChange(name, value);
                                    }}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Input
                                    type={'password'}
                                    label={'Password'}
                                    error={formErrors['password']}
                                    name={'password'}
                                    placeholder={'Please Enter Your Password'}
                                    value={signupFormData.password}
                                    onInputChange={(name, value) => {
                                        signupChange(name, value);
                                    }}
                                />
                            </Form.Field>


                        </Grid.Row>
                    </Form>
                    <br />
                    <hr />
                    <br />

                    <div className='d-flex flex-column flex-md-row align-items-md-center justify-content-between'>
                        <SignupButton
                            type='submit'
                            variant='primary'
                            text='Sign Up'
                            disabled={isSubmitting}
                        />
                        <br />
                        <br />
                        <Link className='mt-3 mt-md-0 redirect-link' to={'/login'}>
                            Back to login
              </Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.authentication.authenticated,
        signupFormData: state.signup.signupFormData,
        formErrors: state.signup.formErrors,
        isLoading: state.signup.isLoading,
        isSubmitting: state.signup.isSubmitting,
        isSubscribed: state.signup.isSubscribed
    };
};

export default withRouter(connect(mapStateToProps, actions)(Signup));