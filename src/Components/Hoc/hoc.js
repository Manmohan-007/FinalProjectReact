import React from 'react';
import classes from './hoc.module.css'

const hoc = (props)=>{
    return(
        <div>
            {
                    props.data == null?
                    <div className={classes.loadingWrapper}>
                        <p className={classes.loading}>Loading Data.....</p>
                    </div>
                    :
                    props.children
            }
        </div>

    )
}

export default hoc