import React from "react"
import * as C from './Styles'
import { useNavigate } from 'react-router-dom'
import Card from './Card'
import FormControl from '@mui/material/FormControl'

export const Form = () => {
    const navigate = useNavigate()
    const sendApplication = () => {
        navigate("/ty")
    }
    
    return (
        <C.Container>
            <FormControl>
                <form onSubmit={sendApplication}>
                    <Card />
                    </form>
            </FormControl>
        </C.Container>
    )
}

export default Form