# ⚙️ Configuration

## 1) 환경 변수 (.env 예시)

> 제출에는 `backend/.env.example`만 포함 (비밀번호 제거)

```env
PORT=3001
DB_USER=your_user
DB_PASSWORD=********
DB_HOST=postgres-smartboy.h.aivencloud.com
DB_PORT=26207
DB_NAME=kafolat
DB_SSL=true
JWT_SECRET=your_jwt_secret     # 로그인 세션용
CORS_ORIGIN=http://localhost:5173
```

---

## 2) DB 연결 (backend/config/db.js)

- `pg`의 `Pool` 사용, `.env` 로드
- SSL 권장:
  ```js
  ssl: {
    rejectUnauthorized: false;
  }
  ```
- 커넥션 풀 개수 제한 권장 (예: `max: 10`)

---

## 3) 스타일 (TailwindCSS)

- `src/index.css`:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- `tailwind.config.js`: 필요 시 `darkMode: 'class'` 옵션 추가

---

## 4) Vite 개발 서버

- 기본 포트: 5173
- Proxy 미사용 시 → 프론트에서 직접 `http://localhost:3001` 호출
- Proxy 설정 예시 (`vite.config.js`):
  ```js
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
  ```

---

## 5) 보안·배포 체크리스트

- `.env`는 Git에 커밋 금지
- 최소 권한 DB 계정, SSL 활성화
- **CORS 설정**: 운영 환경에선 특정 도메인만 허용
- **JWT/세션 비밀키**는 강력한 랜덤 값 사용
- **Helmet / Rate limiting** 도입 권장 (Express 보안 강화)
- 프론트엔드 빌드:
  ```bash
  npm run build
  ```
  → `/dist` 생성, nginx 등 static server로 배포

---

## 6) Docker (선택 사항)

- `Dockerfile` 및 `docker-compose.yml` 작성 시:
  - `backend` + `postgres` 컨테이너 통합 실행 가능
  - `.env` 환경 변수 compose 파일에서 주입

---

✅ 위 설정으로 로컬 개발뿐 아니라, 실제 배포 환경에서도 안정적으로 실행 가능.
