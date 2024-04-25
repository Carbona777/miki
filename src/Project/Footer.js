import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';



export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faFacebookF} />
  </a>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faGoogle} />
  </a>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
  <a href='' className='me-4 text-reset'>
    <FontAwesomeIcon icon={faGithub} />
  </a>
</div>

      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
               Muscle Miki
              </h6>
              <p>
              MusclesGenerate Copyright 2024 JW Media, LLC, parent company of
            MusclesMiki. All rights reserved.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                Workouts                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Nutrition
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Features
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Directory
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                About Us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Service
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
        NoneTeam@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                MuscleMikiSupport@gmail.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 120592366
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 200154433
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          blockhaven.com
        </a>
      </div>
    </MDBFooter>
  );
}