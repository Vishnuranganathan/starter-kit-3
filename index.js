console.log('Loading function again');

 

exports.handler = async (event, context) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    console.log('hello');
    console.log('hi');
    return event.key1;  // Echo back the first key value
    // throw new Error('Something went wrong');
};