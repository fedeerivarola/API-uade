import {Component} from 'react';

const url ="http://localhost:8080/apiAgenda/";
const urlGetContactos="leerAgenda";


class ApiController extends Component
{
   
    getContactos(okBusqueda)
    {
        const endpoint = `${url}${urlGetContactos}`;
        console.log("Buscando")
        fetch(endpoint
        ).then ((response) => {
            
            return response.json();
        }).then (responseData => {
                //console.log(responseData);
            
                console.log("Recibi datos");
                okBusqueda(responseData);
                
          
          
          
        });
    }
}
export default new ApiController();