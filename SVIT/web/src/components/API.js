import axios from 'axios';


export async function GetStudents() {
    const respones = await axios ({
        method: 'GET',
        url: 'http://localhost:3002/sinh-viens',
        headers: {
            'content-type': 'application/json',
        }
    });
    return respones;
    
}

export async function AddStudent(data) {
    console.log(JSON.stringify(data));
    const respones = await axios ({
        method: 'POST',
        url: 'http://localhost:3002/sinh-viens',
        headers: {
            'content-type': 'application/json',
        },
        data: JSON.stringify(data)
    });
    return respones;
    
}
export async function DeleteStudent(data) {
    const respones = await axios ({
        method: 'DELETE',
        url: `http://localhost:3002/sinh-viens/${data}`,
        headers: {
            'accept': 'application/json',
        },
    });
    return respones;
    
}

export async function UpdateStudent( id, data) {
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


