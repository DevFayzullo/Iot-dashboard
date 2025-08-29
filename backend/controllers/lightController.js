const pool = require("../config/db");

const getLightData = async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT s_id, s_ip, s_status
      FROM light
      WHERE s_status IS NOT NULL
      ORDER BY s_id ASC
      LIMIT 6
    `);
    res.json(result.rows);
  } catch (err) {
    console.error("❌ Light Fetch Error:", err.message);
    res.status(500).send("Error fetching light data");
  }
};

module.exports = { getLightData };
