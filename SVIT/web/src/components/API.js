import axios from 'axios';

const URL_API_GET_QLSV = "http://localhost:3002/sinh-viens";

const URL_API_POST_QLSV = "http://localhost:3002/sinh-viens";


export async function getPostFromAPI() {
    const respones = await axios ({
        method: 'GET',
        url: URL_API_GET_QLSV,
        headers: {
            'content-type': 'application/json',
        }
    });
    return respones;
    
}

export async function postQlsvToAPI(data) {
    console.log(JSON.stringify(data));
    const respones = await axios ({
        method: 'POST',
        url: URL_API_POST_QLSV,
        headers: {
            'content-type': 'application/json',
        },
        data: JSON.stringify(data)
    });
    return respones;
    
}
export async function deleteQlsvToAPI(data) {
    const respones = await axios ({
        method: 'DELETE',
        url: `http://localhost:3002/sinh-viens/${data}`,
        headers: {
            'accept': 'application/json',
        },
    });
    return respones;
    
}

export async function putQlsvToAPI( id, data) {
    console.log(JSON.stringify(data));
    const respones = await axios ({
        method: 'PUT',
        url: `http://localhost:3002/sinh-viens/${id}`,
        headers: {
            'content-type': 'application/json',
        },
        data: JSON.stringify(data)
    });
    return respones;
    
}
