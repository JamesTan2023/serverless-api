module.exports.firsthandler = async (event) => {
  console.log('james')
  console.log(event)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Your function executed successfully!",
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  console.log(event.body)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "This is post function!",
      },
      null,
      2
    ),
  };
};