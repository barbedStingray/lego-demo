import './App.css';
import theTeam from './Photos/theTeam.jpg'
import brickfigs from './Photos/bricks&minis.png'
import batman from './Photos/vacationBatman.jpg'
import pirates from './Photos/pirates.jpg'
import superman from './Photos/superman.jpg'

function App() {


  return (
    <div className="App">

      <div className='nav'>
        <img className='bricksFigs' src={brickfigs} alt='lego' />
        <h1>Crest Hill, IL</h1>
      </div>
      <div className='banner'>
        <img className='bannerImage' src={batman} alt='Two Storm Troopers' />
      </div>

      <div className='storeHours'>
        <h2>Store Hours</h2>
        <div className='holidayHours'>
          <h3>Halloween</h3>
          <p>10/31: 12pm - 3pm</p>
        </div>
        <div className='regularHours'>
          <h3>Regular Hours</h3>
          <p>Sunday: 11am - 5pm</p>
          <p>Mon - Fri: 11am - 7pm</p>
          <p>Saturday: 10am - 7pm</p>
        </div>
      </div>

      <button className='contact'>Contact Us!</button>

      <div className='storeContainer'>
        <div className='infoContainer'>
          <img className='bannerImage' src={superman} alt='lego' />
          <p className='textOverlay'>Our Inventory</p>
        </div>
        <div className='infoContainer'>
          <img className='bannerImage' src={pirates} alt='lego' />
          <p className='textOverlay'>Book an Event!</p>
        </div>
        <div className='infoContainer'>
          <img className='bannerImage' src={theTeam} alt='lego' />
          <p className='textOverlay'>Meet the Team!</p>
        </div>

      </div>



      <div>
        <p>Check out our Upcomming Events HERE</p>
      </div>

      <div>
        <p>Copyright Footer</p>
      </div>


    </div>
  );
}

export default App;
