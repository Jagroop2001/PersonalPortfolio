import { FaEnvelope, FaPhone, FaBirthdayCake, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub, FaDev, FaStackOverflow } from 'react-icons/fa';
import Jagroop from '@/public/me.jpeg'
 
const Sidebar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      {/* Profile Image */}
      <div className="flex justify-center mb-4">
        <div className="relative w-40 h-40 rounded-lg overflow-hidden bg-gray-100">
          <img 
            src={Jagroop}
            alt="Jagroop" 
            className="object-cover w-full h-full" 
          />
        </div>
      </div>
      
      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Jagroop Singh</h1>
        <p className="text-gray-600">Product Enthusiast</p>
      </div>
      
      {/* Contact Information */}
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="w-8 text-primary">
            <FaEnvelope />
          </div>
          <div>
            <p className="text-xs text-gray-500">EMAIL</p>
            <p className="text-sm text-gray-800">jagroop.product@gmail.com</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 text-primary">
            <FaPhone />
          </div>
          <div>
            <p className="text-xs text-gray-500">PHONE</p>
            <p className="text-sm text-gray-800">+91 9872869405</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 text-primary">
            <FaBirthdayCake />
          </div>
          <div>
            <p className="text-xs text-gray-500">PROFESSION</p>
            <p className="text-sm text-gray-800">Technical Product Manager</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="w-8 text-primary">
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className="text-xs text-gray-500">LOCATION</p>
            <p className="text-sm text-gray-800">India</p>
          </div>
        </div>
      </div>
      
      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://www.linkedin.com/in/jagroop-singh-7a59b4327/" target="_blank" className="text-gray-500 hover:text-primary transition-colors social-icon">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Jagroop2001" target="_blank"  className="text-gray-500 hover:text-primary transition-colors social-icon">
          <FaGithub />
        </a>
        <a href="https://x.com/jagroop_pm" target="_blank"  className="text-gray-500 hover:text-primary transition-colors social-icon">
          <FaTwitter />
        </a>
        <a href="https://dev.to/jagroop2001" target="_blank"  className="text-gray-500 hover:text-primary transition-colors social-icon">
          <FaDev />
        </a>
        <a href="https://stackoverflow.com/users/18431570/jagroop" target="_blank"  className="text-gray-500 hover:text-primary transition-colors social-icon">
          <FaStackOverflow />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
