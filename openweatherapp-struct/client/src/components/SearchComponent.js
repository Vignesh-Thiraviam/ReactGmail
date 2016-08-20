var React = require('react');
var {render} = require('react-dom');
var DataBase = require('./DataBase.js');
var dataCame = false;
var SearchComponent  = React.createClass({
  getInitialState : function(){
    return({data : {}});
  },
  handleButtonClick : function(){
    var cityname = this.refs.searchcity.value;
    console.log(cityname);
    var cityInfoObj ={};
    $.ajax({
      url : 'http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&appid=1b63a53e88bce772e9790797d4c0c4d9',
      dataType: 'json',
      type: 'GET',
      async: false,
      success : function(data){
        console.log("Inside success of api call new");
        cityInfoObj.lat=data.coord.lat;
        cityInfoObj.lon=data.coord.lon;
        cityInfoObj.humidity=data.main.humidity;
        cityInfoObj.description=data.weather[0].description;
        cityInfoObj.sunrise = data.sys.sunrise;
        cityInfoObj.sunset=data.sys.sunset;
        cityInfoObj.pressure=data.main.pressure;
        cityInfoObj.speed=data.wind.speed;
        cityInfoObj.deg=data.wind.deg;
        cityInfoObj.name =data.name;
        dataCame = true;
      },
      error : function(err){
        console.log("Inside error of ajax call");
      }
    }

  );
console.log(cityInfoObj);
this.setState({ data :cityInfoObj });
  },
  render: function(){
    var loadInfo ='';
    if(dataCame){
      loadInfo =<DataBase data = {this.state.data}/>;
    }
    return(<div>
            <input type = "text" ref="searchcity" placeholder = "Search for cities 1" />
            <button class = "btn btn-warning" onClick={this.handleButtonClick}>Add</button>
            {loadInfo}
          </div>);
  }
});
module.exports = SearchComponent;
