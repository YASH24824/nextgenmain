"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { blogs } from "../../blog/data/blogData";
import { CalendarDays, ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";

export default function Blog() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const scrollContainerRef = useRef(null);
  const searchBarRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  
  const postsPerPage = 6;

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
                          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (blog.tags && blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 10);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      checkScrollButtons();
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

  // Scroll to search bar function
  const scrollToSearchBar = () => {
    if (searchBarRef.current) {
      const offset = 20;
      const elementPosition = searchBarRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pagination handlers with scroll to search bar
  const goToPage = (page) => {
    setCurrentPage(page);
    setTimeout(() => {
      scrollToSearchBar();
    }, 100);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setTimeout(() => {
        scrollToSearchBar();
      }, 100);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setTimeout(() => {
        scrollToSearchBar();
      }, 100);
    }
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <section className="w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16">
        
        {/* Search Bar - Centered with ref */}
        <div ref={searchBarRef} className="mb-6 scroll-mt-4">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search articles by title, description or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:border-[#245586] focus:outline-none focus:ring-1 focus:ring-[#245586]/30 transition-all text-sm"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="mb-8">
          {/* Desktop View */}
          <div className="hidden md:flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#245586] text-white"
                    : "bg-transparent text-[#245586] border border-[#245586] hover:bg-[#245586]/5"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Mobile View - Slider */}
          <div className="md:hidden relative -mx-4 px-4">
        
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide gap-2 py-2 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-shrink-0 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-[#245586] text-white"
                      : "bg-white text-[#245586] border border-[#245586]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
     
          </div>
        </div>

        {/* Results count */}
     

        {/* Cards Grid - 6 per page */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {currentBlogs.map((blog, index) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.3,
                  delay: Math.min(index * 0.05, 0.4),
                }}
                className="h-[500px] flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Image - 50% height */}
                <div className="h-1/2 overflow-hidden bg-gray-100">
                  <motion.img
                    src={blog.mbimage}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Content - 50% height */}
                <div className="h-1/2 flex flex-col p-5">
                  {/* Title */}
                  <h2
                    className="text-xl font-bold tracking-tight line-clamp-2 mb-2 transition-colors duration-300 text-gray-900"
                    style={{
                      color: hoveredIndex === index ? blog.color : "#1a1a2e",
                    }}
                  >
                    {blog.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-3">
                    {blog.description}
                  </p>

                  {/* Tags - Limited to first 2 tags from array */}
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bottom Section with Date and Read More */}
                  <div className="mt-auto pt-1 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <CalendarDays size={13} strokeWidth={1.8} />
                      <span>{blog.date}</span>
                    </div>

                    <motion.div
                      className="flex items-center gap-1 text-sm font-medium text-[#245586]"
                      whileHover={{ x: 3 }}
                    >
                      <span>Read More</span>
                      <motion.div
                        animate={{
                          x: hoveredIndex === index ? 4 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
       

        {/* Pagination */}
    {totalPages > 1 && (
  <div className="mt-12 flex flex-col items-center justify-center gap-4">
   
    {/* Pagination Controls */}
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className={`p-2 rounded-lg border transition-all duration-300 ${
          currentPage === 1
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-[#245586] hover:bg-[#245586] hover:text-white hover:border-[#245586]"
        }`}
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === 'number' && goToPage(page)}
          className={`min-w-[40px] h-10 px-3 rounded-lg font-medium transition-all duration-300 ${
            currentPage === page
              ? "bg-[#245586] text-white"
              : "text-gray-600 hover:bg-gray-100"
          } ${typeof page !== 'number' ? 'cursor-default' : ''}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-lg border transition-all duration-300 ${
          currentPage === totalPages
            ? "border-gray-200 text-gray-300 cursor-not-allowed"
            : "border-gray-300 text-[#245586] hover:bg-[#245586] hover:text-white hover:border-[#245586]"
        }`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
     {/* Results Count */}
    {filteredBlogs.length > 0 && (
      <div className="text-sm text-gray-500 text-center">
        Showing {startIndex + 1}-{Math.min(endIndex, filteredBlogs.length)} of {filteredBlogs.length} articles
      </div>
    )}
    
  </div>
)}

        {/* Empty state */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-sm">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 px-5 py-2 bg-[#245586] text-white rounded-lg text-sm font-medium hover:bg-[#1a3d5c] transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}