import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { Chart } from "react-google-charts"
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = (props) => {
  const [currencyrate,setCurrencyRate] = useState()
  
  const chartdata = [
     ['Country Currency','Currency Value']
  ]
  const country = (currencyrate !== undefined ) && Object.keys(currencyrate.rates)
  
  const value = currencyrate !== undefined && Object.values(currencyrate.rates)
  
  chartdata !== undefined && (chartdata[0] =(country))
  chartdata !== undefined && (chartdata[1] = (value))

  useEffect(()=>{
    axios.get('http://localhost:3060/api/currencies')
         .then((response)=>{
          const result = response.data 
          console.log(result)
          setCurrencyRate(result)
         })
         .catch((err)=>{
          alert(err.message)
         })
  },[])
  const options = {
    title : "Currency rates with respect to USA 1 Dollar",
    hAxis : {title : "country name",viewWindow : { min :1, max : 100 }},
    vAxis : {title : "currency rate",viewWindow : { min :1, max : 100 }},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  }
  const handleClick = () => {
    props.history.push('/register')
  }
  return (
    <div>
    <div>
    <button type="button" class="btn btn-primary" onClick={handleClick}>Go Back</button>
      <h1>Currency Rates of different countries</h1>
      <p>with respect to American Dollars</p>
      {currencyrate !== undefined &&<b>Date : {currencyrate.date}</b>}
    {currencyrate !== undefined &&<ul>
      <li>1{currencyrate.base} Dollar : {currencyrate.rates.INR} Indian Rupees</li>
      <li>1{currencyrate.base} Dollar : {currencyrate.rates.EUR} EURO</li>
    <li> 1{currencyrate.base} Dollar: {currencyrate.rates.AED} UAE Dirham</li>
    <li> 1{currencyrate.base} Dollar: {currencyrate.rates.RUB} Russian Ruble</li>
    <li> 1{currencyrate.base} Dollar: {currencyrate.rates.AUD} Australia Dollar</li>
    </ul>}
    <b>Currency rates with respect to USA 1 Dollar</b>
    </div>
    <div>
    <Chart
    chartType="Bar"
    data={chartdata}
    options={options}
    width="80%"
    height="600px"
    legendToggle
      />
      </div>
      </div>
  )
}

export default Dashboard

//