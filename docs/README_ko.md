# 📡 IoT 대시보드 (React + Node.js + PostgreSQL)

[🇺🇸 English README](../README.md)

## 👩‍💻 프로젝트 개요

온도/습도, 문 잠금, 조명 상태를 **실시간 시각화**하는 풀스택 IoT 대시보드입니다.  
프론트엔드와 백엔드, DB를 직접 설계하고 연동하여 학습 및 발표용으로 개발했습니다.

- **Frontend**: React (Vite) + Tailwind CSS
- **Backend**: Node.js (Express)
- **DB**: PostgreSQL (Aiven Cloud)
- **통신**: Axios (HTTP), JSON 응답

---

## 🚀 실행 방법

```bash
# 1) Backend 실행
cd backend
npm install
node server.js   # => http://localhost:3001

# 2) Frontend 실행
cd frontend
npm install
npm run dev      # => http://localhost:5173
```

---

## 🔑 로그인 (데모)

- ID: `admin`
- PW: `1234`

---

## 📂 프로젝트 문서

- **CONFIGURATION_ko.md** — 환경설정 및 빌드 도구
- **MODULES_ko.md** — 폴더 구조 및 모듈 설명
- **API_SPEC_ko.md** — API 명세
- **그림 자료**: `architecture_diagram.png`, `api_flow.png`

---

## 🧑‍💻 개발자

- 본 프로젝트는 **제가 직접 기획·개발**한 IoT 학습용 대시보드입니다.
- 프론트엔드, 백엔드, DB 모두 직접 구현하고 문서화하여 발표 자료까지 준비했습니다.

---

## 💡 명언 (Quote)

> “미래를 예측하는 가장 좋은 방법은 그것을 발명하는 것이다.”  
> — 앨런 케이 (Alan Kay)
