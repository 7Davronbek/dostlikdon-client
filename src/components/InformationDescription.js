import React, {Component} from 'react';

class InformationDescription extends Component {
    render() {
        return (
            <div className="w-100">
                <section id="information-description">
                    <div className="info-icons">
                        <a href="#" className="text-decoration-none mr-5">{this.props.item.menuNameUz}</a>
                        <span className="icons icon-calendar cursor-pointer mr-2"/>
                        <span className="color-grey mr-5">{this.props.item.createdAt}</span>
                        <span className="icons icon-views cursor-pointer m-top-3 mr-2"/>
                        <span className="color-grey mr-5">{this.props.item.viewCount}</span>
                        <span className="icons icon-message m-top-3 cursor-pointer mr-2"/>
                        <span className="color-grey mr-5">100</span>


                    </div>
                    <h2 className="info-description-text">{this.props.item.titleUz}</h2>
                    <p className="info-content-text">{this.props.item.descriptionUz}</p>
                    <div className="comments-title">
                        <span className="text-name">Mavzuga izohlar</span>
                        <span className="opinion-number">2 ta fikr</span>
                    </div>
                    <div className="comment-area">
                        <img src="../icons/user-photo.png" alt=""/>
                        <textarea placeholder="izoh qoldirishingiz mumkin"/>
                    </div>
                    <div className="comments">
                        <img src="../icons/comment-user-1.png" alt=""/>
                        <div className="user-info">
                            <h3 className="name">Nigina Karimova</h3>
                            <p className="comment-text">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat
                                soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining
                                ortiqcha <a href="#" className="text-decoration-none">batafsil</a>  </p>
                            <div className="like">
                                <span className="icons cursor-pointer icon-open-heart mr-5"/>
                                <span className="color-grey">Javob qaytarish</span>
                                <span className="color-grey ml-auto">2 soat avval</span>
                            </div>
                        </div>
                    </div>
                    <div className="comments">
                        <img src="../icons/comment-user-1.png" alt=""/>
                        <div className="user-info">
                            <h3 className="name">Nigina Karimova</h3>
                            <p className="comment-text">Tadbirkorlik sub'ektlariga “nol'” darajali qo‘shilgan qiymat
                                soligi stavkasini qo‘llash natijasida xosil bo‘lgan qo‘shilgan qiymat soligining
                                ortiqcha <a href="#" className="text-decoration-none">batafsil</a>  </p>
                            <div className="like">
                                <span className="icons cursor-pointer icon-open-heart mr-5"/>
                                <span className="color-grey">Javob qaytarish</span>
                                <span className="color-grey ml-auto">2 soat avval</span>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        );
    }
}

export default InformationDescription;