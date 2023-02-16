import {Link} from 'react-router-dom'
import '../Error/error.scss'

const ErrorPage = () => {
  return (
    <section className='section'>
      <h2>Error 404</h2>
    <p>Page Not Found!</p>
    <Link className="error-btn" to='/'>Return Home</Link>
    </section>
  );
};

export default ErrorPage;
