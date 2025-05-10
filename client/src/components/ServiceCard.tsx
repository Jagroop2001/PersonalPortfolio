import { ReactNode } from 'react';
import React from "react";
 
interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <div className="flex service-card transition-transform duration-300 bg-gray-50 rounded-lg p-4">
      <div className="mr-4 text-secondary text-4xl">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
