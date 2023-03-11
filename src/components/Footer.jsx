import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            Nicolas BRETECHER | BusinessCard | {currentYear}
        </footer>
    )

}

export default Footer