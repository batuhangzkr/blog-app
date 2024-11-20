import React from 'react';

export const BlogCard = ({
  id,
  title,
  author,
  publishedDate,
  content,
  category,
  popularity,
  word_count,
  read_time,
  tags,
}) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col gap-4 border border-gray-700 hover:shadow-2xl hover:scale-105 transition-all">

      <h2 className="text-xl font-bold text-blue-400"><a href={`/DetailPage/${id}`}>{title}</a></h2>


      <div className="flex flex-wrap text-sm text-gray-400 gap-2">
        <span className="bg-gray-700 px-2 py-1 rounded-full">Yazar: {author}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">Tarih: {publishedDate}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">Kategori: {category}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">Okuma Süresi: {read_time}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">Kelime Sayısı: {word_count}</span>
        <span className="bg-gray-700 px-2 py-1 rounded-full">Popülerlik: {popularity}</span>
      </div>


      <p className="text-gray-300 text-sm leading-relaxed">
        {content.length > 100 ? content.slice(0, 100) + '...' : content}
      </p>


      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-blue-600 text-xs text-white px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
