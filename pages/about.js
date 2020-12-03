import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/layouts/BasePage'

const About = () => {
  return (
    <BaseLayout>
      <div className="main-section">
        <BasePage className="about-page">
          <h1>About Page</h1>
        </BasePage>
      </div>
    </BaseLayout>
  )
}

export default About
