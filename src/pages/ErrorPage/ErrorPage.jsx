import React from "react"
import * as C from './Styles'
import Error from '../../assets/error.png'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    const goBack = () => {
        navigate("/")
    }
    
    return (
        <C.Container>
            <img src={Error} alt="Erro" />
            <Typography variant="subtitle2" gutterBottom>
                Bip bip! Ocorreu um erro, humano.
            </Typography>
                <Typography variant="subtitle2" gutterBottom>
                    Clique no botão abaixo para retornar.
                </Typography>
                    <Button variant="contained" onClick={goBack} startIcon={<ArrowBackIcon />}>
                        Voltar
                    </Button>
        </C.Container>
    )
}

export default ErrorPage