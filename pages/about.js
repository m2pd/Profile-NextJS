import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout'
import BasePage from '../components/layouts/BasePage'
import { useAuth0 } from "@auth0/auth0-react";

const About = (props) => {

  return (
    <BaseLayout {...props.auth}>
      <div className="main-section">
        <BasePage className="about-page">
          <h1>About Page</h1>
        </BasePage>
      </div>
    </BaseLayout>
  )
}

export default About
