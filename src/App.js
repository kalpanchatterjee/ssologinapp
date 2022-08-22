// import logo from './logo.svg';
import react,{useState,useEffect} from "react"
import './App.css';
import axios from 'axios'
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom';
const apiUrl = 'http://localhost:3001';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
function App({}) {
  let location=useLocation();
  
  useEffect(()=>{
    //&& decode.exp * 1000 > new Date().getTime()
    // alert("--->"+document.cookie);
    const decode = document.cookie!="" && document.cookie!=null && typeof(document.cookie)!="undefined"?JSON.parse(window.atob(document.cookie.split('.')[1])):0;
    if(document.cookie!="" && document.cookie!=null && typeof(document.cookie)!="undefined"){
          history.push("/loggedin")
    } 
    
  },[])

  const history = useHistory();
  const storedJwt = localStorage.getItem('token');
  const [jwt, setJwt] = useState(storedJwt || null);
  const getJwt = async () => {
    if(document.cookie==""||document.cookie==null || typeof(document.cookie)=="undefined"){
      const { data } = await axios.get(`${apiUrl}/jwt`,{ withCredentials: true });
       localStorage.setItem('token', data.token);
       document.cookie=data.token;
       setJwt(data.token);
       if(typeof(location.state)!='undefined' && location.state!=null && location.state!=''){
        history.push("/loggedin")
        window.location.replace("https://"+location.state.url+"/"+document.cookie);
       }
       else history.push("/loggedin")
    }else{
      history.push("/loggedin")
    }

  };
  return (
    <div className="App">
      <div>
      <br></br>
        <div>
          <span>Username</span>&nbsp;&nbsp;
          <span><input type="text"></input></span>
        </div>
        <br></br>
        <div>
          <span>Password</span>&nbsp;&nbsp;
          <span><input type="text"></input></span>
        </div>
        <br></br>
        <div><button onClick={()=>getJwt()}>Login</button></div>
        </div>
    </div>
  );
}

export default App;
