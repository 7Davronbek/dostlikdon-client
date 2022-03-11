import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';

import {connect} from 'react-redux';

import {loginUser} from '../redux/actions/authAction';

class Login extends Component {
    render() {

        const login = (event, values) => {

            this.props.loginUser(values, this.props.history);
        }

        return (
            <div>
                <div className="container">
                    <div className="row vh-100 align-items-center">
                        <div className="col-4 offset-4">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={login}>
                                        <AvField
                                            name="phoneNumber"
                                            placeholder="Phone number"
                                            type="text"
                                            required
                                        />

                                        <AvField
                                            name="password"
                                            placeholder="Password"
                                            type="password"
                                            required
                                        />

                                        <button type='submit' disabled={this.props.isLoading} className='btn btn-success btn-block'> {this.props.isLoading ? <span className='spinner-border spinner-border-sm' /> : ""} Login</button>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.login.isLoading
    }
}

export default connect(mapStateToProps, {loginUser})(Login);