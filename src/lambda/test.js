export async function handler(event, context) {
  try {
    const payloadString = event.body.split("=")[1]
    const normilizedPayloadString = decodeURI(payloadString)
      .replace(/\+/g, " ")
      .replace(/%3A/g, ": ")
    const payload = JSON.parse(normilizedPayloadString)
    const name = payload.event.name
    console.log("parsed payload", payload)
    console.log("name", name)
    return {
      statusCode: 200,
      body: JSON.stringify({ name }),
    }
  } catch (err) {
    console.log(err) // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    }
  }
}
