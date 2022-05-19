export const serviceURL = "https://jsonplaceholder.typicode.com/";

export const createApiRequest = async (endPoint = '', payload = {}, p_method = '') => {
    if (p_method == 'GET') {
        try {
            const response = await fetch(serviceURL.concat(endPoint));
            const data = await response.json();
            return {
                success: true,
                data
            };
        } catch( {reponse} ) {
            return {
                success: false,
                data: {}
            }
        }
    } else {
        const response = await fetch(serviceURL.concat(endPoint), {
            method: p_method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        if(response.status == 200) {
            return {
                success: true,
                data: 'Done'
            }
        } else {
            return {
                success: false,
                data: 'Fail'
            }
        }
    }
}
