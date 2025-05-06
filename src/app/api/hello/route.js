export async function GET(request) {
    const {searchParams} = new URL(request.url);
    const userName = searchParams.get('name') || 'Guest';

    return Response.json({message:`Hello, ${userName}!`});    
}