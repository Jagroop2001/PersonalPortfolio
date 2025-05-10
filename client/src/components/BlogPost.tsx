import React from "react";
interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  commentCount: number;
  image: string;
  path:string;
}

const BlogPost = ({ title, excerpt, date, commentCount, image,path }: BlogPostProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center mb-3">
          <span className="text-xs text-gray-500 mr-3">
            <i className="far fa-calendar mr-1"></i> {date}
          </span>
          <span className="text-xs text-gray-500">
            <i className="far fa-comment mr-1"></i> {commentCount} Comments
          </span>
        </div>
        <h3 className="text-lg font-medium mb-2 text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{excerpt}</p>
        <a href={`https://dev.to${path}`} target="_blank" className="text-primary text-sm font-medium hover:underline">Read More</a>
      </div>
    </div>
  );
};

export default BlogPost;
