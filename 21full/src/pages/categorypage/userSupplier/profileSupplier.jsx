import React, { useState, useEffect } from 'react'
import './profilesupplier.css'
import EditSupplier from './EditprofileSupplier'
import Navbar from '../../../components/homepage/Navbar/navbar'
import Footer from '../../../components/homepage/footer/footer'

import Cookies from 'js-cookie';
import { logout } from '../../../REDUX/Actions/supplierAction'
import { useNavigate } from 'react-router-dom'


function ProfileSupplier() {
    const [changed, setChanged] = useState(false)
    const changed1 = () => setChanged(true)
    const changed0 = () => setChanged(false)

    const navigate = useNavigate();
    const handleLogout = () => {

        Cookies.remove('token', { path: '' })
        navigate('/'); // Redirect to homepage after logout


    };




    return (
        <>
            <Navbar />
            <div className="supwrap"></div>


            <div className="vmaindv">
                <div className="constructiondv">


                    <div className="cont1dv">
                        <div className="photodv">

                            <img className='img0dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                        </div>

                        <div className="rightdv">
                            <div className="mmdv" >
                                <div className="mm2dv"></div>
                                <button type='submit' onClick={changed1} className='upperdv'>Edit <i className="fa-regular fa-pen-to-square"></i></button>

                            </div>
                            {changed && <EditSupplier changed0={changed0} />}
                            <h4>Shubham Construction Co.</h4>
                            <p className='smedv'>Shubham Construction Co. for your for your next Construction project </p>

                            <div className="threes">
                                <span className='t1'>Service-Construction</span>
                                <span className='t2'><i className="fa-solid fa-phone"></i>+91 9284736542</span>
                                <span className='t3'>$100 to $200 per square foot</span>

                            </div>
                            <hr />

                            <div className="urightdv">
                                <p><i className="fa-solid fa-location-dot"></i>Greater Noida Uttar Pradesh</p>

                            </div>

                        </div>

                    </div>


                    <div className="aboutus">
                        <h3>About Us</h3>
                        <p>Shubham Construction Co., are a reputable construction company known for our commitment to excellence and quality craftsmanship. With years of experience in the industry, we have successfully completed numerous projects, ranging f

                            budget, while maintaining the highest standards of quality and safety.</p>

                    </div>

                    <div className="vphotos">
                        <h3>Photos</h3>
                        <div className="photo5">
                            <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />
                            <img className='img1dv' src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg' alt='' />

                        </div>
                    </div>

                    <div className="eder">

                        <button type='submit' className='btnedit' onClick={handleLogout}>Logout</button></div>

                </div>

            </div>

            <Footer />
        </>
    )
}
export default ProfileSupplier;