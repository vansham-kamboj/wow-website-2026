import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import { Search, Clock, User, ArrowRight } from 'lucide-react';

import blogsData from '@/data/blogs.json';

const categories = ["All", "Visa Updates", "Country Guides", "Test Prep", "Success Stories", "Financial Aid"];

const BlogList = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    // Filter logic
    const filteredBlogs = blogsData.filter(blog => {
        const matchesCategory = activeCategory === "All" || blog.category === activeCategory;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-white min-h-screen">
            <SEO title="Blog - Wow Global Studies" description="Real Answers for Real Visa Questions. Visa updates, country guides, and test prep tips." />
            
            {/* HERO SECTION */}
            <section className="relative pt-[120px] pb-[60px] lg:pt-[160px] lg:pb-[100px] px-[20px] lg:px-[60px] bg-[#faf8fb]">
                <div className="max-w-[1200px] mx-auto text-center relative z-10">
                    
                    {/* Breadcrumb */}
                    <div className="mb-[20px] text-[13px] font-semibold text-[#888] tracking-[0.5px]">
                        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                        <span className="mx-[8px]">/</span>
                        <span className="text-primary">Blogs</span>
                    </div>

                    <h1 className="font-sans font-bold text-[28px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[16px]">
                        Real Answers for Real <span className="text-primary">Visa Questions.</span>
                    </h1>
                    
                    <p className="text-[16px] lg:text-[18px] leading-[1.6] text-[#767676] mb-[40px] max-w-[600px] mx-auto">
                        Your trusted source for breaking visa updates, detailed country guides, and actionable test prep tips.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-[500px] mx-auto relative group">
                        <div className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#888] group-focus-within:text-primary transition-colors">
                            <Search size={20} strokeWidth={2} />
                        </div>
                        <input 
                            type="text" 
                            placeholder="Search articles, guides, and tips..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border-2 border-[#e8dced] rounded-[16px] py-[16px] pl-[54px] pr-[20px] text-[15px] text-[#161616] outline-none focus:border-primary transition-colors shadow-[0_4px_15px_rgba(0,0,0,0.02)] focus:shadow-[0_8px_30px_rgba(147,51,234,0.1)] placeholder-[#aaa]"
                        />
                    </div>
                </div>

                {/* Bottom Fade to White */}
                <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
            </section>

            {/* CATEGORY FILTER BAR */}
            <section className="px-[20px] lg:px-[60px] pb-[40px] bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-wrap items-center justify-center gap-[10px] lg:gap-[14px]">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-[20px] py-[10px] rounded-full text-[14px] font-bold transition-all duration-300 border-2 ${
                                    activeCategory === category 
                                        ? 'bg-primary border-primary text-white shadow-md scale-105'
                                        : 'bg-white border-[#e8dced] text-[#555] hover:border-primary/50 hover:text-primary'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* BLOG GRID SECTION */}
            <section className="px-[20px] lg:px-[60px] pb-[80px] lg:pb-[120px] bg-white">
                <div className="max-w-[1200px] mx-auto">
                    
                    {filteredBlogs.length === 0 ? (
                        <div className="text-center py-[60px]">
                            <p className="text-[18px] text-[#767676] font-medium">No articles found matching your criteria.</p>
                            <button 
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                className="mt-[16px] text-primary font-bold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[60px]">
                                {filteredBlogs.map(blog => (
                                    <Link to={`/blogs/${blog.slug}`} key={blog.id} className="block group">
                                        <Card hoverEffect={true} className="bg-white rounded-[20px] border border-[#f0eaf2] overflow-hidden flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-0">
                                            {/* Image */}
                                            <div className="w-full h-[220px] overflow-hidden relative">
                                                <img 
                                                    src={blog.imageUrl} 
                                                    alt={blog.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div className="absolute top-[16px] left-[16px] bg-white/95 backdrop-blur-sm px-[12px] py-[6px] rounded-[8px] text-[12px] font-bold text-primary shadow-sm border border-white/20">
                                                    {blog.category}
                                                </div>
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="p-[24px] flex flex-col flex-grow">
                                                <h3 className="font-sans font-bold text-[22px] leading-[1.25] text-[#161616] mb-[12px] group-hover:text-primary transition-colors line-clamp-2">
                                                    {blog.title}
                                                </h3>
                                                <p className="text-[14px] leading-[1.6] text-[#767676] mb-[20px] line-clamp-3 flex-grow">
                                                    {blog.excerpt}
                                                </p>
                                                
                                                {/* Meta & CTA */}
                                                <div className="mt-auto flex items-center justify-between border-t border-[#f0eaf2] pt-[16px]">
                                                    <div className="flex items-center gap-[12px] text-[12px] font-semibold text-[#888]">
                                                        <div className="flex items-center gap-[4px]">
                                                            <User size={14} />
                                                            <span>{blog.author}</span>
                                                        </div>
                                                        <div className="w-[4px] h-[4px] rounded-full bg-[#d8cce0]"></div>
                                                        <div className="flex items-center gap-[4px]">
                                                            <Clock size={14} />
                                                            <span>{blog.readTime}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* Read More button overlay on hover (desktop only) or static link */}
                                                <div className="mt-[16px] flex items-center gap-[6px] text-primary font-bold text-[14px] transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More <ArrowRight size={16} />
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                            
                            {/* Load More Button */}
                            {filteredBlogs.length > 0 && (
                                <div className="text-center">
                                    <button className="px-[32px] py-[14px] rounded-[12px] font-bold text-[15px] border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                                        Load More Articles
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default BlogList;
