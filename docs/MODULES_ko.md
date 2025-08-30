# 🧩 Module화 & 폴더 구조

## 폴더 구조

```
iot-dashboard/
├─ backend/
│  ├─ config/db.js                  # DB 연결 설정 (PostgreSQL 등)
│  ├─ controllers/temperatureController.js   # 온도 센서 데이터 처리
│  ├─ controllers/doorController.js          # 출입문 센서 데이터 처리
│  ├─ controllers/lightController.js         # 조명 센서 데이터 처리
│  ├─ routes/apiRoutes.js           # API 라우팅 정의
│  ├─ server.js                     # Express 서버 엔트리포인트
│  ├─ package.json                  # Backend 의존성 관리
│  └─ .env.example                  # 환경변수 예시 파일 (실제 비밀번호 제거됨)

├─ frontend/
│  ├─ src/components/Login.jsx      # 로그인 컴포넌트
│  ├─ src/components/Dashboard.jsx  # 메인 대시보드 화면
│  ├─ src/components/SensorCard.jsx # 센서 상태 표시 카드 UI
│  ├─ App.jsx                       # React 앱 구조 뼈대
│  ├─ main.jsx                      # React DOM 렌더링 진입점
│  ├─ index.css                     # 글로벌 CSS 스타일
│  ├─ tailwind.config.js            # TailwindCSS 설정
│  ├─ vite.config.js                # Vite 빌드 설정
│  ├─ package.json                  # Frontend 의존성 관리
│  └─ public/logo.svg               # 프로젝트 로고 이미지

├─ docs/
│  ├─ README_ko.md                  # 프로젝트 개요 및 실행 방법 (한글)
│  ├─ CONFIGURATION_ko.md           # 환경 설정 방법 정리
│  ├─ MODULES_ko.md                 # 모듈별 기능 설명
│  ├─ API_SPEC_ko.md                # API 명세서
│  ├─ IoT_Dashboard_Presentation.pptx   # 발표용 PPT 슬라이드
│  ├─ IoT_Dashboard_Documentation.pdf   # 최종 보고서 문서
│  ├─ architecture_diagram.png      # 전체 아키텍처 다이어그램
│  └─ api_flow.png                  # API 요청/응답 흐름도

└─ .gitignore                       # Git 추적 제외 설정
```

## 주요 모듈

- **backend/config/db.js** — DB 연결 (Pool)
- **backend/controllers/** — 비즈니스 로직 (temperature/door/light)
- **backend/routes/apiRoutes.js** — 라우팅 정의
- **backend/server.js** — 앱 부트스트랩
- **frontend/src/components/** — UI 컴포넌트 (Login, Dashboard, SensorCard)

## 의존성/흐름 다이어그램

- 아키텍처: `architecture_diagram.png`
- API 플로우: `api_flow.png`

**흐름 요약**

1. `Dashboard.jsx` → Axios로 `/api/*` 호출
2. `routes/apiRoutes.js` → 컨트롤러 연결
3. 컨트롤러 → `config/db.js`의 Pool로 SQL 실행
4. PostgreSQL 결과(JSON) → 프런트에 반환
