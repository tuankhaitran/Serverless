module.exports.createChatMessage = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'createChatMessage',
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body
    })
  };
  return response;
};

module.exports.getMessage = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'createChatMessage',
      method: event.httpMethod,
      path: event.path,
      query: event.queryStringParameters,
      params: event.pathParameters,
      body: event.body
    })
  };
  return response;
};
