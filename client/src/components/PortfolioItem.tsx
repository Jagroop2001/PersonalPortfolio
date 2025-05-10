import React from "react";
 interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
}

const PortfolioItem = ({ title, category, image }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
