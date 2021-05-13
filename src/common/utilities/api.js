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
            'access-control-allow-origin': '*',
            'access-control-allow-methods': '*',
            'access-control-allow-headers': '*',
            "Content-type": "application/json",
            'Authorization': this.token
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
      fetch(this.getUrl(url), this.generateOptionsRequestObject(options))
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