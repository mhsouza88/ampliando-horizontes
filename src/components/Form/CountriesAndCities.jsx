import * as React from 'react'
import * as C from './Styles'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../../constants/URLs'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Chip from '@mui/material/Chip'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

const getStyles = (name, placeName, theme) => {
  return {
    fontWeight:
      placeName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  }
}

export const Countries = () => {
  const theme = useTheme()
  const [countries, setCountries] = useState([])
  const [chipCountryName, setChipCountryName] = useState([])
  const [cities, setCities] = useState([])
  const [chipCityName, setChipCityName] = useState([])
  const countriesURL = `${BASE_URL}/country`
  const citiesURL = `${BASE_URL}/city`

  const getCountries = () => {
    axios
    .get(countriesURL)
    .then((res) => {
        setCountries(res.data)
    })
    .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
    })
}

  useEffect(() => {
    getCountries()
  }, [])

  const getCities = () => {
    axios
    .get(citiesURL)
    .then((res) => {
        setCities(res.data)
    })
    .catch((err) => {
        window.alert("Ocorreu um erro! Tente novamente.")
    })
  }

  useEffect(() => {
  getCities()
  }, [])

  const handleChangeCountry = (event) => {
    const {
      target: { value },
    } = event
      setChipCountryName(
        typeof value === 'string' ? value.split(',') : value,
    )
  }

  const handleChangeCity = (event) => {
    const {
      target: { value },
    } = event;
    setChipCityName(
      typeof value === 'string' ? value.split(',') : value,
    )
  }

  return (
    <C.AlignFields>
      <FormControl sx={{ width: {sm: 250, md: 300, xl: 300, lg: 300} }}>
        <InputLabel id="demo-multiple-chip-label">Países</InputLabel>
        <Select
          sx={{minWidth: 220, maxWidth: 300}}
          required
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={chipCountryName}
          onLoad={getCountries}
          onChange={handleChangeCountry}
          input={<OutlinedInput id="select-multiple-chip" label="Países" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name_ptbr} label={value.name_ptbr} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {countries.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, chipCountryName, theme)}
            >
              {name.name_ptbr}
            </MenuItem>
          ))}
        </Select>
        </FormControl>
        <FormControl sx={{ width: {sm: 250, md: 300, xl: 300, lg: 300}, marginTop: '2rem' }}>
        <InputLabel id="demo-multiple-chip-label">Cidades</InputLabel>
        <Select
          sx={{minWidth: 220, maxWidth: 300}}
          required
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={chipCityName}
          onLoad={getCities}
          onChange={handleChangeCity}
          input={<OutlinedInput id="select-multiple-chip" label="Países" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value.name_ptbr} label={value.name_ptbr} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {cities.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, chipCityName, theme)}
            >
              {name.name_ptbr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </C.AlignFields>
  )
}

export default Countries
