import {HOST} from '../../components/Hosts';
import RestApiClient from "../../components/api/rest-client";


const endpoint = {
    device: '/devices'
};



function getDevices(callback) {
    let request = new Request(HOST.device_microservice_api + endpoint.device, {
        method: 'GET',
    });
    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function getDeviceById(params, callback){
    let request = new Request(HOST.device_microservice_api + endpoint.device + params.id, {
       method: 'GET'
    });

    console.log(request.url);
    RestApiClient.performRequest(request, callback);
}

function postDevice(user, callback){
    let request = new Request(HOST.device_microservice_api + endpoint.device , {
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

function deleteDevice(deviceId, callback){
    let request = new Request(HOST.device_microservice_api + endpoint.device + '/' + deviceId, {
        method: 'DELETE'
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}

function getDevicesClient(deviceId, callback){
    let request = new Request(HOST.device_microservice_api + "/device-mappings/devices/client/" + deviceId, {
        method: 'GET'
    });

    console.log("URL: " + request.url);

    RestApiClient.performRequest(request, callback);
}




export {
    getDevices as getDevices,
    getDeviceById as getDeviceById,
    postDevice as postDevice,
    deleteDevice as deleteDevice,
    getDevicesClient as getDevicesClient
};
