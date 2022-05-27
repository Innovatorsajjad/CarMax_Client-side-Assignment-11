import React from 'react';

const Blogs = () => {
    return (
        <div className='d-flex container mt-5 raw'>
            <div className="banner w-50 col-md-6">
                <img className='rounded' src="https://st.depositphotos.com/1610517/4023/i/450/depositphotos_40236645-stock-photo-did-you-know-education-concept.jpg" alt="" />
            </div>
            <div className="accordian w-50 my-auto border rounded col-md-6">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                1. Difference between javascript and nodejs
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">JavaScript is a programming language. It is running in any web browser with a proper browser engine.

                                NodeJs is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                2. When should we use nodejs and when should we use mongodb
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">NodeJs is an asynchronous event-driven JavaScript runtime. We will use it to create a server.

                                MongoDB is database it is used to storing data. So, when we need to store our data we should use MongoDB.</div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                3. Differences between sql and nosql databases
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <h3>SQL Database</h3><br />
                                1.SQL database is a relational database system.<br />
                                2.SQL database have static or pre-defined schema.<br />
                                3.SQL database are best suited for complex queries.<br />

                                <h3>NoSQL Database</h3>
                                1.NoSQL database is a non-relational database system. <br />
                                2.NoSQL database have dynamic schema. <br />
                                3.NoSQL database databases are not so good for complex queries. <br />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;