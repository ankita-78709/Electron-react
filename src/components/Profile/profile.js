import React from 'react';
import Drawer from './drawer';
import Carousal from './Carousal';
import About from './About';
import Work from './Work';
import Suggestions from './Suggestions';

const Profile = () => {
    return (
        <div className="d-flex h-100 flex-column">
            <div className="row flex-grow-1">
                <div className="col-3 sidebar-class">
                    {/*Side drawer component */}
                    <Drawer />
                </div>
                <div className="col-9" style={{ padding: "0px" }}>
                    <div class="jumbotron">
                        <div class="container">
                            {/*Carousal component */}
                            <Carousal />
                            {/*About me component */}
                            <About />
                            {/*About work component */}
                            <Work />
                            {/*Feedback component */}
                            <Suggestions />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile