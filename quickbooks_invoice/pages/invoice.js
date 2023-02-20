
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
    'Authorization': 'Bearer eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..wBTTOZuR9co2YnBuWUUBww.x7RAO6Iz8yz4JsfuI4endWpPSMUPBfEhZTUlpAnMko9efDFCiXcVXzRJl8SLU8R698e31Gx7wrzgKCnLdOslovG2ZH4a3GS8vWSNEaqlV0vYtKEDTsykGdPb9AOemi6CCwPCuK-aeGFFkwjwA7Ysa1a260wgMKSA4-ToziQ-7AeSDpdxGJYTVvroc0CizAHhH7yzNHa1c4QKfKe6XSNTfGmheoqlFKucJMsosI-ZSULLUGW3ZtE1keG2YAvNAXDjnuedU5D5uyuHwIs-BTbBwfjN-GwqoSk6zrVtEoiR__YxtG2CetTUygAGuAIwsyX6_slQltlXnEss8TBUOOffW8Tb_k0H_SUA6Rz-KktDdCOcfWtrY8aWsREJt4REzhRZlOV1FLMiHJdRBWbaofdOpaVJabDL0jb5rhTPv3x9DXbXbi1ufDx-qDI9MwxEsCvpoK2gmwKE9mD_jAafcwmsrHaZNOYyqDRSRGr0HPUPptpoR5mbF9ZBlwQCGYm7i6yrcaDz7mLbpML5QkZsVKO3ImpBs3DLHhog2b-LwMPyCRfH3rLQHYAubs8cPA06Kt-rMFxpIVwIKaeEAlGpjN9nL96gGrQ-oQn7edXqN-mt4lwiVsJCzs_i1urcrCsidgirlTmnX_U1e_ENwSLGPnG6KIV-b74yNkuzhRn18_jrpMUZu8n6w7tuIY5IvV7XNumaWDBRiy5Z4vLijy3xdyU-3TyFWAxfatDHa0sbIUS1hspTdwXTuQbmApN-MUn9WH0HtgbgN7DOqlwC_2_cgUOQnOF57wbZIdpWrmBc-t1WWPtzEjVtTPcWD98Ks3vVVh4EhdiayzS1Z4fDjy2POqFiKR9WWsX_PDJiruPlpIXj0Unz8_AHom8UQVNyJ7OQGtdn.IWxYT9Hz9vXU7wn5dLcK_g'
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

