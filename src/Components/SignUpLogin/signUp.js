import React from 'react';
import classes from './signUp.module.css';
import {connect} from 'react-redux';

class signUp extends React.Component{
    render(){
        return(
            <>
            <div onClick={()=>{
                this.props.layerChangeStatus()
            }} className={classes.layerWrapper}>
            </div>

                <div className={`${classes.signUpWrapper}`}>
                    <span onClick={()=>{
                        this.props.layerChangeStatus()
                    }} className={classes.cancleButton}>x</span>
                    <div className={classes.loginButtonWrapper}>
                        <div onClick={this.props.changeLoginStatus} className={classes.button}>Login</div>
                        <div className={`${classes.button} ${classes.specialButton}`}>Sign Up</div>
                    </div>
                    <div className={classes.formWrapperDiv}>
                        <form>
                            <p className={classes.inputTitle}>First Name</p>
                            <input className={classes.inputField} type="name" name="firstName" placeholder="First Name"/>
                            <p className={classes.inputTitle}>Username</p>
                            <input className={classes.inputField} type="name" name="username" placeholder="Enter Username"/>
                            <p className={classes.inputTitle}>Email address</p>
                            <input className={classes.inputField} type="email" name="email" placeholder="Enter email"/>
                            <p className={classes.inputTitle}>Create Password</p>
                            <input className={classes.inputField} type="password" name="password" placeholder="Password"/>
                            <input className={classes.signUp} type="submit" value="Sign up"/>
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
        layerChangeStatus:()=>{
            return dispatch({type: "layerChangeStatus"})
        },
        changeLoginStatus:()=>{
            return dispatch({type: "changeLoginStatus"})
        }
    }
}
  
export default connect(getData,changeData)(signUp);