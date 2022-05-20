import React from 'react'
import '../css/Style.css'

export default function Content() {
  return (
    <section class="container">
        <div class="site-content">
            <div class="posts">
                <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
                    <div class="post-image">
                        <div>
                            <img src={require("../assets/Blog-post/tomato-post-1.jpg")} class="img" alt="blog1"/>
                        </div>
                        <div class="post-info flex-row">
                            <span><i class="fas fa-calendar-alt text-gray"></i>May 11, 2022</span>
                        </div>
                    </div>
                    <div class="post-title" id="site-content">
                        <h2 href="#">Najlepsze porady na temat pomidorów Rzymskich</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae
                            adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a
                            nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni
                            illum similique veniam tempore unde?
                        </p>
                        <button class="btn post-btn">Czytaj więcej<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}
