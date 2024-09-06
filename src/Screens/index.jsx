import React from 'react'
import cssCls from './screen.module.css'
import HeroPage from './HeroPage'
import AboutPage1 from './AboutPage1'
import WorkPage from './WorkPage'
import ClientPage from './ClientPage'
import AboutPage2 from './AboutPage2'
import ContactPage from './ContactPage'
import DemoPage from './DemoPage'
function DashBoard() {
  return (
    <div className={`${cssCls.rootContainer}`}>
      <HeroPage/>
      <AboutPage1/>
      <WorkPage/>
      <ClientPage/>
      <AboutPage2/>
      <ContactPage/>
      {/* <DemoPage/> */}
    </div>
  )
}

export default DashBoard