import React, { useEffect, useRef, useState } from 'react'
import './supplier.css'
import { Link, useNavigate } from 'react-router-dom'
import Contractor1 from '../popup/Contractor1';
import { registerS } from '../../../REDUX/Actions/supplierAction';
import { useDispatch, useSelector } from 'react-redux';

import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Supplier() {
  const navigate = useNavigate()

  const { success, data } = useSelector(state => state.reducer)

  console.log(data);




  const inputRef = useRef(null)
  const [profilePic, setProfilePic] = useState('');

  const handleimg = () => {
    inputRef.current.click()

  }
  const changeimg = (event) => {
    const file = event.target.files[0];
    console.log(file)
    setProfilePic(event.target.files[0])
    setImage(event.target.value)
  }


  const [serviced, setServiced] = useState(false)
  const service1 = () => setServiced(true)
  const service0 = () => {
    setServiced(false)
    setService(sessionStorage.getItem('opts'));


  }
  const [service, setService] = useState("Services");




  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')

  const dispatch = useDispatch('')
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerS(name, phone, service, address, city, state, image, navigate, password))
  }

  useEffect(() => {
    const saveTokenToCookie = (token) => {
      Cookies.set('token', token)
    }


    if (success) {

      saveTokenToCookie(data.token)
      navigate('/');

    }
  }, [dispatch, success, data, navigate]);


  return (
    <>

      <div className='container-supplyl3'>
        <div className='img-supplyl3'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl3'>
          <div className="pic210l3">
          <Link to='/'><i className="fa-solid fa-arrow-left"></i></Link>
            <img src='/image/sq.jpg' alt=''></img>
            {/* <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img> */}
          </div>

          <form className="bwell3" onSubmit={(e) => handleSubmit}>
            <div className='wel-supplyl3'>Welcome!</div>
            <div className='div-supplyl3'>

              <Link to='/login' className='user1l3'>User</Link>
              <Link to='/supplier' className='supply1l3'>Contractor/Supplier</Link>
            </div>
            <div className='info-supplyl3'>
              <div className="Bhrl3">

                <div className="bhrl3">
                  <div className='user-logl3'>
                    <label htmlFor="mmr" >Name</label>
                    <input id='mmr' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter you name of  your company' />
                  </div>
                  <div className="honeservl3">
                    <div className="pn1l3">
                      <label htmlFor="mmr1">Phone no</label>
                      <input id="mmr1" type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Enter your phone no' />

                    </div>
                    <div className="pn2l3"  >

                      <label htmlFor='mmr2'>Service</label>

                      <input id='mmr2' type="text" onClick={service1} onChange={(e) => setService(e.target.value)} placeholder='Enter Service you provide'

                        value={service}
                      />
                      {/* , serviced */}




                    </div>


                  </div>
                  {serviced && <Contractor1 service0={service0} />}


                </div>


                <div className="pniml3" >


                  {profilePic ? (<img src={URL.createObjectURL(profilePic)} className='wiii' alt='' />) : (<label htmlFor="file-inputl3"><div className="dragerl3"></div><p>+ Upload profile picture</p></label>)}
                  <input type="file" value={image} onChange={changeimg} ref={inputRef} id="file-inputl3" style={{ display: 'none' }} className="upload-inputl3" accept="image/jpeg, image/png" />
                </div>






              </div>

              <div className="Adrpn3l3">
                <div>Addreess</div>
                <input id='dlr1' type="text" placeholder='' value={address} onChange={(e) => setAddress(e.target.value)} />

              </div>

              <div className="city-Statel3">
                <div className="pn4l3">
                  <div>City</div>
                  <input id='dlr2' type="text" placeholder='' value={city} onChange={(e) => setCity(e.target.value)} />
                </div>

                <div className="pn5l3">
                  <div>State</div>
                  <input id='dlr3' type="text" placeholder='' value={state} onChange={(e) => setState(e.target.value)} />
                </div>


              </div>



              <div className='user-passl3'>
                <label htmlFor='cce'>Password</label>
                <input id='cce' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='registration1l3'>
              <div >
                <button type='submit' onClick={handleSubmit}>Registration</button>
              </div>
              <div className='dosulppyl3'> Already have an account
                <Link to='/Supplylogin' className='dkrl3'>Login</Link></div>


            </div>

          </form>
        </div>
      </div>
      <ToastContainer />

    </>
  )
}

export default Supplier



