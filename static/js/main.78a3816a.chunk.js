(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],[,,,,,,function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var a=n(1),r=n(2),i=n(4),c=n(3),o=n(0),l=n.n(o),m=(n(13),n(7));console.log(e);var u="d0a3833f5778ca65ca346206e8e3534f",s=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={cityName:"",weatherData:null},e.getUserCity=function(t){e.setState({cityName:t.target.value})},e.formSubmission=function(t){t.preventDefault(),console.log(e.state.cityName),""!==e.state.cityName.trim()&&e.fetchWeatherData(e.state.cityName)},e.fetchWeatherData=function(t){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(u,"&units=metric")).then((function(e){return e.json()})).then((function(t){return e.setState({weatherData:t,cityName:t.name})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.fetchWeatherData("Vilnius")},e}return Object(r.a)(n,[{key:"render",value:function(){console.log(this.state.weatherData);var e=this.state.weatherData;return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"Weather App"),l.a.createElement("form",{onSubmit:this.formSubmission},l.a.createElement("input",{type:"text",placeholder:"Enter your city",onChange:this.getUserCity}),l.a.createElement("button",null,"Get Weather Data")),e&&l.a.createElement(m.a,{city:this.state.cityName,temp:e.main.temp,maxTemp:e.main.temp_max,minTemp:e.main.temp_min,humidity:e.main.humidity,feelsLike:e.main.feels_like,icon:e.weather[0].icon}))}}]),n}(o.Component)}).call(this,n(12))},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),r=n(2),i=n(4),c=n(3),o=n(0),l=n.n(o),m=function(e){Object(i.a)(n,e);var t=Object(c.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.city!==this.props.city||e.temp!==this.props.temp}},{key:"render",value:function(){return console.log("render from Weather component"),l.a.createElement("div",null,l.a.createElement("p",null,"Feels like: ",this.props.feelsLike,"\xb0C"),l.a.createElement("p",null,"City: ",this.props.city),l.a.createElement("img",{src:"https://openweathermap.org/img/wn/".concat(this.props.icon,"@4x.png"),alt:"weather icon"}),l.a.createElement("div",null,l.a.createElement("h1",null,"Current temperature: ",this.props.temp,"\xb0C")),l.a.createElement("div",null,l.a.createElement("p",null,"humidity:",this.props.humidity),l.a.createElement("p",null,"feeels like: ",this.props.feelsLike,"\xb0C"),l.a.createElement("p",null,"max temperature:",this.props.maxTemp,"\xb0C"),l.a.createElement("p",null,"min temperature:",this.props.minTemp,"\xb0C")))}}]),n}(o.Component)},,function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n(8);n.n(c).a.render(r.a.createElement(i.a,null),document.getElementById("root"))},,,function(e,t,n){}],[[9,1,2]]]);
//# sourceMappingURL=main.78a3816a.chunk.js.map