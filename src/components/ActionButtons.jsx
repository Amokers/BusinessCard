import React from "react"

function ActionButtons() {

    return (
        <div className="action-panel">
            <a href="mailto:nicolas.bretecher@gmail.com" className='btn btn-mail' target="_blank">
            <i className="fa-solid fa-envelope fa-fw"></i>
                Email
            </a>
            <a href="https://fr.linkedin.com/in/nicolasbretecher" className='btn btn-linkedin' target="_blank">
                <i className="fa-brands fa-linkedin fa-fw"></i>
                Linkedin
            </a>
        </div>
    )

}

export default ActionButtons