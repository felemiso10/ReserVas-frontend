import { clone } from 'ramda'

const buildFilesFormData = files =>
  files.reduce((formData, file) => formData.append('file', file, file.name), new FormData())

const appJson = 'application/json'
const contType = 'Content-Type'

export default class Api {
    constructor(baseUrl, token) {
        this.baseUrl = baseUrl
        this.token = token
    }

    getUrl = url => `${this.baseUrl}${url}`

    generateOptionsRequestObject = options => {
        var requestObject = {
          headers: {
            'accept': '*/*',
            'accept-encoding': 'gzip, deflate, br',
            'Accept-Language': 'es-ES,es;q=0.9',
            'access-control-allow-headers': 'Origin, Content-Type, X-Auth-Token, append,delete,entries,foreach,get,has,keys,set,values,Authorization',
            'access-control-allow-methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'access-control-allow-origin': '*',
            'Authorization': this.token,
            //'Connection': 'keep-alive',
            "Content-type": "application/json",
            //'Host': 'localhost:8080',
            //'Referer': 'http://localhost:19006/',
            //'Sec-Fetch-Dest': 'empty',
            //'Sec-Fetch-Mode': 'cors',
            //'Sec-Fetch-Site': 'same-site',
          }
        }
        //Si options tiene body, se añade en formato JSON al objeto del request
        if(options.body){
          requestObject = {
            ...requestObject,
            body: JSON.stringify(options.body)
          }
        }
    
        //Si options tiene method, se añade al objeto del request, si no se añade GET por defecto
        requestObject = {
          ...requestObject,
          method: options.method || 'GET'
        }
    
        return requestObject
      }
    
      get = (url, options={}) => 
        fetch(this.getUrl(url), this.generateOptionsRequestObject({...options, method: 'GET'}))
          .then(response => response.json())
          .catch(error => {
            console.log(error)
            throw { error }
          })
      post = (url, options={}) => 
        fetch(this.getUrl(url), this.generateOptionsRequestObject({...options, method: 'POST'}))
          .then(response => response.json())
          .catch(error => {
            console.log(error)
            throw { error }
          })

      put = (url, options={}) => 
        fetch(this.getUrl(url), this.generateOptionsRequestObject({...options, method: 'PUT'}))
          .then(response => response.json())
          .catch(error => {
            console.log(error)
            throw { error }
          })
        
      delete = (url, options={}) =>
        fetch(this.getUrl(url), this.generateOptionsRequestObject({...options, method: 'DELETE'}))
          .then(response => response.json())
          .catch(error => {
            console.log(error)
            throw { error }
          })
}