import { Link } from 'react-router-dom'
import lg1 from '../images/lg1.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle , faFacebookF,faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons'
function Signup() {
    return (
        <div>
            <div className="vh-100 d-flex  align-items-center" style={{backgroundImage: `url(${lg1})`, backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                <div className='row w-75 h-75 mx-auto border border-1 rounded-5' style={{backgroundColor : 'white'}}>
                    <div className='col border  border-white border-1 rounded-start-5 rounded-end-pill text-center' style={{backgroundColor : 'white'}}>
                        <h1 className="my-5">Registration</h1>
                        <form >
                        <div className="my-4 w-75 mx-auto">
                        <input type="text" className="form-control form-control-lg" id="username"  placeholder="Username"/>
                        </div>
                        <div className="my-3 w-75 mx-auto">
                        <input type="email" className="form-control form-control-lg" id="email"  placeholder="Email"/>
                        </div>
                        <div className="my-4 w-75 mx-auto">
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1"  placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary w-75 mx-auto" style={{backgroundColor : '#4895EF'}}>Register</button>
                    </form>
                    <div className='mx-auto my-4'>
                        <p>or register with social plateforms</p>
                        <div className='w-75 mx-auto d-flex border border-2 my-4 rounded-5'>
                        <div className=' w-25 py-2'><Link  to= '#' className="text-dark text-decoration-none"><FontAwesomeIcon  icon={faGoogle} size="lg"/></Link></div>
                        <div className='border border-1 w-25 py-2'><Link  to= '#' className="text-dark text-decoration-none"><FontAwesomeIcon icon={faFacebookF} size="lg"/></Link></div>
                        <div className='border border-1 w-25 py-2'><Link  to= '#' className="text-dark text-decoration-none"><FontAwesomeIcon  icon={faLinkedin} size="lg"/></Link></div>
                        <div className=' w-25 py-2'><Link  to= '#' className="text-dark text-decoration-none"><FontAwesomeIcon icon={faGithub} size="lg"/></Link></div>
                        </div>
                    </div>

                    </div>
                    <div className='col  border-1 rounded-end-5 rounded-start-pill   d-flex align-items-center' style={{backgroundColor : '#4895EF'}}>
                        <div className='text-center mx-auto'>
                        <h1>Welcome Back!</h1>
                        <p>Already Have An Account ?</p>
                        <Link to="/signin"><button type="submit" className="btn btn-outline-primary">Signin</button></Link>
                        </div>
                        
                    </div>
                </div>
             
           </div>
        </div>
      );
}

export default Signup;