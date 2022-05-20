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
                        <p>Pomidory rzymskie średniej wielkości, mają kształt kulisty i są żółte. Są smaczne i soczyste, a także bogate w witaminę C. Pomidory rzymskie łatwe w uprawie i nie wymagają dużo wysiłku. Pomidory te są idealne do sałatek, sosów i dań głównych. Pomidory rzymskie nadają się także do marynowania i konserwowania. Pomidory rzymskie są także często używane jako przyprawa do pizzy.</p>
                        <p>Rzymskie pomidory są czerwone i bardzo soczyste. Są idealne do sałatek i sosów. </p>
                        <p>Pomidory rzymskie są pochodzenia włoskiego i po raz pierwszy zostały wyhodowane w Rzymie. Pomidory tego gatunku są bardzo aromatyczne i mają intensywny smak.</p>
                        <p>Pomidory rzymskie są świetne do przygotowania sosu pomidorowego. Można je także dodawać do makaronu lub pizzy.</p>
                        <p>Pomidory rzymskie świetnie komponują się z innymi warzywami, takimi jak bakłażan czy cukinia.</p>
                        <p>Dodane do sałatki, pomidory rzymskie nadają jej intensywnego smaku i aromatu.</p>
                        <p>Pomidory rzymskie można także piec lub dusić. Są bardzo soczyste i mają wyrazisty smak.</p>
                        <p>Pomidory rzymskie to jeden z najpopularniejszych gatunków pomidorów na świecie.</p>
                        <p>Pomidory rzymskie pochodzą z Rzymu. Jest to miasto w środkowych Włoszech, które leży nad rzeką Tyber.</p>
                        <p>Rzym był największym i najpotężniejszym miastem w starożytnym świecie. Jego historia sięga ponad 2500 lat. Rzym założony został przez Etrusków w VIII wieku p.n.e. W 510 p.n.e. Rzym został przejęty przez Wolskich, a następnie w wyniku wojny z Samnitami w 275 p.n.e. stał się częścią Cesarstwa Rzymskiego. W czasach Cesarstwa Rzymskiego Rzym był stolicą i najważniejszym miastem w całym imperium. W 476 roku nastąpił upadek Cesarstwa Rzymskiego i Rzym został zajęty przez barbarzyńców. W 537 roku Rzym został odbity przez cesarza bizantyjskiego Justiniana I i stał się częścią Bizancjum. W tym okresie Rzym był drugim co do wielkości miastem w Bizancjum. W VIII wieku Rzym został zajęty przez Arabów, a następnie przez Normanów w 1084 roku. Normanowie zbudowali w Rzymie nową twierdzę - Castel Sant'Angelo. W 1144 roku Rzym został zajęty przez cesarza fryzyjskiego Konrada III. W tym okresie Rzym był stolicą cesarstwa fryzyjskiego. W 1277 roku Rzym został ponownie zajęty przez cesarza bizantyjskiego Andronikosa II. W tym okresie Rzym był stolicą cesarstwa bizantyjskiego. W 1347 roku Rzym został zajęty przez Włochów i stał się stolicą państwa włoskiego. W 1527 roku Rzym został zajęty przez wojska cesarskie i stał się stolicą cesarstwa rzymskiego. W 1870 roku Rzym został stolicą Królestwa Włoch. W 1946 roku Rzym został stolicą Republiki Włoskiej.</p>
                        <p><br /><br /></p>
                        <button class="btn post-btn">Czytaj więcej<i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
