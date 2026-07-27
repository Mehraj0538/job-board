# Job Board — Spring Boot + PostgreSQL + React

A full-stack job board: post, browse, search, and delete job listings.

- **Backend**: Java 17, Spring Boot, Spring Data JPA, PostgreSQL — tables are auto-generated from the JPA entities on startup (`ddl-auto: update`), no manual schema/migration scripts needed.
- **Database admin**: pgAdmin, wired up via Docker Compose alongside Postgres.
- **Frontend**: React (Vite), talking to the backend over REST with axios.

Business value: lets a company or community post open roles, and lets candidates search/filter them by keyword, location, or job type.

## Tech Stack
| Layer     | Tech |
|-----------|------|
| Backend   | Java 17, Spring Boot 3.3 (Web, Data JPA, Validation), Maven |
| Database  | PostgreSQL 16 (auto-generated schema via Hibernate `ddl-auto`) |
| DB Admin  | pgAdmin 4 |
| Frontend  | React 19 + Vite, axios |
| Tests     | JUnit 5 + MockMvc (backend), oxlint (frontend) |
| Container | Docker + Docker Compose |
| CI/CD     | GitHub Actions |

## Project Structure
```
jobboard/
├── src/main/java/com/globalco/jobboard/
│   ├── JobboardApplication.java
│   ├── controller/          # REST endpoints
│   ├── model/                # JPA entities (auto-create Postgres tables)
│   ├── repository/           # Spring Data repositories
│   ├── service/               # Business logic
│   └── exception/             # Error handling
├── src/main/resources/
│   ├── application.yml        # Postgres connection + ddl-auto: update
│   └── data.sql                # seed data
├── src/test/
│   ├── java/...JobControllerTest.java
│   └── resources/application.yml   # test override -> in-memory H2, no Postgres needed
├── frontend/                    # React (Vite) app
│   ├── src/
│   │   ├── api/jobs.js          # axios calls to the backend
│   │   ├── components/          # SearchBar, JobList, JobCard, JobForm
│   │   └── App.jsx
│   ├── Dockerfile                # build + serve with nginx
│   └── vercel.json
├── Dockerfile                     # backend container image
├── docker-compose.yml               # Postgres + pgAdmin + backend, one command
└── .github/workflows/ci-cd.yml
```

## Running Everything Locally (recommended: Docker Compose)
This spins up Postgres, pgAdmin, and the backend together. Hibernate auto-creates the `jobs` table and `data.sql` seeds it on first boot.

```bash
docker compose up --build
```

- Backend API: http://localhost:8080
- pgAdmin: http://localhost:5050 (login: `admin@jobboard.local` / `admin`)
  - Add a server in pgAdmin: Host `db`, Port `5432`, Username `postgres`, Password `postgres`, Database `jobboard`
  - Once connected you'll see the `jobs` table already created — no manual DDL required.

Then run the frontend separately (see below) pointed at `http://localhost:8080/api/jobs`.

## Running the Backend Without Docker
Requires a local PostgreSQL instance.
```bash
createdb jobboard
export DB_HOST=localhost DB_PORT=5432 DB_NAME=jobboard DB_USER=postgres DB_PASSWORD=postgres
mvn clean package
java -jar target/jobboard.jar
```
Hibernate creates/updates the `jobs` table automatically on startup based on the `Job` entity — you never hand-write `CREATE TABLE`.

## Running the Frontend
```bash
cd frontend
npm install
cp .env.example .env      # set VITE_API_URL if the backend isn't on localhost:8080
npm run dev                # http://localhost:5173
```
Production build: `npm run build` (outputs to `frontend/dist`).

## Tests
```bash
mvn test          # backend — uses in-memory H2 automatically, no Postgres needed
cd frontend && npm run lint && npm run build   # frontend
```

## API Reference
| Method | Endpoint                 | Description                          |
|--------|---------------------------|---------------------------------------|
| GET    | `/api/health`             | Health check                          |
| GET    | `/api/jobs`               | List all jobs                         |
| GET    | `/api/jobs?keyword=java`  | Search by keyword/location/jobType    |
| GET    | `/api/jobs/{id}`          | Get one job                           |
| POST   | `/api/jobs`               | Create a job                          |
| PUT    | `/api/jobs/{id}`          | Update a job                          |
| DELETE | `/api/jobs/{id}`          | Delete a job                          |

## CI/CD Pipeline (GitHub Actions)
`.github/workflows/ci-cd.yml` runs on every push/PR to `main`:
1. **backend** job: builds with Maven, runs the test suite (H2, no external DB needed), uploads the jar
2. **frontend** job: `npm ci`, lint, `npm run build`, uploads the `dist` folder
3. **deploy-frontend** job (on push to `main`): deploys `frontend/` to Vercel

Required GitHub repo secrets for the frontend deploy: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.

## Deployment note
- **Frontend**: deploys to Vercel cleanly — it's a static Vite build, exactly what Vercel is built for.
- **Backend + Postgres**: Vercel's serverless model doesn't run a long-lived Spring Boot server or host a Postgres instance. For the backend, use a host built for containers/databases instead — **Render**, **Railway**, or **Fly.io** all support Docker deploys plus a managed Postgres add-on, and all have official GitHub Actions you can drop into the commented-out `deploy-backend` job in the workflow file. Point the deployed frontend's `VITE_API_URL` at wherever the backend ends up.

## Git Setup
```bash
git init
git add .
git commit -m "Initial commit: Job Board (Spring Boot + Postgres + React)"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
