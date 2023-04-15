import '../styles/Home.css'
import { useState }  from 'react';

const Home = () => {

  const [blogs,  setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])

  return ( 

    <div className = "home">
      <h2>Homepage!</h2>
      <h3>900 million tons of food worldwide are wasted each year, according to a global survey conducted by the UN Environment Program (<a href="https://www.bbc.com/news/science-environment-56271385">reported by BBC</a>). 
        This is not only wasting valuable resources, but also contributing to environmental issues such as pollution and greenhouse gas emissions. As of 2021, around 830 
        million people around the world struggle with food security and hunger (<a href="https://www.who.int/news/item/06-07-2022-un-report--global-hunger-numbers-rose-to-as-many-as-828-million-in-2021">reported by the UN</a>). Reducing the rate of food waste would help to 
        alleviate this crisis and lessen the impact of food shortages.</h3>

      {blogs.map((blog) => (
        <div className="blog-preview" key = {blog.id}>
          <h2>Written by { blog.title }</h2>
        </div>
      ))}
    </div>
   );
}

export default Home;