import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import ServiceSection from "../components/UI/ServicesList";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import OurMembers from "../components/UI/OurMembers";

const Service = () => {
  return (
    <Helmet title="services">
      <CommonSection title="our service" />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Our services</h6>
            </Col>

            {/* {carData.slice(0, 6).map((item) => (
      
              <CarItem item={item} key={item.id} />
            ))} */}
            <ServiceSection  />
          </Row>
        </Container>
      </section>
      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Service;
