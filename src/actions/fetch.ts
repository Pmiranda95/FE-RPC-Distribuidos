
export const fetchFunction = ( endpoint:string, data:any, method = 'GET' ) => {

    const url = `${ 'localhost:5001' }/${ endpoint }`;

    if ( method === 'GET' ) {
        return fetch( url );
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}