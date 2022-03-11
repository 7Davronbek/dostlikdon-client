import React, {Component} from 'react';

class Complaint extends Component {
    render() {
        return (
            <div>
                <section id="complaint">
                    <div className="d-flex align-items-center">
                        <img src="../icons/ticket.png" className="tick" alt=""/>
                        <h3 className="complaint-text">Shikoyatlar mavjudmi?
                            onlayn tarzda yuboring</h3>
                        <button type="button" className="btn py-3 shadow-none">Murojaat yuborish</button>
                        <img src="../icons/my-gov.png" className="tick ml-auto" alt=""/>
                    </div>

                </section>
            </div>
        );
    }
}

export default Complaint;