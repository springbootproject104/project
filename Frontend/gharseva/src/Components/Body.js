import Cook from '../images/cook.jpg';
import { Link } from 'react-router-dom';

function Body() {
    return ( 
        <div className="vh-100 d-flex  align-items-center" style={{backgroundImage: `url(${Cook})`, backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
            <div className='mx-auto'>
                < h1>Your Trusted Home Service Marketplace</h1> 
                <p>Connect with verified cooks, maids, shopkeepers, and flat owners in your area.</p>
                <Link to="signup"><button type="button" className="btn btn-secondary btn-lg">Join Now</button></Link>
            </div>   
        </div>
     );
}

export default Body;