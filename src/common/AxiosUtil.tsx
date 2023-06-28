import axios from "axios";

/**
 * send
 * @param method 
 * @param url 
 * @param contentType 
 * @param data 
 * @param callback 
 */
export function send(method:string, url:string, contentType:string, data:object, callback: (r: any) => void): void {
  axios.defaults.withCredentials = true; 

  let defaultContentType = "application/json";
  if (contentType.length !== 0) {
    defaultContentType = contentType;
  }

  axios({
    headers: { 
      "X-CLIENT-KEY": process.env.REACT_APP_X_CLIENT_KEY,
      "Content-Type": defaultContentType
    },
    url: url,
    method: method,
    data: data
  })
  .then(function a(response) { 
    callback(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}