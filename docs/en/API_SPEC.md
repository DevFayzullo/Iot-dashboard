# 📘 API Specification  

## Common Information  

- Base URL: `http://localhost:3001/api`  
- All APIs return **JSON responses**  
- Maximum of 6 records can be retrieved (`NULL` data is excluded)  
- In case of error:  

```json
{ "error": "Error message" }
```  

---  

## 📍 GET /api/temperature  

- Description: Retrieve the latest temperature/humidity sensor data  
- Parameters: None  
- Example Response:  

```json
[
  {
    "s_id": "1",
    "s_temperature": "29.80",
    "s_humidity": "88.00"
  }
]
```  

- Notes:  
  - `s_id`: Sensor ID  
  - `s_temperature`: Current temperature value (℃)  
  - `s_humidity`: Current humidity value (%)  

---  

## 📍 GET /api/door  

- Description: Retrieve door (lock) status  
- Parameters: None  
- Example Response:  

```json
[
  {
    "s_id": "11111111111",
    "s_ip": "172.20.10.2",
    "s_status": "locked"
  }
]
```  

- Notes:  
  - `s_id`: Sensor ID  
  - `s_ip`: IP connected to the sensor  
  - `s_status`: `"locked"` or `"unlocked"`  

---  

## 📍 GET /api/light  

- Description: Retrieve light status  
- Parameters: None  
- Example Response:  

```json
[
  {
    "s_id": "11111111111",
    "s_ip": null,
    "s_status": null
  }
]
```  

- Notes:  
  - `s_id`: Sensor ID  
  - `s_ip`: Sensor IP (if unavailable, `null`)  
  - `s_status`: `"on"`, `"off"`, or `null`  

---  

## ✅ Future Expansion Considerations  

- `POST /api/door` → Remotely lock/unlock door  
- `POST /api/light` → Turn light ON/OFF remotely  
- `GET /api/temperature/:id` → Retrieve detailed data of a specific sensor  
