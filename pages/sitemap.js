import Layout from '../components/layout/Layout'
import Link from 'next/link'
import { seoUseCases } from '../data/seo-use-cases'

export default function Sitemap() {
  // Group SEO use cases by category
  const groupedUseCases = {
    'General AI Prompts': seoUseCases.filter(useCase => 
      ['prompts-for-ai', 'free-ai-prompts', 'how-to-write-prompts-for-ai', 'how-to-write-effective-ai-prompts', 'best-practices-for-writing-ai-prompts', 'what-are-ai-prompts', 'what-are-prompts-in-ai', 'ai-prompts-examples', 'best-ai-prompts', 'good-ai-prompts', 'generative-ai-prompts', 'ai-prompts-generator', 'ai-generated-prompts'].includes(useCase.slug)
    ),
    'Platform-Specific Prompts': seoUseCases.filter(useCase => 
      ['chatgpt-prompt', 'claude-prompt', 'gemini-prompt', 'chatgpt-prompt-for-email-marketing', 'midjourney-ai-prompts', 'bing-ai-prompts', 'character-ai-prompts', 'suno-ai-prompts', 'novel-ai-prompts', 'leonardo-ai-prompts', 'playground-ai-prompts', 'luma-ai-prompts'].includes(useCase.slug)
    ),
    'Content Creation Prompts': seoUseCases.filter(useCase => 
      ['writing-prompt', 'blog-post-prompt', 'marketing-copy-prompt', 'social-media-prompt', 'product-description-prompt', 'ai-writing-prompts', 'ai-chat-prompts', 'ai-prompts-for-content-creation', 'how-to-write-ai-prompts'].includes(useCase.slug)
    ),
    'Image & Video Prompts': seoUseCases.filter(useCase => 
      ['image-prompt', 'video-prompt', 'ai-image-prompts', 'ai-art-prompts', 'how-to-write-ai-art-prompts', 'how-to-write-ai-image-prompts', 'best-ai-art-prompts', 'best-ai-image-prompts', 'ai-art-style-prompts', 'fun-ai-prompts-for-art', 'cool-ai-image-prompts', 'ai-image-generation-prompts', 'prompts-for-ai-image-generation', 'ai-prompts-for-images', 'negative-prompts-for-ai', 'dark-fantasy-ai-prompts', 'studio-ghibli-ai-prompts', 'ai-video-prompts', 'best-techniques-for-creating-hyper-realistic-ai-images', 'how-to-write-prompts-for-ai-image-generation', 'how-to-write-effective-prompts-for-ai-image-generation'].includes(useCase.slug)
    ),
    'Business & Professional Prompts': seoUseCases.filter(useCase => 
      ['ai-prompts-for-business', 'ai-prompts-for-marketing', 'ai-prompts-for-sales', 'ai-resume-prompts', 'ai-prompts-for-resume', 'ai-logo-prompts', 'ai-prompts-for-teachers', 'ai-character-prompts'].includes(useCase.slug)
    )
  };
  
  // Main site pages (not SEO use cases)
  const mainPages = [
    { title: 'Home', url: '/' },
    { title: 'AI Prompt Examples', url: '/ai-prompt-examples' },
    { title: 'ChatGPT Prompt Templates', url: '/chatgpt-prompt-templates' },
    { title: 'AI Prompt Generator', url: '/ai-prompt-generator' },
    { title: 'AI Art Prompts', url: '/ai-prompt-generator/ai-art-prompts' },
    { title: 'ChatGPT Prompts for Email Marketing', url: '/chatgpt-prompts-for/email-marketing' }
  ];
  
  return (
    <Layout
      title="Sitemap | PromptWritingStudio"
      description="Complete sitemap of PromptWritingStudio with links to all pages including our AI prompt generators, examples, and templates."
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Sitemap</h1>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            A complete directory of all pages on PromptWritingStudio, organized by category for easy navigation.
          </p>
          
          {/* Main Pages Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">Main Pages</h2>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map(page => (
                <li key={page.url}>
                  <Link href={page.url} className="text-blue-600 hover:underline">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* SEO Use Cases Sections */}
          {Object.entries(groupedUseCases).map(([category, useCases]) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">{category}</h2>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {useCases.map(useCase => (
                  <li key={useCase.slug}>
                    <Link 
                      href={`/ai-prompt-generator/seo/${useCase.slug}`} 
                      className="text-blue-600 hover:underline"
                    >
                      {useCase.h1}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Admin Section */}
          <div className="mt-16 p-6 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Admin Resources</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/sitemap.xml" className="text-blue-600 hover:underline">
                  XML Sitemap
                </Link>
                <span className="text-sm text-gray-500 ml-2">(For search engines)</span>
              </li>
              <li>
                <a href="https://courses.becomeawritertoday.com/admin" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  Admin Dashboard
                </a>
                <span className="text-sm text-gray-500 ml-2">(Login required)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
