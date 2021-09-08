import React from 'react'
import "./SidebarOption.css"

const SidebarOption = ({ title, Icon ,url }) => {
    return (
        <div className="sidebar_option">
            {Icon && <Icon className="sidebar_option-icon" />}
            {Icon ? <h4>{title}</h4> : <p><a href={url}>{title}</a></p>}
        </div>
    )
}

export default SidebarOption
