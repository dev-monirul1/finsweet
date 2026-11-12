import React from 'react'
import Container from '../../common/Container'
import { Link } from 'react-router-dom';

export const blogData = [
  {
    id: 1,
    title: "How to Build a Modern Website",
    slug: "how-to-build-a-modern-website",
    description: "Learn the basic steps to build a modern and responsive website using HTML, CSS, and JavaScript.",
    publishDate: "2026-11-01"
  },
  {
    id: 2,
    title: "Introduction to React JS",
    slug: "introduction-to-react-js",
    description: "A beginner-friendly introduction to React JS and its basic concepts.",
    publishDate: "2026-11-03"
  },
  {
    id: 3,
    title: "Why Learn JavaScript?",
    slug: "why-learn-javascript",
    description: "Discover why JavaScript is one of the most popular programming languages for web development.",
    publishDate: "2026-11-05"
  },
  {
    id: 4,
    title: "Responsive Web Design Tips",
    slug: "responsive-web-design-tips",
    description: "Some useful tips for creating websites that look great on mobile, tablet, and desktop devices.",
    publishDate: "2026-11-07"
  },
  {
    id: 5,
    title: "Getting Started with Tailwind CSS",
    slug: "getting-started-with-tailwind-css",
    description: "Learn how Tailwind CSS can help you create beautiful user interfaces quickly.",
    publishDate: "2026-11-09"
  },
  {
    id: 6,
    title: "Best Practices for Clean Code",
    slug: "best-practices-for-clean-code",
    description: "Learn some simple coding practices that can make your code cleaner and easier to understand.",
    publishDate: "2026-11-11"
  }
];

const BlogBody = () => {
  return (
    <section className='py-28'>
      <Container>
        <div className="grid grid-cols-3 gap-6 ">
          {blogData.map((item,index)=>(
            <Link to={`/blog/${item.slug}`} className='bg-white shadow-2xl p-4 rounded-xl  '>
              <div className="h-[250px] rounded-2xl bg-green-300"></div>
              <h3>{item.title}</h3>
              <p className='py-5'>{item.description}</p>
              <span>Publish Date: {item.publishDate}</span>
            </Link>
          ))}
          
        </div>
      </Container>
    </section>
  )
}

export default BlogBody