import React, { useState, useEffect } from 'react'

import './supplylogin.css'
import { Link, useNavigate, } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login, clearErrors } from '../../../REDUX/Actions/supplierAction';

import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Supplylogin() {

  const { isAuthenticated, error, token } = useSelector(state => state.reducer);


  const tosatmessages = () => {
    toast.error("Error!", {
      position: 'top-center',
      theme: "colored",
    })

  }

  const navigate = useNavigate('')


  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login(name, password));

  };

  useEffect(() => {
    if (error) {
      tosatmessages(error)
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      const saveTokenToCookie = (token) => {
        Cookies.set('token', token)
      }
      saveTokenToCookie(token)
      navigate('/profilesupplier');

    }
  }, [dispatch, error, isAuthenticated, token, navigate]);


  return (
    <>
      <div className='container-supplyl4'>
        <div className='img-supplyl4'>
          <img src='/image/div2.jpg' alt='img' />
        </div>
        <div className='login-supplyl4'>
          <div className="pic210l4">
            <div></div>
            {/* <img src='https://s3-alpha-sig.figma.com/img/6cb7/38cb/9ca1ef/94b1c68d847bf8f99ce05df810?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ycl1Vuy2KMq7-hMXzJrCE-3U1TavpfJtgXYwKAAFCpiEaVBkQxNQ7oJrkKmK56MAVmH2wHiEJKqiZqgUeh-F8ZMIgc~k7QZXhcjXDVM7oNDqe6~MtlW02Ly4D37MUFp2UxqOjmhvINxccnkdAYYpJV90IoAWjYhVRogwbMxUe96Vbt1mVUOzMRSkcw0MgDhtYzHFgadEqnwLIv6Wac36TFW36dYeSJEkG9Z9iKpoNVRIQ7edQ4XbBePD5IprBV2ytI4zbvKondOOWFUdHmcXPCzRdo~fVmvfX1aTtYQFJHlL1JPFnIfOqOgswlXxumqDbwdT3NDiazm2JiKanFpfhg__' alt=''></img> */}

            <img src='/image/sq.jpg' alt=''></img>

          </div>

          <div className="bwell4">

            <div className='wel-supplyl4'>Welcome!</div>
            <div className='div-supplyl4'>

              <div className='user1l4'>User</div>
              <div className='supply1l4'>Contractor/Supplier</div>
            </div>

            <form onSubmit={handleLogin}>
              <div className='info-supplyl4'>
                <div className='user-logl4'>
                  <label>Name</label>
                  <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Enter you name of  your company' />
                </div>

                <div className='user-passl4'>
                  <label>Password</label>
                  <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter your password' />
                </div>
              </div>
              <div className='registration1l4'>
                <div >
                  <button type='submit' onClick={handleLogin}>Registration</button>
                </div>

                <div className='dosulppyl4'> Don't have an account.
                  <Link to='/Supplier' className='dkrl4'>Register</Link>


                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  )
}

export default Supplylogin












