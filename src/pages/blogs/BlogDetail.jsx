import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import SEO from '@/components/common/SEO';
import Card from '@/components/common/Card';
import { buttonVariants } from '@/components/ui/button';
import { Clock, User, Share2, Mail, MessageCircle, Link2, ArrowRight } from 'lucide-react';

import blogsData from '@/data/blogs.json';
import authorImg from '@/assets/images/about/team.jpg'; // Mock author image using the team placeholder

const BlogDetail = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    
    const blog = blogsData.find(b => b.slug === slug);
    
    // Redirect if not found
    useEffect(() => {
        if (!blog) {
            navigate('/blogs');
        }
        window.scrollTo(0, 0);
    }, [blog, navigate, slug]);

    if (!blog) return null;

    // Get 3 related posts (same category, exclude current)
    const relatedPosts = blogsData
        .filter(b => b.category === blog.category && b.id !== blog.id)
        .slice(0, 3);
        
    // If we don't have enough related posts in the same category, fill with others
    if (relatedPosts.length < 3) {
        const otherPosts = blogsData
            .filter(b => b.id !== blog.id && !relatedPosts.find(rp => rp.id === b.id))
            .slice(0, 3 - relatedPosts.length);
        relatedPosts.push(...otherPosts);
    }

    return (
        <main className="bg-white min-h-screen">
            <SEO title={`${blog.title} - Wow Global Studies`} description={blog.excerpt} url={`/blogs/${blog?.slug || slug}`} image={blog?.imageUrl} />
            
            {/* HEADER SECTION */}
            <section className="pt-[140px] pb-[40px] lg:pt-[180px] lg:pb-[60px] px-[20px] lg:px-[60px] max-w-[1000px] mx-auto text-center">
                
                {/* Breadcrumb */}
                <div className="mb-[24px] text-[13px] font-semibold text-[#888] tracking-[0.5px]">
                    <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="mx-[8px]">/</span>
                    <Link to="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
                    <span className="mx-[8px]">/</span>
                    <span className="text-primary">{blog.category}</span>
                </div>

                <div className="inline-block bg-[#f8f5fa] text-primary px-[16px] py-[6px] rounded-full text-[13px] font-bold mb-[24px]">
                    {blog.category}
                </div>

                <h1 className="font-sans font-bold text-[36px] lg:text-[56px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[32px] max-w-[900px] mx-auto">
                    {blog.title}
                </h1>
                
                {/* Meta Row */}
                <div className="flex items-center justify-center gap-[16px] text-[14px] font-semibold text-[#767676]">
                    <div className="flex items-center gap-[6px]">
                        <User size={16} className="text-primary" />
                        <span>{blog.author}</span>
                    </div>
                    <div className="w-[4px] h-[4px] rounded-full bg-[#d8cce0]"></div>
                    <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <div className="w-[4px] h-[4px] rounded-full bg-[#d8cce0]"></div>
                    <div className="flex items-center gap-[6px]">
                        <Clock size={16} className="text-primary" />
                        <span>{blog.readTime}</span>
                    </div>
                </div>
            </section>

            {/* FULL WIDTH FEATURED IMAGE */}
            <section className="px-[20px] lg:px-[60px] max-w-[1200px] mx-auto mb-[60px] lg:mb-[80px]">
                <div className="w-full h-[300px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-full object-cover" />
                </div>
            </section>

            {/* BODY CONTENT WITH STICKY SOCIAL SHARE */}
            <section className="px-[20px] lg:px-[60px] max-w-[1200px] mx-auto relative flex flex-col lg:flex-row gap-[40px] items-start mb-[80px]">
                
                {/* Floating Social Share (Sticky on desktop, horizontal on mobile) */}
                <div className="lg:sticky lg:top-[120px] flex flex-row lg:flex-col gap-[16px] text-[#888] z-20">
                    <button className="w-[44px] h-[44px] rounded-full border border-[#e8dced] flex items-center justify-center hover:text-primary hover:border-primary hover:bg-[#f8f5fa] transition-all bg-white shadow-sm">
                        <Share2 size={18} />
                    </button>
                    <button className="w-[44px] h-[44px] rounded-full border border-[#e8dced] flex items-center justify-center hover:text-primary hover:border-primary hover:bg-[#f8f5fa] transition-all bg-white shadow-sm">
                        <MessageCircle size={18} />
                    </button>
                    <button className="w-[44px] h-[44px] rounded-full border border-[#e8dced] flex items-center justify-center hover:text-primary hover:border-primary hover:bg-[#f8f5fa] transition-all bg-white shadow-sm">
                        <Mail size={18} />
                    </button>
                    <button className="w-[44px] h-[44px] rounded-full border border-[#e8dced] flex items-center justify-center hover:text-primary hover:border-primary hover:bg-[#f8f5fa] transition-all bg-white shadow-sm">
                        <Link2 size={18} />
                    </button>
                </div>

                {/* Article Content */}
                <div className="max-w-[700px] w-full mx-auto font-serif text-[17px] lg:text-[19px] leading-[1.8] text-[#333]">
                    <p className="font-sans text-[20px] lg:text-[24px] leading-[1.6] text-[#161616] mb-[40px] font-medium">
                        {blog.excerpt}
                    </p>
                    
                    <div 
                        className="blog-rich-text [&>p]:mb-[24px] [&>h2]:font-sans [&>h2]:font-bold [&>h2]:text-[28px] lg:[&>h2]:text-[32px] [&>h2]:text-[#161616] [&>h2]:tracking-[-0.5px] [&>h2]:mt-[40px] [&>h2]:mb-[20px] [&>h3]:font-sans [&>h3]:font-bold [&>h3]:text-[22px] lg:[&>h3]:text-[26px] [&>h3]:text-[#161616] [&>h3]:tracking-[-0.5px] [&>h3]:mt-[40px] [&>h3]:mb-[20px] [&>blockquote]:border-l-[4px] [&>blockquote]:border-primary [&>blockquote]:pl-[24px] [&>blockquote]:py-[8px] [&>blockquote]:my-[40px] [&>blockquote]:italic [&>blockquote]:text-[22px] [&>blockquote]:text-[#555] [&>blockquote]:bg-[#faf8fb] [&>blockquote]:rounded-r-[8px] [&>ul]:list-disc [&>ul]:pl-[24px] [&>ul]:mb-[40px] [&>ul]:space-y-[12px] [&>ul]:text-[#555] [&>li>strong]:text-[#161616] [&>li>strong]:font-sans"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* AUTHOR BIO CARD */}
                    <div className="mt-[60px] pt-[40px] border-t border-[#f0eaf2]">
                        <Card hoverEffect={false} className="bg-[#faf8fb] rounded-[16px] p-[24px] flex flex-col min-[600px]:flex-row items-center gap-[24px] text-center min-[600px]:text-left shadow-none border-none">
                            <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-none border-2 border-white shadow-md">
                                <img src={authorImg} alt={blog.author} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-[20px] text-[#161616] mb-[4px]">Written by {blog.author}</h4>
                                <p className="font-sans text-[15px] text-[#767676] mb-[12px]">Senior Visa Counsellor, ICCRC Certified</p>
                                <p className="text-[15px] text-[#555] leading-[1.5]">
                                    {blog.author} has over a decade of experience helping students navigate complex visa regulations and secure their futures abroad.
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* RELATED POSTS SECTION */}
            <section className="py-[80px] bg-[#faf8fb] border-y border-[#f0eaf2] px-[20px] lg:px-[60px]">
                <div className="max-w-[1200px] mx-auto">
                    <h2 className="font-sans font-bold text-[32px] leading-[1.1] text-[#161616] tracking-[-1px] mb-[40px]">
                        Keep Reading
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        {relatedPosts.map(related => (
                            <Link to={`/blogs/${related.slug}`} key={related.id} className="block group">
                                <Card hoverEffect={true} className="bg-white rounded-[20px] border border-[#f0eaf2] overflow-hidden flex flex-col h-full shadow-[0_8px_30px_rgba(0,0,0,0.03)] p-0">
                                    {/* Image */}
                                    <div className="w-full h-[200px] overflow-hidden relative">
                                        <img 
                                            src={related.imageUrl} 
                                            alt={related.title} 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-[16px] left-[16px] bg-white/95 backdrop-blur-sm px-[12px] py-[6px] rounded-[8px] text-[12px] font-bold text-primary shadow-sm border border-white/20">
                                            {related.category}
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-[24px] flex flex-col flex-grow">
                                        <h3 className="font-sans font-bold text-[20px] leading-[1.3] text-[#161616] mb-[12px] group-hover:text-primary transition-colors line-clamp-2">
                                            {related.title}
                                        </h3>
                                        
                                        {/* Meta & CTA */}
                                        <div className="mt-auto flex items-center justify-between pt-[16px]">
                                            <div className="flex items-center gap-[12px] text-[12px] font-semibold text-[#888]">
                                                <div className="flex items-center gap-[4px]">
                                                    <Clock size={14} />
                                                    <span>{related.readTime}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[6px] text-primary font-bold text-[13px] transition-transform duration-300 group-hover:translate-x-1">
                                                Read More <ArrowRight size={14} />
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CLOSING CTA BAND */}
            <section className="py-[60px] lg:py-[80px] bg-primary text-center px-[20px]">
                <div className="max-w-[800px] mx-auto">
                    <h2 className="font-sans font-bold text-[32px] lg:text-[48px] leading-[1.1] text-white tracking-[-1px] mb-[24px]">
                        Have Questions About Your Own Visa Journey?
                    </h2>
                    <p className="text-white/90 text-[16px] lg:text-[18px] mb-[32px] max-w-[600px] mx-auto">
                        Stop guessing what the embassy wants. Let our experts build a roadmap designed specifically for your profile.
                    </p>
                    <Link to="/contact" className={buttonVariants({ variant: 'custom', className: 'bg-white text-primary hover:bg-[#f8f5fa] px-[32px] py-[16px] rounded-[12px] font-bold text-[16px] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1' })}>
                        Book Consultation
                    </Link>
                </div>
            </section>

        </main>
    );
};

export default BlogDetail;
