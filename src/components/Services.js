import React, {Component} from 'react';

class Services extends Component {
    render() {
        return (
            <div>
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-2 py-30 border-right text-center position-relative">
                                        <img src="../icons/gerb.png" className="text-center" alt=""/>
                                        <h2 className="mb-0 service-name">O‘zbekiston Respublikasi Prezidentining
                                            rasmiy veb sayti</h2>
                                        <span className="hover-text position-absolute">data.gov.uz</span>

                                    </div>
                                    <div className="col-2 py-30 border-right position-relative text-center">
                                        <img src="../icons/my-gov-uz.png" className="text-center" alt=""/>
                                        <h2 className="mb-0 service-name">Davlat interaktiv
                                            xizmatlari yagona portali</h2>
                                        <span className="hover-text position-absolute">data.gov.uz</span>

                                    </div>
                                    <div className="col-2 py-30 border-right position-relative text-center">
                                        <img src="../icons/data-gov-uz.png" className="text-center" alt=""/>
                                        <h2 className="mb-0 service-name">O‘zbekiston Respublikasi
                                            ochik ma'lumotlari
                                            portali</h2>
                                        <span className="hover-text position-absolute">data.gov.uz</span>

                                    </div>
                                    <div className="col-2 py-30 border-right position-relative text-center">
                                        <img src="../icons/talim.png" className="text-center" alt=""/>
                                        <h2 className="mb-0 service-name">O‘zbekiston Respublikasi
                                            Maktabgacha Ta'lim
                                            Vazirligi</h2>
                                        <span className="hover-text position-absolute">data.gov.uz</span>

                                    </div>
                                    <div className="col-2 py-30 text-center position-relative">
                                        <img src="../icons/uzdon-mahsulot.png" className="text-center" alt=""/>
                                        <h2 className="mb-0 service-name">“O’ZDONMAHSULOT”
                                            aksiyadorlik
                                            kompaniyasi</h2>
                                        <span className="hover-text position-absolute">data.gov.uz</span>

                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default Services;