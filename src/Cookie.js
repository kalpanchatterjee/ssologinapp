import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { useParams } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
const apiUrl = 'http://localhost:3001';

function Cookie() {
    let { id } = useParams();
    const history = useHistory();
    useEffect(()=>{
     sendGetRequest(id);
    },[]);
    const sendGetRequest = async (id) => {
        try {
            
            const decode = document.cookie!="" && document.cookie!=null && typeof(document.cookie)!="undefined"?JSON.parse(window.atob(document.cookie.split('.')[1])):0;
   
            // console.log(JSON.parse(window.atob(document.cookie.split('.')[1])))
            // if (decode.exp * 1000 < new Date().getTime()) {
            //     //logoutAction();
            //     alert('Time Expired');
            // }
            //var encodedString = btoa(string);
            //var decodedString = atob(encodedString);

            // if(typeof(document.cookie)!="undefined" && decode.exp * 1000 < new Date().getTime()){
            //     history.push("/", { url: id });
            // }
            // else
            //alert(document.cookie);
            if(document.cookie!="" && document.cookie!=null && typeof(document.cookie)!="undefined") window.location.replace("https://"+id+"/"+document.cookie);
            else history.push("/", { url: id });
            // let redUrl="https://"+id+"/"+document.cookie;
            // let form = ('<form action="' + redUrl + '" method="POST" id="myForm" >' +
            //                 '<input type="hidden" name="parameter1" value="'+document.cookie+'" />' +
            //                 '<input type="hidden" name="parameter2" value="Sample data 2" />' +
            //              '</form>');
            //              document.body.innerHTML+=form;
            //              document.getElementById("myForm").submit();

        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    return <></>
}
export default Cookie;