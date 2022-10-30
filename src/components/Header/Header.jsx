import React from "react"
import * as C from './Styles'
import Logo from '../../assets/logo.gif'

export const Header = () => {
    return (
        <C.Container>
            <img src={Logo} alt="Logo" />
        </C.Container>
    )
}
