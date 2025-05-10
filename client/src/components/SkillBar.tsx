import React from "react";
 interface SkillBarProps {
  name: string;
  percentage: number;
  colorClass?: string;
}

const SkillBar = ({ name, percentage, colorClass = "bg-primary" }: SkillBarProps) => {
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-800">{name}</span>
        <span className="text-xs text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded">
        <div 
          className={`h-2 ${colorClass} rounded`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
