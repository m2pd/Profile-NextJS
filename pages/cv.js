import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/layouts/BasePage';

const CV = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <div className="main-section">
        <BasePage className="cv-page">
          <h1>Cv Page</h1>
        </BasePage>
      </div>
    </BaseLayout>
  )
}

export default CV
