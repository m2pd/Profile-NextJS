import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'reactstrap'

const BasePage = (props) => {
  const { className } = props;
  return (
    <div className={`base-page ${className}`}>
      <Container>
        {props.children}
      </Container>
    </div>
  )
}

BasePage.propTypes = {
  className: PropTypes.string.isRequired
}

BasePage.defaultProps = {
  className: ''
}

export default BasePage
