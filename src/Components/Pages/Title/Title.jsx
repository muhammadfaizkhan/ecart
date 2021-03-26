import React from 'react'
import './Title.css'


const Title = ({title, themeColor}) => {
    return (
        <div className="title" style={{backgroundColor: themeColor}}>
            <h1>{title}</h1>
        </div>
    )
}

export default Title
