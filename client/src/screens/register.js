import { RegisterAction }  from'../actions/userAction';
import { connect } from 'react-redux';
import { clearErrors } from '../actions/errorActions';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
class Register extends Component{
    state={ 
        name: 'nguyentuanvu1',
        email:'anguyentuanvu231198@gmail.com',
        password:'123456',
        confirmPassword:'123456',
        flag:false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    onSubmitRegister=e=>{
        e.preventDefault();
        const{name,email,password}=this.state;
        const user={
            name,
            email,
            password
        }

        if(this.state.password!==this.state.confirmPassword){
            this.setState({flag:true});
        }
        this.props.RegisterAction(user);
    }
    componentDidUpdate(){
        const {isAuthenticated,error} =this.props;
        if (isAuthenticated) {
            if(error.id!==null)
                this.toggle();
        }
      }
    toggle = () => {
    // Clear errors
        this.props.clearErrors();
    };

    renderAlert(){
        const {message} =this.props;
        if( this.props.error.msg.error){
            return(
                <div class="alert alert-success">
                    <p>{this.props.error.msg.error}</p>
                </div>
            );
        }
        if( message){
            return(
                <div class="alert alert-success">
                    <p>{message}</p>
                </div>
            );
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>SignUp</Text>
                <TextInput
                    style={styles.Textinput}
                    name={"name"}
                    placeholder="Enter Your First Name"
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.Textinput}
                    placeholder="Enter Your Email"
                    name={"email"}
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.Textinput}
                    placeholder="Enter Your Password"
                    name={"password"}
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    onChange={this.handleChange}
                />
                <TextInput
                    style={styles.Textinput}
                    name={"confirmPassword"}
                    placeholder="Re-Enter Your Password"
                    placeholderTextColor="#36485f"
                    underlineColorAndroid={'transparent'}
                    onChange={this.handleChange}
                />
                <TouchableOpacity style={styles.submitButton1} onPress={this.onSubmitRegister}>
                    <Text style={styles.submitButtonText1}> Submit </Text>
                </TouchableOpacity>
            </View>
        )}
}
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    message:state.auth.message,
    error: state.error
  });


export default connect(
    mapStateToProps,
    { RegisterAction, clearErrors }
  )(Register);
const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    header: {
        color: '#36485f',
        alignSelf: 'stretch',
        fontSize: 24,
        textAlign: 'center',
        borderBottomWidth: 1,
        borderColor: '#36485f',
        paddingBottom: 10,
        paddingTop: 20,
        marginLeft: 20,
        marginRight: 30,
        fontWeight: 'bold',
    },
    Textinput: {
        alignSelf: 'stretch',
        paddingTop: 10,
        height: 40,
        borderBottomWidth: 1,
        paddingBottom: 10,
        marginTop: 40,
        marginLeft: 40,
        marginRight: 50,
    },
    submitButton1: {
        backgroundColor: '#36485f',
        padding: 10,
        height: 40,
        width: 150,
        marginLeft: 130,
        marginTop: 25,
    },
    submitButtonText1: {
        textAlign: 'center',
        color: '#fff',
    },
});