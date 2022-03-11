import React, {Component} from 'react';
import InformationComplaints from "./InformationComplaints";
import InformationMedia from "./InformationMedia";
import InformationDescription from "./InformationDescription";
import {connect} from 'react-redux';
import {getOneNews} from "../redux/actions/adminNewsAction";

class InformationBody extends Component {
    componentDidMount() {
        console.log(this.props);
        this.props.getOneNews(this.props.match.params.newsUrl);
    }

    render() {
        return (
            <div className="container">
                <div className="row mt-30">
                    <div className="col-8">
                        <InformationDescription item={this.props.oneNews}/>
                    </div>
                    <div className="col-4">
                        <InformationMedia/>
                        <InformationComplaints/>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        oneNews: state.news.oneNews
    }
}

export default connect(mapStateToProps, {getOneNews})(InformationBody);