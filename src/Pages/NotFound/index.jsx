import React from "react";
import './index.css'

function NotFound() {
    return (
        <div className="error" id="error">
            <div className="container">
                <div className="content centered">
                    <div className="image">
                        <img width="500" src="https://www.viio.me/htdocs_error/something-lost.png" alt="Not Found" />
                    </div>
                    <div className="text">
                        <h1>Oops, looks like the page is lost.</h1>
                        <p className="sub-header text-block-narrow">This is not a fault, just an accident that was not intentional.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
