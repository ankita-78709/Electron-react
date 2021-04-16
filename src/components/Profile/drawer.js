import React from 'react';

const Drawer = () => {
    //side draer component with some fontawesome icons and personal information
    return (
        <div className="drawer-class">
           <img src="Images/profile1.jpg" className="profile-image mx-auto d-block" alt="profile"/>
           <br/>
           <div className="profile-details">
           <i class="fas fa-id-card"></i>&nbsp;&nbsp;<span className="name-font"><strong>Ankita Raj</strong></span><br/>
           <i class="fas fa-briefcase"></i>&nbsp;&nbsp;<strong>React Js Developer| UI Developer</strong><br/>
           <i class="fas fa-map-marker-alt">&nbsp;&nbsp;</i><strong>Bangalore</strong><br/>
           <i class="fas fa-envelope"></i>&nbsp;&nbsp;<strong>ankitaraj655@gmail.com</strong><br/>
           <i class="fab fa-linkedin"></i>&nbsp;&nbsp;<strong><a rel="noopener noreferrer" href="https://www.linkedin.com/in/ankita-raj-78709" target="_blank">ankita-raj</a></strong><br/>
           <i class="fab fa-github"></i>&nbsp;&nbsp;<strong><a rel="noopener noreferrer" href="https://github.com/ankita-78709" target="_blank">ankita-raj</a></strong><br/>
           </div>
        </div>
    )
}

export default Drawer;