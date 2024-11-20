'use client';
import { DetailCard } from '@/components/DetailCard';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
export default function DetailPage() {
  const params = useParams(); // Dinamik ID'yi alıyoruz
  const id = parseInt(params.id); // String olarak gelen ID'yi sayıya çeviriyoruz
  const pathname = usePathname(); 
  const router = useRouter(); 

  const handleNavigation = () => {
    if (pathname !== '/') {
      router.push('/');
    }
  };
  const [blogs, setBlogs] = useState([]); // Blog verileri
  const [isLoading, setIsLoading] = useState(true); // Yükleme durumu

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/blog.json"); // JSON dosyasını fetch ile alıyoruz
        if (!res.ok) {
          throw new Error("Blog JSON dosyasına erişilemiyor.");
        }
        const data = await res.json();
        setBlogs(data.blogs);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const blog = blogs.find((blog) => blog.id === id); // ID'ye göre blog bulunuyor

  // Yükleniyor durumunda
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="text-gray-400 text-xl">Yükleniyor...</div>
      </div>
    );
  }

  // Blog bulunamadıysa
  if (!blog) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-red-500">
        <div className="text-2xl">Blog bulunamadı!</div>
      </div>
    );
  }

  // Blog bulunduysa
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <button
        onClick={handleNavigation}
        className="bg-blue-500 text-white mt-1 px-4 py-4 rounded-full justify-start ">Geri</button>
      <div className="max-w-5xl mx-auto px-6 py-12">
      
        <DetailCard
          key={blog.id}
          title={blog.title}
          author={blog.author}
          published_date={blog.published_date}
          content={blog.content}
          category={blog.category}
          popularity={blog.popularity}
          word_count={blog.word_count}
          read_time={blog.read_time}
          tags={blog.tags}
        />
      </div>
    </div>
  );
}
