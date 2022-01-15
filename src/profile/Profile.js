import React from 'react'
import PropTypes from "prop-types";


const Profile =props => {
    return (
        <div>
            <h1>{props.fullname}</h1>
            {props.children}
            <h2>{props.profession}</h2>
            <h2>{props.email}</h2>
            <h2>{props.Hobbies}</h2>
            <h3>{props.bio}</h3>
        </div>
    )
}




export default Profile

