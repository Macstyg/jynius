export async function handler(event, context) {
  try {
    const payload = event.body.split("=")[1]
    console.log("payload", payload)
    console.log("parsed payload", JSON.parse(payload))
    console.log("event", JSON.parse(payload).event.name)
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
