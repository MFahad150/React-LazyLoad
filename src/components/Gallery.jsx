import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';
import img3 from '../Images/img3.jpg';
import img4 from '../Images/img4.jpg';
import img5 from '../Images/img5.jpg';
import img6 from '../Images/img6.jpg';

function Gallery() {
return (
    <>
    <section id="gallery">
    <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
  <div className="col">
    <div className="card h-100">
      <img src={img1} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Anita Austvika</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img2} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Box Water</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img3} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Drone Lençóis Maranhenses</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img4} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Vedant</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img5} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Brian Breeden</h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <img src={img6} className="card-img-top" alt="image not found" />
      <div className="card-body">
        <h5 className="card-title">Cai Fang</h5>
      </div>
    </div>
  </div>
</div>
</section>
    </>
);
}

export default Gallery;