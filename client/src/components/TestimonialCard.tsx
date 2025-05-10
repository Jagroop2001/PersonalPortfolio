import React from "react";
interface TestimonialCardProps {
  name: string;
  image: string;
  text: string;
  url?: string;
}

const TestimonialCard = ({ name, image, text,url="https://www.upwork.com/freelancers/~011a3b063764b2c901" }: TestimonialCardProps) => {
  const openUrl = () => {
    if(url){
      window.open(url, '_blank');
    }
  }
  return (
    <div className="bg-gray-50 rounded-lg p-4 cursor-pointer" onClick={openUrl}>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="font-medium text-gray-800">{name}</h3>
        </div>
      </div>
      <p className="text-sm text-gray-600">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
