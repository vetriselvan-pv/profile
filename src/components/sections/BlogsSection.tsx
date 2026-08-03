import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { BlogArticle } from "../../types";
import { blogArticles } from "../../data/portfolioData";
import { X, Clock, ArrowRight, Loader2, ExternalLink } from "lucide-react";

export default function BlogsSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(4);
  const [mediumBlogs, setMediumBlogs] = useState<any[]>([]);
  const [isLoadingMedium, setIsLoadingMedium] = useState(false);

  useEffect(() => {
    if (selectedArticle?.id === "medium" && mediumBlogs.length === 0) {
      setIsLoadingMedium(true);
      fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vetriselvan_11")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "ok") {
            setMediumBlogs(data.items);
          }
        })
        .catch((err) => console.error("Failed to fetch Medium feed", err))
        .finally(() => setIsLoadingMedium(false));
    }
  }, [selectedArticle]);

  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedArticle]);

  const handleLoadArchive = () => {
    setVisibleCount(blogArticles.length);
  };

  return (
    <section
      id="blogs"
      className="py-20 bg-[#f4f0e6] border-y-2 border-[#454339]"
    >
      <div className="px-6 lg:px-10 max-w-[1120px] mx-auto">
        {/* Section Header */}
        <div className="mb-6 border-[#454339]">
          <h2 className="font-serif text-4xl lg:text-5xl font-black text-[#454339]">
            Blogs
          </h2>
        </div>

        {/* Article List */}
        <div className="space-y-0 border-t-2 border-[#454339]">
          {blogArticles.slice(0, visibleCount).map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group py-6 px-4 border-b-2 border-[#454339] hover:bg-[#ffffff] transition-all cursor-pointer flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between"
            >
              <div className="w-24 font-sans text-xs text-[#454339]/60 font-bold uppercase tracking-wider shrink-0">
                {article.date}
              </div>

              <div className="flex-1">
                <h3 className="font-serif italic text-xl font-bold text-[#454339] group-hover:underline decoration-1 mb-1">
                  {article.title}
                </h3>
                <p className="font-serif text-sm text-[#454339]/70 line-clamp-1">
                  {article.summary}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-sans text-[10px] font-bold uppercase tracking-wider bg-[#454339] text-[#fdfcf8] px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ArrowRight className="w-4 h-4 text-[#454339] group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Blog Detail Reading Modal */}
      {selectedArticle && createPortal(
        <div className="fixed inset-0 z-50 bg-[#454339]/70 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10 animate-in fade-in">
          <div className="bg-[#ffffff] border-2 border-[#454339] shadow-[10px_10px_0px_#454339] w-full max-w-3xl overflow-hidden flex flex-col max-h-[85vh]">
            {/* Modal Header */}
            <div className="p-5 bg-[#f4f0e6] border-b-2 border-[#454339] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#454339]"></span>
                <span className="font-sans text-xs font-bold tracking-widest text-[#454339] uppercase">
                  LOG_ID: {selectedArticle.id}
                </span>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="p-1 text-[#454339] hover:bg-[#454339] hover:text-[#fdfcf8] border border-[#454339] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 lg:p-10 overflow-y-auto space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs font-sans font-bold tracking-wider text-[#454339]/70 border-b-2 border-[#454339] pb-4 uppercase">
                <span>DATE: {selectedArticle.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#454339]" />{" "}
                  {selectedArticle.readTime}
                </span>
                <span>•</span>
                <div className="flex gap-2">
                  {selectedArticle.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#454339] text-[#fdfcf8] px-2 py-0.5 text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="font-serif italic text-3xl sm:text-4xl font-black text-[#454339] leading-tight">
                {selectedArticle.title}
              </h2>

              {selectedArticle.id === "medium" ? (
                <div className="space-y-4 mt-6">
                  {isLoadingMedium ? (
                    <div className="flex items-center gap-3 text-[#454339] font-sans text-xs font-bold uppercase tracking-widest border-2 border-[#454339] p-6 bg-[#f4f0e6]">
                      <Loader2 className="w-5 h-5 animate-spin" /> Connecting to Medium.sys...
                    </div>
                  ) : mediumBlogs.length > 0 ? (
                    mediumBlogs.map((blog: any) => (
                      <a 
                        key={blog.guid} 
                        href={blog.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="block group border-2 border-[#454339] p-5 hover:bg-[#454339] transition-all hover:-translate-y-1 shadow-[4px_4px_0px_#454339]"
                      >
                        <h4 className="font-serif font-black text-xl sm:text-2xl text-[#454339] group-hover:text-[#fdfcf8] mb-3 leading-tight">
                          {blog.title}
                        </h4>
                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-sans font-bold uppercase tracking-wider text-[#454339]/80 group-hover:text-[#fdfcf8]/80">
                          <span>{new Date(blog.pubDate).toLocaleDateString()}</span>
                          {blog.categories && blog.categories.length > 0 && (
                            <>
                              <span>•</span>
                              <div className="flex gap-1.5 flex-wrap">
                                {blog.categories.slice(0, 3).map((cat: string) => (
                                  <span key={cat} className="bg-[#454339] text-[#fdfcf8] group-hover:bg-[#fdfcf8] group-hover:text-[#454339] px-1.5 py-0.5">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                          <span className="flex-1 text-right flex items-center justify-end gap-1 text-[#454339] group-hover:text-[#fdfcf8]">
                            READ <ExternalLink className="w-3 h-3" />
                          </span>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="border-2 border-[#454339] p-6 text-sm font-sans font-bold uppercase tracking-widest text-[#454339]/60">
                      No logs found or transmission failed.
                    </div>
                  )}
                </div>
              ) : (
                <div 
                  className="font-serif text-base text-[#454339] space-y-4 leading-relaxed prose-sm md:prose-base"
                  dangerouslySetInnerHTML={{
                    __html: selectedArticle.content
                      .split('\n\n')
                      .map(paragraph => {
                        if (!paragraph.trim()) return '';
                        let html = paragraph;
                        html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>');
                        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                        html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer" class="underline decoration-[#454339] decoration-2 hover:bg-[#454339] hover:text-[#fdfcf8] transition-colors">$1</a>');
                        if (!html.startsWith('<h3')) {
                          html = `<p>${html}</p>`;
                        }
                        return html;
                      })
                      .join('')
                  }}
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-[#f4f0e6] border-t-2 border-[#454339] flex justify-between items-center text-xs font-sans font-bold tracking-widest uppercase">
              <span className="text-[#454339]/70">
                STATUS: VERIFIED_PUBLICATION
              </span>
              <button
                onClick={() => setSelectedArticle(null)}
                className="bg-[#454339] text-[#fdfcf8] px-5 py-2 font-sans font-bold uppercase tracking-widest border border-[#454339]"
              >
                CLOSE_LOG
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
