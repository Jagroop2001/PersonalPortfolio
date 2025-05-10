import React from "react";
 interface ClientLogoProps {
  logo: string;
  name: string;
}

const ClientLogo = ({ logo, name }: ClientLogoProps) => {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
      <img 
        src={logo} 
        alt={name} 
        className="max-h-12 opacity-80 hover:opacity-100 transition-opacity" 
      />
    </div>
  );
};

export default ClientLogo;
