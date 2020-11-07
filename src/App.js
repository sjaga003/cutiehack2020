import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import StatsBox from './components/stats-box.js';

function App() {
  const [cases, setCases] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [tests, setTests] = useState(0);
  const [covidData, setCovidData] = useState({});

  const fetchFromApi = async () => {
    const data = await fetch('https://api.covidtracking.com/v1/us/daily.json');
    const jsonData = await data.json();
    return jsonData;
  };

  const getData = async () => {
    fetchFromApi().then((jsonData) => {
      // let dateString = jsonData[0].date.toString();
      // let year = dateString.slice(0, 4);
      // let month = dateString.slice(4, 6);
      // let day = dateString.slice(6, 8);
      // let completeDate = `${month}-${day}-${year}`;
      // const selectedDate = new Date(completeDate);
      // console.log(selectedDate);
      console.log(jsonData);
      const date = new Date();
      const dateString = `${date.getFullYear()}${(
        '0' +
        (date.getMonth() + 1)
      ).slice(-2)}${('0' + date.getDay()).slice(-2)}`;

      jsonData.map((data) => {
        if (data.date == dateString) {
          setCovidData({
            cases: data.positive,
            casesInc: data.positiveIncrease,
            deaths: data.death,
            deathsInc: data.deathIncrease,
            tests: data.totalTestResults,
            testsInc: data.totalTestResultsIncrease,
          });
        }
      });
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <section className="header">
          <div className="header-data">
            <h3>United States</h3>
            <div className="header-date">
              As of November 11, 2020{' '}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
              </svg>
            </div>
            <div className="header-stats">
              <StatsBox
                label="Cases"
                number={covidData.cases}
                inc={covidData.casesInc}
              />
              <StatsBox
                label="Deaths"
                number={covidData.deaths}
                inc={covidData.deathsInc}
              />
              <StatsBox
                label="Tests"
                number={covidData.tests}
                inc={covidData.testsInc}
              />
            </div>
          </div>
        </section>
        <section className="body">Hello</section>
        <section className="footer"></section>
      </main>
    </div>
  );
}

export default App;
