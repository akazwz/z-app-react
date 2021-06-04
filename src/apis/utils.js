const base = 'https://api.akazwz.com/v1'

export async function signIn(data) {
    return await fetch(base + '/token', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => r.json())
}

export async function fileUpload(formData) {
    return await fetch(base + '/file', {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: {
        }
    }).then(r => r.json())
}

export async function post(endpoint, data) {
    return await fetch(base + endpoint, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json',
            'token': localStorage.getItem('token')
        }
    }).then(r => r.json())
}
