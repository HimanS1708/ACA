import cp from "../../assets/Cp.png";
import ml from "../../assets/Ml.jpg";
import bc from "../../assets/bc1.png";
const posts = [
  {
    id: 1,
    title: 'Competitive Programming',
    href: '#',
    description:
      'ACA introduces the freshers to the vast world of competetive programming. Projects related to data structures and algorithms are also offered',
    im: cp
  },
  {
    id: 2,
    title: 'Machine Learning',
    href: '#',
    description:
      'ACA offers introductory and intermediate projects related to Machine Learning. In the past, we have offered projects in different subdomains of ML such as Reinforcemet Learning, Deep Learning',
    im: ml
  }
  ,
  {
    id: 3,
    title: 'Blockchain',
    href: '#',
    description:
      'ACA introduces the freshers to the vast world of competetive programming. Projects related to data structures and algorithms are also offered',
    im:bc
  }
  // More posts...
]

 function Project() {
  return (
    <div className="bg-black pt-8 pb-10 " id="projects">
        <div className="header">
          <h2 className="text-white text-7xl font-semibold">Projects</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3 pl-10 pr-10">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">

              <div className="group relative">
              <img class="pl-15 rounded-t-lg h-80" src= {post.im} alt="im description"></img>
                <h3 className="mt-3 text-5xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-lg leading-6 text-gray-600">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
  )
}
 export default Project;