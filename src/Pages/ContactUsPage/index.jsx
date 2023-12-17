import React from 'react'
import Contact from '../../components/Contact'
import Footer from '../../Layout/Footer'
import Header from '../../Layout/Header'
import Navbar from '../../Layout/Navbar'
import NavbarHeading from '../../Layout/NavbarHeading'
import { Helmet } from 'react-helmet-async'

function ContactUsPage() {
  return (
    <>
     <Helmet>
        <title>Juan - Shoes Store | Contact Us</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <NavbarHeading />
      <Navbar />
      <Header
        title="contact us"
        prevLink="/"
        currentLink="/contact-us"
        prevPage="Home"
        currentPage="Contact Us"
      />
      <Contact/>
      <Footer />
    </>
  )
}

export default ContactUsPage