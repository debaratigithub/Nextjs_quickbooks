
import { useState, useEffect } from "react";

import axios from "axios";



//const accessToken='eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..7nDz5DOLZRopTbH34z4ASA.7hzohSPTkuxrz1iDeMOOxC6C90I_vaIw3WwszZJ4VujmaaqwegR8H69CwgW1n_bmYHWqxffSS2fAcM53UB6c86M03zMr95mWL3afcxfsQiOa8pRnFULk4CoGxGAxxbPlAmR3Hvx7ivkhfZkWxxZXQQ1Kw5ZmlUsVs6-xSBp0CsKBwiZsIMFpk5bxUyxK43U21WB64nnMPnTilxM69F3z1dp_M_MXN2hkV2TKXdEGWY2iN6kcb3RIwGvyKH24xdfoXhjM3EImU27APTLfIfxkHfFsXxLnqZvvd4k5O90XMrIsFQjdajdeF4Fz_xwrhna82XOAyCURUHlIpow3LnBsi10pZA7A8blEnxLPL30nDKio-_5AhrgnpweysEcUH8NXRLW8E-xFgnsc4O2CRCHMd5arqGiBqZFrnkE8r_9tfHwaDI42V0SlW0-NiqXCn9iCJ1W_WIkZA5-uyHn6OunbovpRovFW_Jk-p8FXAhw_2G-fJwoOPGInsNNc_WSGsLBcNEMmzEBM4oempaXkLTextK9SOyJl_hc_Jidrll_rTt0qrMvCqXh5EbrL4kDsQHawiYm-lgs-YSMyAEczRB9A77c1fI1RMKLGPsKpGBVlwSgHZIYIIfzLfyMaQaJafmFokEzKZu0SI3JStlvuz8I9dojJfCE2v8dbVGH3-6fKDAOrnXT3RVdlAKP85lacafAH6t65gfbPLgLVYQjkarY_z9qBayA8yAn2uusSTECY7aE-kxVIo9YdMcDyRTmuRCDq3JPUn6gaa37tNoE7vjBNBrqYHULPQ_vlDrrQAQ8DpFVeD386z7yEnaaUTxYXY-LGFAZuyeR0HEPzm-C2GTz7-0aDOKVg3r94E9gVdbZM9o00u7TNmXOWUMbHINiroSaI.hTY6HY3QYCaXHr2hx7z1cA'

// axios.interceptors.request.use(
//   config =>{
//     config.headers.authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   error=>{
//     return Promise.reject(error);
//   }
// )




const Invoice = () => {
//   const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");

//   //axios using Promises
//     // useEffect(() => {
//     //   axios
//     //     .get("https://jsonplaceholder.typicode.com/posts")
//     //     .then((response) => setMyData(response.data))
//     //     .catch((error) => setIsError(error.message));
//     // }, []);

//   //axios using async await

//   const getApiData = async () => {
//     try {
//       const res = await axios.get("https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281011780/invoice/157?minorversion=65",
//       {
//         headers:{
//             'Authorization':`Bearer ${accessToken}`,
//             'Content-Type':'application/json'

//         }
//       }
      
//       );
//       setMyData(res.data);
//       console.log("data is",res.data)
//     } catch (error) {
//       setIsError(error.message);
//       console.log( "error is",error.message)
//     }
//   };

//   useEffect(() => {
//     getApiData();
//   }, []);

//var axios = require('axios');
var data = JSON.stringify({
  "Line": [
    {
      "Amount": 100,
      "DetailType": "SalesItemLineDetail",
      "SalesItemLineDetail": {
        "ItemRef": {
          "value": "1",
          "name": "Services"
        }
      }
    }
  ],
  "CustomerRef": {
    "value": "1"
  }
});

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281011780/invoice?minorversion=65\n',
  headers: { 
    'User-Agent': '{{UserAgent}}', 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..kC5p0eiAPgO_Z6Ae__O8RQ.jypDwTajxu-QQc4NH_6uuD1m7bxprRDtVv5yzUQR0HNwKyC5eOAp4fDyHneq0JpBcnEj-8j71A1d26A3zC7qLJxJMxKyc095f1S34K3tnEba_QC-v5sN27nrRqiXhh2HVew-hagUoNLE8m76MdQSWs1Nyyym4GJLHIm_XLz7yxdM8CM_DTeair59pwC5yxFsh6VYJsri0OcfyLLuYlYYd2U3jMazPwtqmBfpBleMRiMkpqALGY8rEokXqBztoJ87MeBtvG9GHxHVvYJ0Sr2w8uo6JN0W0tj_uvE_3ifQfKGHQxM4RDRDeRK_HQRUmisq3daQDb0Ud6qpCs3PouW6bEJxdn4xI8c8ek45rOmMdUhwsrgeQ-sv3gWhqA2Nwt36K-pJwik_CBK9mlroQ_XQ-loqXCuzUQ7Cl1wlec8utsZ2f_db9Cb81RZpQnbHlxE_De_XCnmBZJL-wTjtVgzVlRfvQzUvIllLFZ3xaF8ADKkRsJdIwVMbo2bFN3MPD1kAdd4PkpI-G6c3U9OpjCkhYjDo64b1_lPX0hd5d_LGVuc2DAk5UH1zNAQP60asdRlgwj5harE9tcmVU3hVLCXihsql0T4joEZEAjm0jSXGjUCo8DlTbN90BRAvpLk3R0PA9KkDKCzCVydbYFyh2gbbFFHbcSXSxX4fH8o7FgVZbMRuHCX1VQXJe7ENWzEYFvKZTNlGQHgZsaBvpGrcJnHz0qfrsr9_ikWBjXGSBbRIec2rNibpIfnwmLGy8JsqVQ0zVUWzQMsIiEd0EuGjofKXjOelb3H3uC0c5T7kTMwA91I_eJp7uXWXZmpQYhzK_qwYkhWiLbXoArM2KfXbpNHXx-Ah34JJ1224UgXcY_TOOMqKmYKie5zw9DPXrMacSO96.rBPnjuZNh5O_D3HYxP8fLA'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  return (
    <>
    <div className="main_cont_view"> 
      {/* <h1>Axios Example</h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="inp_wrap">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div> */}
      </div>
    </>
  );
};

export default Invoice;

