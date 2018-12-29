import axios from "axios";
const LOAD_IMAGE = "LOAD_IMAGE";

export function fetchImageFromAPI() {
    return function(dispatch) {
      return axios.get("http://54.83.146.53:3001/fetchImage").then(({ data }) => {
        dispatch(loadImage(data));
      });
    };
}


export function loadImage(data){
    return {type:LOAD_IMAGE, payload:data};
}


