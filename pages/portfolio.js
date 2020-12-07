import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/layouts/BasePage'

const Portfolio = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <div className="main-section">
        <BasePage>
          <h1>Portfolio Page</h1>
        </BasePage>
      </div>
    </BaseLayout>
  )
}

export default Portfolio
