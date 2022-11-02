import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ServiceItem from './ServiceItem'
import styles from "../../../styles/services.module.css"
import SectionSub from './SectionSub'

const Service = () => {
    return <section id="services">
        <Container>
            <Row>

                <Col lg="6" md="6">
                    <div className={styles.services_container}>
                        <div className="">
                            <ServiceItem title="App Development" icon="ri-apps-line" />


                            <ServiceItem title="Web Development" icon="ri-computer-line" />

                        </div>

                        <ServiceItem title="Full-Stack Development " icon="ri-code-s-slash-line" />

                    </div>

                </Col>
                <Col lg="6" md="6" className={styles.service_title}>


   <SectionSub subtitle="What I do" />
<h3 className='mb-0 mt-4'>Better Design</h3> 
<h3 className=' mt-4'>Better Experience</h3> 
<p>
Are you looking for a professional  website in Reactjs and Next.js developer. I am professional wordpress website developer and I develop your website. I develop websites with more than 1 years and all websites are very professional, responsive, and SEO optimized.


</p>
                </Col>
            </Row>


        </Container>

    </section>
}

export default Service