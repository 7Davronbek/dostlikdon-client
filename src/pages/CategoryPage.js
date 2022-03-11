import React, {Component} from 'react';
import TopTitle from "../components/TopTitle";
import NavbarPart from "../components/NavbarPart";
import News from "../components/News";
import Complaint from "../components/Complaint";
import FooterPart from "../components/FooterPart";
import Services from "../components/Services";
import {connect} from "react-redux";
import {getNewsByMenu} from "../redux/actions/adminNewsAction";
import NewsCard from "../components/NewsCard";
import {CARD_1_SRC} from "../tools/constants";

class CategoryPage extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getNewsByMenu(this.props.match.params.url);
    }

    render() {
        return (
            <div>
                <TopTitle/>
                <NavbarPart/>

                {/*<News/>*/}

                <div className="container mt-4">
                    <div className="row">
                        {this.props.newsByMenu.map(item => (
                            <div className="col-4">
                                <NewsCard url={this.props.match.params.url} newsUrl={item.url} title={item.titleUz} createdAt={item.createdAt} count={item.viewCount} description={item.descriptionUz} src={item.photo}/>
                            </div>
                        ))}
                    </div>
                </div>


                <Complaint/>
                <Services/>
                <FooterPart/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        newsByMenu: state.news.newsByMenu
    }
}

export default connect(mapStateToProps, {getNewsByMenu})(CategoryPage);