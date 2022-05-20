import React from 'react'
import '../css/Style.css'

export default function Footer() {
  return (
    <footer class="footer">
        <div class="container">
            <div class="about-us" data-aos="fade-right" data-aos-delay="200">
                <h2>O nas</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia atque nemo ad modi officiis
                    iure, autem nulla tenetur repellendus.</p>
            </div>
            <div class="newsletter" data-aos="fade-right" data-aos-delay="200">
                <h2>Newsletter</h2>
                <p>Daj się zapomidorować</p>
                <div class="form-element">
                    <input type="text" placeholder="Email"/><span><i class="fas fa-chevron-right"></i></span>
                </div>
            </div>
        </div>
        <div class="rights flex-row">
            <h4 class="text-gray">
                Copyright ©2022 Jakub Eichner
            </h4>
        </div>
        <div class="move-up">
            <span><i class="fas fa-arrow-circle-up fa-2x"></i></span>
        </div>
    </footer>
  )
}
