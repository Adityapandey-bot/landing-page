import React from 'react'
import vg from "../Assets/2p.png";
import {
    AiFillGoogleCircle, 
    AiFillAmazonCircle,
    AiFillYoutube,
     AiFillInstagram
} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        
        <main>
            <h1>Almighty</h1>
            <p>Solution to all your problems</p>
            </main>        
            
            </div>
    
        <div className="home2">
            <img src={vg} alt="Graphics" />
            <div>
            <p>we are with you and only solutions to the tech problems you face
        everyday.
         we are leading tech company whose aim is to increse the problem solving ability in childrens</p>
    
            </div>
        </div>

        <div className="home3" id='about'>
            <div>
                <h1>Who we are?</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis vel fugit doloribus quae, maiores voluptate maxime! Unde recusandae et cum velit? Ipsam nihil fugiat ex quo, magnam consequatur delectus debitis, iste vero distinctio alias eaque voluptatum non officiis omnis. Explicabo qui illum minus accusantium officia.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sequi sed voluptates reprehenderit magnam ex recusandae, inventore rem? Repellendus sunt fuga omnis non asperiores odit vitae inventore necessitatibus dolores. Unde voluptatem quam at magni ullam? Laborum fugiat, expedita consequuntur voluptatem sequi distinctio sunt corrupti vitae quos dolores qui reprehenderit accusantium eum, perspiciatis quidem aut ipsum atque, reiciendis amet itaque culpa! Cum provident aliquid sit, dignissimos consequatur explicabo corrupti eveniet sunt ipsa minus reiciendis qui quas ad excepturi impedit aliquam quae suscipit dolorem laudantium! Quia, sint. Laudantium, similique itaque!
                </p>
            </div>
        </div>

        <div className="home4" id='brands'>
            <div>
                <h1>Brands</h1>
                <article>
                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                <AiFillGoogleCircle/>
                <p>Google</p>
                    </div>
                    <div style={{
                        animationDelay: "0.3s"
                    }}>
                <AiFillAmazonCircle/>
                <p>Amazon</p>
                    </div>
                    <div style={{
                        animationDelay: "0.7s"
                    }}>
                <AiFillYoutube/>
                <p>Youtube</p>
                    </div>
                    <div style={{
                        animationDelay: "0.1s"
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