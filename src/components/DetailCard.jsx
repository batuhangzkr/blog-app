import React from "react";
export const DetailCard = ({ title, author, published_date, content }) => {

    
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto border border-gray-700">
         

      <h1 className="text-4xl font-bold text-blue-400 mb-6">{title}</h1>


      <div className="text-gray-400 text-sm mb-6">
        
        <p className="mb-2">
          <span className="font-semibold text-white">Yazar:</span> {author}
        </p>
        <p>
          <span className="font-semibold text-white">Yayın Tarihi:</span> {published_date}
        </p>
        
      </div>


      <div className="text-gray-300 leading-relaxed text-justify">
        <p>{content}</p>
      </div>
      
    </div>
  );
};
