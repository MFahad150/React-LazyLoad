import '../App.css';
import star from '../Images/Star.png'


function Services (){
    return (
        <>
         <section id="services">
      <div>
        <h2>OUR SERVICES</h2>  
       </div>
       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt consequatur omnis mollitia nobis ab delectus hic itaque, rerum v, id aliquam.elit at <br /> Lorem ipsum dolor sit ng elit.  omnis mollitia nobis ab delectus hic itaque, rerum v, id aliquam.elit at</p>
       <div>
         <ul id="card">
           <li><img src={star} alt="" /><h5>Web Design</h5><p>Lorem ipsum dolor sit.<br />Lorem ipsum dolor sit.</p></li>
             <li><img src={star} alt="" /><h5>Graphics Designing</h5><p>Lorem ipsum dolor sit.<br />Lorem ipsum dolor sit.</p></li>
             <li><img src= {star}alt="" /><h5>Branding</h5><p>Lorem ipsum dolor sit.<br />Lorem ipsum dolor sit.</p></li>
             <li><img src={star} alt="" /><h5>Marketing</h5><p>Lorem ipsum dolor sit.<br />Lorem ipsum dolor sit.</p></li>
         </ul>
       </div>
    </section>
        </>
    );
}

export default Services;