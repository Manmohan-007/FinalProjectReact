import React from 'react';
import classes from './login.module.css';
import {connect} from 'react-redux';


class Login extends React.Component{
    render(){
        return(
            <>
            <div onClick={()=>this.props.layerChangeStatus()} className={classes.layerWrapper}>
            </div>
                <div className={classes.signUpWrapper}>
                    <span onClick={()=>this.props.layerChangeStatus()} className={classes.cancleButton}>x</span>
                    <div className={classes.loginButtonWrapper}>
                        <div className={`${classes.button} ${classes.specialButton}`}>Login</div>
                        <div onClick={this.props.changeSignupStatus} className={classes.button}>Sign Up</div>
                    </div>

                    <div className={classes.formWrapperDiv}>
                        <form>
                            <p className={classes.inputTitle}>Email ID or Username</p>
                            <input className={classes.inputField} type="name" name="username" placeholder="Email"/>
                            <p className={classes.inputTitle}>Password</p>
                            <input className={classes.inputField} type="password" name="password" placeholder="Password"/>
                            <input className={classes.signUp} type="submit" value="Login"/>
                            <p className={classes.forgotPass}>Forgot Password ?</p>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

const getData = (globalStore)=>{
    return{
        login: globalStore.loginPage,
        signup: globalStore.signupPage,
        loginStatus: globalStore.loginStatus
    }
}

const changeData = (dispatch)=>{
    return{
        layerChangeStatus: ()=>{ return dispatch({type: "layerChangeStatus"}) },
        changeSignupStatus:()=>{ return dispatch({type: "changeSignupStatus"}) }
    }
}
  

export default connect(getData,changeData)(Login);