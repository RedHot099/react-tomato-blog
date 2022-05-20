import React from 'react'

export default function BlogLinks() {
  return (
    <div class="articles">
        <div class="article-head">
            <h5>Artykuły</h5>
            <h6>blogowe</h6>
        </div>
        <div class="cards container">
            <a href="blog">
            <div class="card-container one">
                <div class="img-holder">

                </div>
                <div class="card-text">
                    <h4>Pomidory Paprykowe</h4>
                    Pomidory paprykowe mają ciemnoczerwoną skórkę i mięsistą, soczystą pulpę. Są większe niż pomidory rzymskie i mają podłużny kształt.
                </div>
            </div>
            </a><a href="blog">
            <div class="card-container two">
                <div class="img-holder">

                </div>
                <div class="card-text">
                    <h4>Czarne Pomidory</h4>
                    Czarne pomidory mają ciemnoczerwoną skórkę i mięsistą, soczystą pulpę. Są średniej wielkości i mają kulisty kształt.
                </div>
            </div>
            </a><a href="blog">
            <div class="card-container three">
                <div class="img-holder">

                </div>
                <div class="card-text">
                    <h4>Pomidory Czekoladowe</h4>
                    Pomidory czekoladowe mają ciemnoczerwoną skórkę i mięsistą, soczystą pulpę. Są większe niż pomidory rzymskie i mają kulisty kształt. Dodatkowo, pomidory te mają lekko słodkawy smak.
                </div>
            </div>
            </a>
        </div>
    </div>
  )
}
