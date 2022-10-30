import React from "react"
import * as C from './Styles'
import Typography from '@mui/material/Typography'

export const Footer = () => {
    return (
        <C.Container>
            <Typography variant="subtitle2" gutterBottom>
                Feito com <span role="img" aria-label="heart">💜</span> por <a href="https://github.com/mhsouza88/" 
                rel="noopener noreferrer" target="_blank">@mhsouza88</a> para <a href="https://allyhub.co/" 
                rel="noopener noreferrer" target="_blank">Ally Hub</a>.
            </Typography>
        </C.Container>
    )
}

export default Footer