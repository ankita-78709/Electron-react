import React from 'react';
import axios from 'axios';

const Carousal = () => {

    //axios call to download the CV on Click of button
    const downloadCV = () => {
        axios({
            url: '/files/cv.pdf',
            method: 'GET',
            responseType: 'blob'
        })
            .then((response) => {
                const url = window.URL
                    .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'file.pdf');
                document.body.appendChild(link);
                link.click();
            })
    }
    
    return (
        <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active" >
                    <img className="d-block w-100 carousal-image" src="/Images/carousal-1.jpg" alt="First slide" />
                    <div className="carousal-item-text">
                        Hi ! I am a UI developer with an expeience of 2.4 years in developing desktop as well as web applications using React, Redux and Hooks
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousal-image" src="/Images/carousal-1.jpg"
                        alt="Second slide" />
                    <div className="carousal-item-text">
                        You can view my CV here
                        <span className="m-2">
                            <button type="button" class="btn btn-outline-secondary" onClick={downloadCV}>
                                <i class="fas fa-download"></i> Download CV  
                                </button>
                        </span>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousal-image" src="/Images/carousal-1.jpg"
                        alt="Third slide" />
                    <div className="carousal-item-text">
                        Some of my hobbies include Travelling, Cooking, Binge Watching(why not! <i class="fas fa-grin-stars"></i>   ) and Creating DIY art items
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousal;