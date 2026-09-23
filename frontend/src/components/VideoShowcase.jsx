import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { mockData } from '../data/mock';
import { Card, CardContent } from './ui/card';

const VideoShowcase = () => {
  const { successVideos } = mockData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % successVideos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + successVideos.length) % successVideos.length);
  };

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="casos-exito" className="py-24 bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-300">
            Descubre cómo hemos transformado marcas a través de experiencias memorables
          </p>
        </div>

        {/* Video Carousel */}
        <div className="relative">
          {/* Main Video Display */}
          <div className="relative overflow-hidden rounded-3xl">
            <Card className="bg-gray-800 border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative group cursor-pointer" onClick={() => openVideo(successVideos[currentIndex])}>
                  <img
                    src={successVideos[currentIndex].thumbnail}
                    alt={successVideos[currentIndex].title}
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-orange-600 shadow-2xl">
                      <Play className="text-white ml-1" size={32} fill="white" />
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center mb-3">
                      <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                        {successVideos[currentIndex].client}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {successVideos[currentIndex].title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-10"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all z-10"
            >
              <ChevronRight className="text-white" size={24} />
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
            {successVideos.map((video, index) => (
              <div
                key={video.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative cursor-pointer rounded-lg overflow-hidden transition-all ${
                  index === currentIndex
                    ? 'ring-4 ring-orange-500 scale-105'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-24 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Play className="text-white" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 text-4xl font-light"
            >
              ×
            </button>
            <div className="relative pt-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                title={selectedVideo.title}
                className="absolute inset-0 w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoShowcase;
