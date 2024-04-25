import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBIcon } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faGoogle,
    faInstagram,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Mock
const data = {
    icons: {
        faFacebookF,
        faTwitter,
        faGoogle,
        faInstagram,
        faLinkedin,
        faGithub,
    },
    products: ["Workouts", "Nutrition", "Features", "Directory"],
    usefulLinks: ["Home", "About Us", "Service", "Contact Us"],
    contactInfo: [
        {
            icon: "home",
            data: "NoneTeam@Gmail.com",
        },
        {
            icon: "envelope",
            data: "MuscleMikiSupport@gmail.com",
        },
        {
            icon: "phone",
            data: "+ 01 120592366",
        },
        {
            icon: "print",
            data: "+ 01 200154433",
        },
    ],
};

export default function Footer() {
    const renderSocialLinks = () => {
        return Object.keys(data.icons).map((key, index) => (
            <a href="#!" className="me-4 text-reset" key={index}>
                <FontAwesomeIcon icon={data.icons[key]} />
            </a>
        ));
    };

    const renderProducts = () => {
        return data.products.map((product, index) => (
            <p key={index}>
                <a href="#!" className="text-reset">
                    {product}
                </a>
            </p>
        ));
    };

    const renderUsefulLinks = () => {
        return data.usefulLinks.map((link, index) => (
            <p key={index}>
                <a href="#!" className="text-reset">
                    {link}
                </a>
            </p>
        ));
    };

    const renderContactInfo = () => {
        return data.contactInfo.map((info, index) => (
            <p key={index}>
                <MDBIcon color="secondary" icon={info.icon} className="me-3" />
                {info.data}
            </p>
        ));
    };

    return (
        <MDBFooter
            bgColor="light"
            className="text-center text-lg-start text-muted"
        >
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>{renderSocialLinks()}</div>
            </section>

            <section className="">
                <MDBContainer className="text-center text-md-start mt-5">
                    <MDBRow className="mt-3">
                        <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <MDBIcon
                                    color="secondary"
                                    icon="gem"
                                    className="me-3"
                                />
                                Muscle Miki
                            </h6>
                            <p>
                                MusclesGenerate Copyright 2024 JW Media, LLC,
                                parent company of MusclesMiki. All rights
                                reserved.
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            {renderProducts()}
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            {renderUsefulLinks()}
                        </MDBCol>

                        <MDBCol
                            md="4"
                            lg="3"
                            xl="3"
                            className="mx-auto mb-md-0 mb-4"
                        >
                            <h6 className="text-uppercase fw-bold mb-4">
                                Contact
                            </h6>
                            {renderContactInfo()}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div
                className="text-center p-4"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
            >
                © 2021 Copyright:
                <a
                    className="text-reset fw-bold"
                    href="https://mdbootstrap.com/"
                >
                    blockhaven.com
                </a>
            </div>
        </MDBFooter>
    );
}
