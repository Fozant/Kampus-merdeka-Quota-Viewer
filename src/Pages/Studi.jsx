import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import Header from '../Components/Header';
import './Home.css';
import Footer from "../Components/Footer";

const Home = () => {
  const [jobName, setJobName] = useState('');
  const [mitraName, setMitraName] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  
  const handleJobNameChange = (event) => {
    setJobName(event.target.value);
  };

  const handleMitraNameChange = (event) => {
    setMitraName(event.target.value);
  };
  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.get('https://api.kampusmerdeka.kemdikbud.go.id/studi/browse/activity', {
        params: {
          keyword: jobName,
          mitra_key: mitraName,
          location_key: location,
          limit : 100,
        },
      });
      setApiData(response.data.data); // Update apiData state here
    } catch (error) {
      console.error('Error fetching API data:', error);
    } finally {
      setLoading(false);
    }
  };
  const handleSearchButtonClick = () => {
    const mitraNameValue = mitraName.trim();
    if (mitraNameValue !== '') {
      const searchQuery = new RegExp(mitraNameValue, 'gi');
      const bodyText = document.body.innerText;
      if (searchQuery.test(bodyText)) {
        window.find(mitraNameValue);
      } else {
        alert(`No match found for "${mitraNameValue}"`);
      }
    } else {
      alert('Please enter a valid search term');
    }
  };


  return (
  <div className='all'>
    {/* <Header/> */}
    <Navbar />
    <h1>Studi Independen quota viewer</h1>
    <br />
    <br />
    <form id="register-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <input
          className="Job Name"
          placeholder="Enter Position Name here, please copy exact name"
          name="jobName"
          value={jobName}
          onChange={handleJobNameChange}
        />
        <i className="icon fa-solid fa-envelope"></i>
      </div>
     
      <div className="input-group">
        <input
          className="Activityname"
          placeholder="Enter location name here, please copy exact name
          [DO NOT INCLUDI DI, FOR EXAMPLE= KOTA BANDUNG, AND NOT DI KOTA BANDUNG]"
          name="location"
          value={location}
          onChange={handleLocation}
        />
        <i className="icon fas fa-lock"></i>
      </div>
      <button className="submit-button" type="submit">Submit</button>
    </form>




    <div className="api-data">
      {loading ? (
        <p>Loading...</p>
      ) : apiData ? (
        <div className='form'>
          <button className="Search" onClick={handleSearchButtonClick}>
            If there is more than 1 result, click here to go to your position, Based on your mitra name
          </button>
          <h2>Position Information:</h2>
          {apiData.map((item) => (
            <table className="data-table fixed-size">
              <tr>
            <div key={item.id} className="data-row">
                <td>
                
                <p> Name Mitra  : {item.mitra_name}</p>
          <p>Nama Program : {item.name}</p>
          
          <p class="bold-text">Total Kuota Posisi       : {item.participants_count}</p>
         
          <p>Credits Count: {item.credits_count}</p>
          <p>Activity Type: {item.activity_type}</p>
          <p>Location: {item.location}</p>
          
          <p>Apakah TerCertified: {item.certified ? 'Yes' : 'No'}</p>
         
                </td>
              
                <td>
                <div className="api-logo">
                <img src={item.logo} alt="Mitra Logo" class="logo-img" />
                </div>
                </td>
            </div>

            </tr>
            </table>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
    <Footer /> 
  </div>
);

};

export default Home;
