import { Container } from 'react-bootstrap';
import {useRef,useEffect} from 'react'
import './Home.css'
import { Link } from "react-router-dom";
import jQuery from 'jquery'

(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});


const Home = (props) => {

  const aboutSection = useRef(null)


  useEffect( () => {

    if(props.scroll === "About"){
    
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });
    }
    else{
      window.scrollTo({
        top: 0
      });
    }
  })



    return (
<div className='body'>
      <div style={{marginTop: 40,marginBottom:40}}>
          
          {/* <h1 className="mx-3 font-weight-bold text-white display-1 mb-5 pb-5">Welcome To Learning Forum</h1> */}
          <div>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="car2.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="huge.png" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="123.png" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    
        
          <div className='scroll1'>

          <Container fluid style={{textAlign:'center',paddingTop:30}}>
        
          <div className="container">
	<div className="row">
	    <br/>
	   <div className="col text-center">
		</div>
		
             
		
	</div>
		<div className="row">
	        <div className="col" style={{paddingBottom:20}}>
	        <div className="counter">
          <i className="fa-solid fa-chalkboard-user"></i>
    
      <h2 className="timer count-title count-number" data-to="200" data-speed="1500"></h2>
       <h3 style={{fontsize:"5px",color:"#e7aa0f"}} className='panel1Text' ><b> Active Teachers</b></h3>
    </div>
	        </div>
              <div className="col">
               <div className="counter">
               <i className="fa-solid fa-chalkboard-user"></i>
      <h2 className="timer count-title count-number" data-to="500" data-speed="1500"></h2>
      <h3 style={{fontsize:"5px",color:"#e7aa0f"}} className='panel1Text' ><b>Students Enrolled</b></h3>
    </div>
              </div>
              <div className="col">
                  <div className="counter">
                  <i className="fa-solid fa-chalkboard-user"></i>
      <h2 className="timer count-title count-number" data-to="15" data-speed="1500"></h2>
      <h3 style={{fontsize:"5px",color:"#e7aa0f"}} className='panel1Text' ><b>Courses</b></h3>
    </div></div>
              <div className="col">
              <div className="counter">
              <i className="fa-solid fa-chalkboard-user"></i>
      <h2 className="timer count-title count-number" data-to="8" data-speed="1500"></h2>
      <h3 style={{fontsize:"5px",color:"#e7aa0f"}} className='panel1Text'><b>Response Time</b> </h3>
    </div>
              </div>
         </div>
</div>

       

          </Container>
          <div style={{height:50}}></div>

          <Container fluid style={{backgroundColor:'#eec617'}}>
                <h1 className="text-black"style={{textAlign: 'center', paddingTop:40}}><b>Bridging the gap between your child and their future.</b></h1>
                <h3 style={{textAlign: 'center', paddingTop:3}}></h3>

                <div className='homePanel1'>
               
                  <div>
                  <img src="bulb.jpeg" className="rounded secondPanelImg" alt="..."/>
                  </div>
                  
                  <div>
                  <ul className='secondPanelText text-black'>
                  <li>One to one Intereactive sessions.</li>
                  <li>Free Demo Session.</li>
                  <li>Regular Homework and Reinforcement Exercises.</li>
                  <Link to="/Register" className="btn btn-dark">Register Now</Link>
                  </ul>
                  </div>

                </div>
          </Container>

          <div style={{backgroundColor:'white', height:50}}></div>

   
          <Container fluid style={{backgroundColor:'black', alignItems:'center',paddingBottom:45 }}>
                <h1 style={{textAlign: 'center', paddingTop:40}} className="text-white" ><b>Registration Process</b></h1>
                <h2 style={{textAlign: 'center', paddingTop:3}}className="text-white">Find your tutor in 3 simple steps:</h2>

                <div style={{textAlign: 'center', paddingTop:20, display: 'flex', justifyContent:'center'}}>

                    <img src="123icon.png" className="image1" style={{ paddingTop:40}}/>
                
                </div>
          </Container>

          <div style={{backgroundColor:'White', height:50}}></div>

          <div style={{backgroundColor:'White', height:20}}></div>
          <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example text-black p-3" style={{backgroundColor:'#d1cfca'}}tabIndex="0">
          <h1  className= "text-center" id="scrollspyHeading1 my-5">Founders: </h1>
          <p className= "text-center">
          
        </p>
      
      
        <div className="text-center" style={{display:'flex'}} ref={aboutSection} id="aboutSection">
      

        <div className='container'>
        <img src="founder1.jpeg" className="rounded-circle w-50 p-3" />  
        <p className="mx-auto mt-auto mb-auto">Muzammil Arif Zuberi</p>
        <p>Co-Founder TACGF</p>
        </div>
        
        <div className='container'>
        <img src="founder2.jpeg" className="rounded-circle w-50 p-3"/>
        <p className="mx-auto mt-auto mb-auto">Adeel Siddiqui</p>
        <p>Co-Founder TACGF</p>
        </div>

        </div>
          
        
       
        </div>
        </div> 
        </div>    
      </div>

      
  <footer className="footer text-center text-black">
  
  <div className="container p-4 pb-0">
   
    <section className="mb-4">
    
      <h3 className="mx-auto mt-auto mb-auto">Contact Us:</h3>
      <p className="mx-auto mt-auto mb-auto">Phone: +92 336 4828287</p>
      <p>Email: learningforum@gmail.com</p>

      <a
        className="btn btn-outline-dark btn-floating m-1"
        style={{backgroundcolor: "#3b5998"}}
        href="https://www.facebook.com/profile.php?id=100063575691859"
        role="button"
        ><i className="fab fa-facebook-f"></i  ></a>

      
      <a
        className="btn btn-outline-dark btn-floating m-1"
        style={{backgroundcolor: "#dd4b39"}}
        href="#!"
        role="button"
        ><i className="fab fa-google"></i></a>

     
      <a
        className="btn btn-outline-dark btn-floating m-1"
        style={{backgroundcolor:  "#ac2bac"}}
        href="https://www.instagram.com/learning_forum/"
        role="button"
        ><i className="fab fa-instagram"></i></a>


      <a
        className="btn btn-outline-dark btn-floating m-1"
        style={{backgroundcolor:  "#0082ca"}}
        href="#!"
        role="button"
        ><i className="fab fa-linkedin-in"></i></a>


     
    </section>
   
  </div>



  <div className="text-center p-3" style={{backgroundcolor: "rgba(0, 0, 0, 0.2)"}}>
   
   
  </div>

</footer>

     
</div>


    );
}

export default Home;