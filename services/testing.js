import axios from "axios";

var token = "null";

export const please = async () => {
  try {
    await axios.get(
      "https://desk.zoho.eu/api/v1/tickets?orgId=20073540860",
      {
        headers: {
          "mode": "no-cors",
          Accept: "application/json",
          "Content-Type": "application/json",
          "Authorization": "Bearer 1000.2b7ee5ebd7200c56e479a6311f462e2d.885e76c55614531bb3368f434a080944"
        },
      }
    )
    .then(res => console.log("we got" + res.data));
  } catch (error) {
    return { code: "422", error };
  }
}

const getAccessToken = () => {
  fetch("https://accounts.zoho.eu/oauth/v2/auth/refresh?response_type=token&client_id=1000.Z9VA0AE0BZ84EPEIC1Q8QLL4C1G2IO&scope=Desk.tickets.ALL,Desk.tasks.ALL,Desk.basic.READ,Desk.settings.ALL,Desk.contacts.READ,Desk.contacts.CREATE&redirect_uri=http://localhost:3000/redirect", {
    "mode": "no-cors",  
  redirect: "follow"
  })
  .then(
    response => response.json()
  )
  .then(result => console.log("Gotten res: " + result))
}

export const questionFormData = (data, file) => {
  const formData = new FormData();
  formData.append("file", file);
  for(const name in data) {
    formData.append(name, data[name]);
  }
  
  // Sending the json data
  // fetch("https://cors-anywhere.herokuapp.com/https://inspirablebooks.freshdesk.com/api/v2/tickets", {
  //   method: "POST",
  //   headers: {   
  //     "Content-Type": "multipart/form-data",
  //     "Authorization": "Basic " + process.env.FRESHDESK_APP_APIKEY
  //   },
  //   body: formData
  // })
  // .then(response => console.log(response))
  // .then( result => {
  //     console.log(result, 'adhfjnskdjnajifisjksjgbdjsbkgdfjhg')
  //   })
  fetch("https://cors-anywhere.herokuapp.com/https://inspirable.atlassian.net/rest/servicedeskapi/servicedesk/INS/queue",{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Basic "+"aW5mb0BpbnNwaXJhYmxlLmlvOlBMQXpuM0lmTW5zdnZBbnZMQVpqRTBGRQ=="
    },
    redirect: 'follow'
  }).then(response=>{
    return response.json()
  })
  .then(result=>{
    console.log(result, 'adhfjnskdjnajifisjksjgbdjsbkgdfjhg')
  })
  .catch(error => console.log('error akdshfdj', error),
    // getAccessToken()
  );
}

export const something = (data) => {
    console.log("hello");
    fetch("http://localhost:4000", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
    .then(response => response.json())
    .then(data => console.log(data));

};

  export const getSomething = (data) => {
    fetch("http://localhost:4000/attachment", {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      })
    .then(response => response.json())
    .then(data => console.log(data));
}