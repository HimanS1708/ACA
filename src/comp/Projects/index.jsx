import cp from "../../assets/Cp.png";
import ml from "../../assets/Ml.jpg";
import bc from "../../assets/bc1.png";
const posts = [
  {
    id: 1,
    title: 'Competetive programming',
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
    <div className="bg-black  py-24 sm:py-32 text-justify" id="projects">
      <div className="mx-auto  px-6 lg:px-8">
        <div className="mx-auto  lg:mx-0">
          <h2 className="text-3xl  font-bold tracking-tight text-white sm:text-4xl
           proj">PROJECTS</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-md grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-4 sm:pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-md flex-col items-start justify-between">

              <div className="group relative">
              <img class="h-auto max-w-xs" src= {post.im} alt="im description"></img>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white ">
                  <a href={post.href} className="hover:text-blue-800">
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
 export default Project;