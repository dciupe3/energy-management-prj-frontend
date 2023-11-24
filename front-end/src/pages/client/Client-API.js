import {HOST} from '../../components/Hosts';
import RestApiClient from "../../components/api/rest-client";


const endpoint = {
    person: '/admin/clients'
};

function getClients(callback) {
    let request = new Request(HOST.client_microservice_api + endpoint.person, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getClientById(params, callback){
    let request = new Request(HOST.client_microservice_api + endpoint.person + params.id, {
       method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postClient(user, callback){
    let request = new Request(HOST.client_microservice_api + endpoint.person , {
        method: 'POST',
        headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function deleteClient(clientId, callback){
    let request = new Request(HOST.client_microservice_api + endpoint.person + '/' + clientId, {
        method: 'DELETE'
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

export {
    getClients as getClients,
    getClientById as getClientById,
    postClient as postClient,
    deleteClient as deleteClient 
};
