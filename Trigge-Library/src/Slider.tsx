import '../src/img/chains.jpg'
import '../src/img/johnInLibrary.jpg'
import '../src/img/library.jpg'

export default function Carousel() {
    return (<>
        <div id="carouselExampleCaptions" class="carousel slide w-50">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="w-100">
                        <img src='../src/img/chains.jpg' class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>The Chained Library</h5>
                            <p>Welcome to the Fransis Trigge Chained Library</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src='../src/img/library.jpg' class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Trigge Library</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src='../src/img/johnInLibrary.jpg' class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </>)
}