import { comment } from 'postcss';
import { profiles } from '../../data'
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {

    const requestHeaders = new Headers(request.headers);

    console.log(requestHeaders.get("Authorization"));

    console.log(request);
    

    const theme = request.cookies.get('theme') 

    console.log(theme)

    return new Response("<h1>Hello testing the H1 tag </h1>  ", {
        headers: {
            "content-Type": "text/html",
            "Set-cookie": "theme=dark"
        }
    }) 
}

export async function PATCH(
    request: Request,
    {params}: {params: { id : string}
 }) {

        const body = await request.json();
        
        const { bio } = body;

        const index = profiles.findIndex(
            profile => profile.id === parseInt(params.id)
        )

        console.log(`${index}`);

        profiles[index].bio =  bio;

        return Response.json(profiles[index]);
        
}