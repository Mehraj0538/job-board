INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Java Developer (Fresher)', 'TechNova Solutions', 'Hyderabad, India',
       'Entry level Java Spring Boot developer role building REST APIs and microservices.',
       'FULL_TIME', 400000, 600000, 'https://example.com/careers/java-fresher', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Java Developer (Fresher)' AND company = 'TechNova Solutions');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Backend Engineer Intern', 'CloudWorks Inc', 'Bengaluru, India',
       'Internship focused on Spring Boot microservices and MySQL.',
       'INTERNSHIP', 15000, 25000, 'https://example.com/careers/backend-intern', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Backend Engineer Intern' AND company = 'CloudWorks Inc');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Full Stack Developer', 'Globalco Systems', 'Hyderabad, India',
       'Java Spring Boot backend with React frontend for internal tools.',
       'FULL_TIME', 500000, 800000, 'https://example.com/careers/fullstack', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Full Stack Developer' AND company = 'Globalco Systems');
