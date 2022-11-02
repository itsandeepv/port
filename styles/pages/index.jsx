

import React, { Fragment } from 'react'
import About from './components/UI/About';
import Contact from './components/UI/Contact';
import Hero from './components/UI/Hero';
import Service from './components/UI/Service';
import Skill from './components/UI/Skill';
import Testimonial from './components/UI/Testimonial';



function index() {
  return <Fragment>
  <Hero/>
  <Service/>

<About/>

<Testimonial />
<Skill/>
<Contact/>

  </Fragment>
}

export default index;
