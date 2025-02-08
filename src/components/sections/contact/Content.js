import React from "react";

const Content = () => {
    return (
        <section className="contact-part pt-60" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="contact-info">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 col-10" >
                            <div className="info-box" style={{ backgroundColor: '#f2f2f2' }}>
                                <div className="icon">
                                    <i className="flaticon-home" style={{ color: 'black' }}/>
                                </div>
                                <div className="desc" >
                                    <h4 style={{ color: 'black' }}>Office Address</h4>
                                    <p style={{ color: 'black' }}>A-34, 2nd Floor Laxmidhara Complex, Baroda Pristage, Varachha Road, Surat - 395006, Gujrat, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-10">
                            <div className="info-box" style={{ backgroundColor: '#f2f2f2' }}>
                                <div className="icon">
                                    <i className="flaticon-phone" style={{ color: 'black' }}/>
                                </div>
                                <div className="desc" >
                                    <h4 style={{ color: 'black' }}>Phone Number</h4>
                                    <p style={{ color: 'black' }}>
                                        +91 8141851456 <br /> +91 8141851456
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 col-10">
                            <div className="info-box" style={{ backgroundColor: '#f2f2f2' }}>
                                <div className="icon">
                                    <i className="flaticon-message" style={{ color: 'black' }}/>
                                </div>
                                <div className="desc">
                                    <h4 style={{ color: 'black' }}>Email Address</h4>
                                    <p style={{ color: 'black' }}>
                                        vrfashionjewellery0044@gmail.com <br /> vrfashionjewellery0044@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Content;
