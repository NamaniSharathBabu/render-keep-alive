export default async function handler(req, res) {
  try {
    const response = await fetch(process.env.RENDER_BACKEND_URL + "/health");

    return res.status(200).json({
      success: true,
      status: response.status,
      time: new Date().toISOString()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
