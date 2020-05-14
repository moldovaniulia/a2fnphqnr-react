import React from 'react'
import Helmet from 'react-helmet'

import AppComponent from '../components/component'
import styles from './page.module.css'

const Page = (props) => {
  return (
    <div className={styles.container}>
      <Helmet>
        <title>5a2fnPHQNr</title>
        <meta property="og:title" content="5a2fnPHQNr" />
      </Helmet>
      <AppComponent src="%2Fplayground_assets%2Fh%3D1200p1.jpg"></AppComponent>
    </div>
  )
}

export default Page
