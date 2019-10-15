import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        "mdbreact";

import project from './project.css';

const carousel1="https://thumbs.dreamstime.com/b/rock-band-silhouette-stage-vector-illustration-rock-band-silhouette-stage-105193097.jpg";
const carousel2="https://previews.123rf.com/images/krisdog/krisdog1903/krisdog190300061/121753426-a-musical-group-or-rock-band-playing-a-concert-in-silhouette.jpg";
const carousel3="https://cdn3.vectorstock.com/i/1000x1000/38/72/silhouette-musician-drummer-on-white-background-vector-23843872.jpg";

const CarouselPage = () => {
    return (
        <MDBContainer >
            <MDBCarousel
                activeItem={1}
                length={3}
                showControls={true}
                showIndicators={true}
                className="z-depth-1"

            >
                <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel1}
                                alt="First slide"
                            />
                            <MDBMask overlay="black-light" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Light mask</h3>
                            <p>First text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel2}
                                alt="Second slide"
                            />
                            <MDBMask overlay="black-strong" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Strong mask</h3>
                            <p>Second text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                            <img
                                className="d-block w-100"
                                src={carousel3}
                                alt="Third slide"
                            />
                            <MDBMask overlay="black-slight" />
                        </MDBView>
                        <MDBCarouselCaption>
                            <h3 className="h3-responsive">Slight Mast</h3>
                            <p>Third text</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </MDBContainer>
    );
};

export default CarouselPage;