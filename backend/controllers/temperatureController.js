const pool = require("../config/db");

const getTemperatureData = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s_id, s_temperature, s_humidity
      FROM temperature
      WHERE s_temperature IS NOT NULL
      ORDER BY s_id ASC
      LIMIT 6
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Temperature Fetch Error:", err.message);
    res.status(500).send("Error fetching temperature data");
  }
};

module.exports = { getTemperatureData };
