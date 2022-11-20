// this helper work like a library to automatizate the petitions. This functin is a closure

export const helperHttp = () => {
    // private mothos which represent the fecth petition
    const customFecth = ( endpoint, options) =>{

        // default header for the application
        const defaultHeader = {
            accept: "application/json"
        };

        // error handler wiht AbortController
        const controllers = new AbortController();
        options.signal = controllers.signal;

        // Default method for the petition if the user do no specify a method
        options.method = options.method || "GET" 

        // marche the default headers whi the user header 
        options.headers = options.headers ? {...defaultHeader, ...options.headers} : defaultHeader;

        // body handler info. if the body do not exist, delete it
        options.body = JSON.stringify(options.body) || false;
        if(!options.body) delete options.body;
        // console.log(options)

        // if the server do not answer abort the petition
        setTimeout(()=> controllers.abort(), 5000);

        // retorned promise and it options
        return fetch (endpoint, options)
        .then(res => 
            res.ok 
            ? res.json() 
            : Promise.reject({
                err: true,
                status: res.status || "00",
                statusText: res.statusText || "An unexpected error has occurred"
        }))
        
        .catch((err) => err)
    };


    // funtions which handel the  http method to be used. This method are public
    const get = (url, options = {}) => customFecth(url, options);

    const post = (url, options = {}) => {
        options.method = "POST";
        return customFecth(url, options);
    }

    const put = (url, options = {}) => {
        options.method = "PUT";
        return customFecth(url, options);
    }

    const del = (url, options = {}) => {
        options.method = "DELETE";
        return customFecth(url, options);
    }

    // return an object with all public methods
  return {
    get,
    post,
    put,
    del
  }
}

export default helperHttp