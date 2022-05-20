import React from 'react'
import '../css/Style.css'

export default function NavBar() {
  return (
    <nav class="nav">
        <div class="nav-menu flex-row">
            <div class="nav-brand">
                <a href="./" class="text-gray">Pomidorowo</a>
            </div>
            <div>
                <ul class="nav-items">
                    <a href="./">
                        <li class="nav-link">
                            Pomidory Rzymskie
                        </li>
                    </a>
                    <a href="react-tomato-blog/blog">
                        <li class="nav-link">
                            Pomidory Paprykowe
                        </li>
                    </a>
                    <a href="./blog">
                        <li class="nav-link">
                            Pomidory Czekoladowe
                        </li>
                    </a>
                    <a href="./blog">
                        <li class="nav-link">
                            Pomidory Czarne
                        </li>
                    </a>
                    <a href="./blog">
                        <li class="nav-link">
                            Pomidory Tygrysie
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </nav>
  )
}
