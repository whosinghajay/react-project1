import React from 'react'
import vg from '../assets/2.webp';
import {AiFillGoogleCircle,
        AiFillAmazonCircle,
        AiFillYoutube,
        AiFillInstagram
        } from 'react-icons/ai';

const Home = () => {
  return (
   <>
    <div className='home' id="home">
      <main>
      <h1>Learning React</h1>
      <p>Solution to all your problems</p>
      </main>
    </div>

    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only solution to the tech problem you face every day. We are leading tech company whose aim is to increase the problem solving ability in chiidren.
            </p>
        </div>
    </div>
    <div className="home3" id="about">
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae consectetur quasi harum fuga aut ullam quis officia autem sint. Sed facilis temporibus, hic distinctio nostrum quis a illo vero quam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur dolore unde veniam laudantium. Repudiandae modi neque placeat perspiciatis ullam dolores aperiam quod, fuga voluptas quae adipisci, hic minus quisquam.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati voluptatem, eligendi quam neque hic dicta quidem vero enim similique eaque et consequuntur placeat officiis quibusdam totam! Eum animi iste debitis.
                </p>
            </div>
        </div>
        <div className="home4" id="brands">
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay:"0.3s"
                    }}>
                        <AiFillGoogleCircle/>
                        <p>Google</p>
                    </div>

                    <div style={{
                        animationDelay:"0.5s"
                    }}>
                        <AiFillAmazonCircle/>
                        <p>Amazon</p>
                    </div>

                    <div style={{
                        animationDelay:"0.7s"
                    }}>
                        <AiFillYoutube/>
                        <p>Youtube</p>
                    </div>

                    <div style={{
                        animationDelay:"1s"
                    }}>
                        <AiFillInstagram/>
                        <p>Instagram</p>
                    </div>
                </article>
            </div>
        </div>
   </>
  )
}

export default Home
