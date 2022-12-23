import { Outlet, Link } from "react-router-dom";
import  '../../styles.css';

const Layout = () => {

    const paths = {
	home: "/",
	blogs: "/blogs",
	contact: "/contact",
	google: "http://google.com",
    }

    const pages = ['home', 'blogs', 'contact', 'google'];
    const navLinks = pages.map(page => {
      return (
        <Link to={`${paths[page]}`}>
		{page}
	</Link> 
      )
    });

  return (
    <>
      <p>*************************************************************</p>
      <nav>{navLinks}</nav>
      <Outlet /> 
      <p>*************************************************************</p>
    </>
  );
};

export default Layout;

