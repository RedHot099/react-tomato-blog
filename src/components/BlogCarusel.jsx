import React from 'react'
import '../css/Style.css'
//import '../css/aos.css'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function BlogCarusel() {
  return (
    <section>
        <div class="blog">
            <div class="container">
                <OwlCarousel class="owl-carousel owl-theme blog-post">
                    <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                        <img src={require("../assets/Blog-post/tomato-post-1.jpg")} alt="post-1"/>
                        <div class="blog-title">
                            <h3>Pomidory Paprykowe</h3>
                            <button class="btn btn-blog">Zasadź</button>
                        </div>
                    </div>
                    <div class="blog-content" data-aos="fade-in" data-aos-delay="200">
                        <img src={require("../assets/Blog-post/tomato-post-2.jpg")} alt="post-1"/>
                        <div class="blog-title">
                            <h3>Pomidory Czekoladowe</h3>
                            <button class="btn btn-blog">Zasadź</button>
                        </div>
                    </div>
                    <div class="blog-content" data-aos="fade-left" data-aos-delay="200">
                        <img src={require("../assets/Blog-post/tomato-post-3.jpg")} alt="post-1"/>
                        <div class="blog-title">
                            <h3>Pomidory Czarne</h3>
                            <button class="btn btn-blog">Zasadź</button>
                        </div>
                    </div>
                    <div class="blog-content" data-aos="fade-right" data-aos-delay="200">
                        <img src={require("../assets/Blog-post/tomato-post-5.jpg")} alt="post-1"/>
                        <div class="blog-title">
                            <h3>Pomidory Tygrysie</h3>
                            <button class="btn btn-blog">Zasadź</button>
                        </div>
                    </div>
                    </OwlCarousel>
            </div>     
        </div>       
    </section>
  )
}
