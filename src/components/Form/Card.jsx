import * as React from 'react'
import * as C from './Styles'
import CountriesAndCities from './CountriesAndCities'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const CardForm = () => {
  return (
    <Card sx={{ maxWidth: 450, minWidth: 250, marginBottom: '2rem' }}>
        <CardHeader
            title="Vamos viajar pelo mundo? ✈️"
            subheader="Você foi selecionado pela agência de viagens Ampliando Horizontes para ganhar
            uma viagem para quantos países e cidades você quiser. Por favor, preencha o formulário abaixo com
            os seus dados:"
            sx={{ textAlign: 'justify' }}
        />
        <CardContent>
            <TextField 
                type="text"
                label="Seu nome e último sobrenome" 
                variant="standard"
                placeholder="Ex: Lílian Schultz"
                required={true}
                inputProps={{
                    pattern: "^[A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]+ [A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff]*",
                    autoComplete: 'off'
                }}
                    sx={{marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}
                />
                    <TextField 
                        type="email"
                        label="E-mail" 
                        variant="standard" 
                        placeholder="Ex: nome@dominio.com"
                        required={true}
                        inputProps={{
                            pattern: "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$*",
                            autoComplete: 'off'
                        }}
                            sx={{marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}
                    />
                        <TextField 
                            required={true}
                            type="tel"
                            label="Telefone (apenas números + DDD)" 
                            placeholder="Ex: 2126821517"
                            variant="standard" 
                            inputProps={{
                                pattern: "([0-9]{10,12})*",
                                autoComplete: 'off'
                            }}
                                sx={{marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}
                        />
                            <TextField 
                                required={true}
                                type="text"
                                label="CPF (apenas números)" 
                                placeholder="Ex: 12388846523"
                                variant="standard" 
                                inputProps={{
                                    pattern: "([0-9]{11,11})*",
                                    autoComplete: 'off'
                                }}
                                    sx={{marginBottom: '2rem', display: 'flex', flexDirection: 'column'}}
                            />
                                <CountriesAndCities />
                            <C.AlignButton>
                        <Button type="submit" variant="contained">Enviar</Button>
                    </C.AlignButton>
            </CardContent>
    </Card>
  )
}

export default CardForm