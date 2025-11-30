import React from 'react'
import About from '../Component/About'
import Value from '../Component/Value'
import Fact from '../Component/Fact'
import Feature from '../Component/Feature'
import Testimonials from '../Component/Testimonials'
import Breadcrum from '../Component/Breadcrum'

export default function AboutPage() {
  return (
<>
<Breadcrum title="About Us"/>
<About/>
<Value/>
<Fact/>
<Feature/>
<Testimonials/>

</>

)
}
