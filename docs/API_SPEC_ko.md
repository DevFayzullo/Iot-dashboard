# 📘 API 명세

## 공통 사항

- Base URL: `http://localhost:3001/api`
- 모든 API는 **JSON 응답** 반환
- 최대 6개 레코드만 조회 (`NULL` 데이터는 제외)
- 에러 발생 시:

```json
{ "error": "에러 메시지" }
```

---

## 📍 GET /api/temperature

- 설명: 최신 온도/습도 센서 데이터 조회
- 파라미터: 없음
- 응답 예시:

```json
[
  {
    "s_id": "1",
    "s_temperature": "29.80",
    "s_humidity": "88.00"
  }
]
```

- 비고:
  - `s_id`: 센서 ID
  - `s_temperature`: 현재 온도 값 (℃)
  - `s_humidity`: 현재 습도 값 (%)

---

## 📍 GET /api/door

- 설명: 출입문(잠금) 상태 조회
- 파라미터: 없음
- 응답 예시:

```json
[
  {
    "s_id": "11111111111",
    "s_ip": "172.20.10.2",
    "s_status": "locked"
  }
]
```

- 비고:
  - `s_id`: 센서 ID
  - `s_ip`: 센서가 연결된 IP
  - `s_status`: `"locked"` 또는 `"unlocked"`

---

## 📍 GET /api/light

- 설명: 조명 상태 조회
- 파라미터: 없음
- 응답 예시:

```json
[
  {
    "s_id": "11111111111",
    "s_ip": null,
    "s_status": null
  }
]
```

- 비고:
  - `s_id`: 센서 ID
  - `s_ip`: 센서 IP (없으면 `null`)
  - `s_status`: `"on"`, `"off"`, 또는 `null`

---

## ✅ 향후 확장 고려

- `POST /api/door` → 원격으로 문 열기/잠그기
- `POST /api/light` → 조명 ON/OFF 제어
- `GET /api/temperature/:id` → 특정 센서 데이터 상세 조회
