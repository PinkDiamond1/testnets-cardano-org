import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'

const Container = styled.div`
  p {
    margin: 0;
  }
`

const StakePoolFixedFee = ({ value, onChange, label, helperText, symbol, toADA, fromADA }) => (
  <Container>
    <TextField
      label={label}
      helperText={helperText}
      value={`${fromADA(value)}`}
      FormHelperTextProps={{
        component: 'div'
      }}
      type='number'
      min={0}
      fullWidth
      onChange={(e) => onChange(`${toADA(e.target.value)}`)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            {symbol}
          </InputAdornment>
        )
      }}
    />
  </Container>
)

StakePoolFixedFee.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  helperText: PropTypes.node,
  symbol: PropTypes.node.isRequired,
  toADA: PropTypes.func.isRequired,
  fromADA: PropTypes.func.isRequired
}

export default StakePoolFixedFee
