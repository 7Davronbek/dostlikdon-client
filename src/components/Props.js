import React, {useEffect, useState} from 'react';
import Cards from "./Cards";
import {API_PATH} from "../tools/constants";
import {getLanguage} from "../locales";


const Props = (props) => {

    // const [date, setDate] = useState("");

    // useEffect(() => {
    //     setTimeout(() => {
    //         let data = new Date();
    //         setDate(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())
    //     }, 1000)
    // });

    return (
        <div className="fafafa">
            <div className="container">
                <div className="row">
                    <div className="d-flex w-100 mb-4 top justify-content-between">
                        {/*<div><h3>{date}</h3></div>*/}
                        <div><h3>Yangiliklar</h3></div>

                        <div className="d-flex">
                            <div className="prev"><img src="/image/prev.svg" alt="Error"/></div>
                            <div className="next ml-3"><img src="/image/next.svg" alt="Error"/></div>
                        </div>
                    </div>

                    {props.news.map((item, index) => {
                        return (
                            <div className="col-4">
                                <Cards
                                    rasm={API_PATH + "file/get/" + item.photo}
                                    head={getLanguage() === "uz" ? item.titleUz : getLanguage() === "ru" ? item.titleRu : item.titleEn}
                                    lorem={item.descriptionUz}
                                    time={item.createdAt.slice(-8, -3) + " " + item.createdAt.slice(0, 11)}
                                    count={item.viewCount}
                                    url={item.url}
                                />
                            </div>
                        )
                    })}


                </div>
            </div>
        </div>
    );
};

export default Props;