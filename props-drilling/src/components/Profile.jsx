import React from 'react'

const Profile = (props) => {
    return (
        <>
            <div className="parent">
                <img src={props.profileImage} alt="" />
                <h1>{props.username}, {props.age}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, totam.</p>
                <button>View</button>
            </div>
        </>
    )
}

export default Profile
