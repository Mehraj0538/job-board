INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer I', 'American Express', 'Chennai, India', 'Develop and maintain enterprise applications using Java, Spring Boot, REST APIs, SQL, and cloud technologies. Collaborate with cross-functional teams, write clean code, perform testing, and participate in Agile development.', 'FULL_TIME', 900000, 1400000, 'https://www.americanexpress.com/en-us/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer I' AND company = 'American Express');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer Intern', 'Nirmata', 'Bengaluru, India', 'Work on backend services, Kubernetes, Java, Go, and cloud-native applications. Assist in feature development, testing, debugging, and documentation.', 'INTERNSHIP', 30000, 60000, 'https://nirmata.com/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer Intern' AND company = 'Nirmata');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Graduate Engineering Trainee', 'Tudip Technologies', 'Pune, India', 'Entry-level software engineering role involving Java, Spring Framework, SQL, and software testing. Receive mentorship while working on enterprise projects.', 'FULL_TIME', 400000, 650000, 'https://tudip.com/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Graduate Engineering Trainee' AND company = 'Tudip Technologies');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Developer', 'Zoho', 'Chennai, India', 'Design and develop scalable software applications using Java and related technologies. Participate in product development, debugging, optimization, and code reviews.', 'FULL_TIME', 700000, 1200000, 'https://careers.zohocorp.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Developer' AND company = 'Zoho');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Software Engineer', 'Accenture', 'Multiple Locations, India', 'Develop business applications, maintain software systems, write efficient code, and collaborate with clients using Java, SQL, cloud, and Agile methodologies.', 'FULL_TIME', 450000, 700000, 'https://www.accenture.com/in-en/careers', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Software Engineer' AND company = 'Accenture');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Developer', 'IBM', 'Bengaluru, India', 'Build enterprise applications using Java, Spring Boot, APIs, and cloud services. Perform testing, deployment, and continuous improvement of software products.', 'FULL_TIME', 600000, 1000000, 'https://www.ibm.com/careers', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Developer' AND company = 'IBM');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Java Developer', 'Oracle', 'Bengaluru, India', 'Develop backend components using Java, Spring Boot, REST APIs, Oracle Database, and cloud technologies. Work with distributed teams to deliver scalable enterprise solutions.', 'FULL_TIME', 900000, 1500000, 'https://careers.oracle.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Java Developer' AND company = 'Oracle');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'SDE Intern', 'Microsoft', 'Hyderabad, India', 'Contribute to software engineering projects involving backend development, algorithms, cloud platforms, and distributed systems while working with experienced engineers.', 'INTERNSHIP', 80000, 120000, 'https://careers.microsoft.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'SDE Intern' AND company = 'Microsoft');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Device Associate - Alexa', 'Amazon', 'Chennai, India', 'Test and validate Alexa-enabled devices, identify defects, execute test cases, report bugs, and ensure product quality before release.', 'FULL_TIME', 400000, 700000, 'https://www.amazon.jobs/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Device Associate - Alexa' AND company = 'Amazon');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Specialist Programmer', 'Infosys', 'Multiple Locations, India', 'Develop high-performance enterprise software using Java, Spring Boot, Microservices, SQL, cloud platforms, and DevOps tools while working on client-facing projects.', 'FULL_TIME', 900000, 1300000, 'https://www.infosys.com/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Specialist Programmer' AND company = 'Infosys');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Graduate Software Engineer', 'Siemens', 'Bengaluru, India', 'Develop enterprise software using Java, Spring Boot, REST APIs, and SQL. Collaborate with cross-functional teams to build scalable applications, write unit tests, debug production issues, and participate in Agile ceremonies.', 'FULL_TIME', 700000, 1000000, 'https://jobs.siemens.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Graduate Software Engineer' AND company = 'Siemens');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Software Engineer', 'Cognizant', 'Hyderabad, India', 'Design, develop, and maintain Java-based enterprise applications. Work with Spring Boot, MySQL, REST APIs, and Git while contributing to software testing, deployment, and client deliverables.', 'FULL_TIME', 450000, 700000, 'https://careers.cognizant.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Software Engineer' AND company = 'Cognizant');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer', 'SAP', 'Bengaluru, India', 'Develop cloud-native applications using Java, Spring Boot, SAP technologies, and microservices. Build scalable backend services, improve application performance, and collaborate with global engineering teams.', 'FULL_TIME', 1200000, 1800000, 'https://jobs.sap.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer' AND company = 'SAP');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Graduate Engineer Trainee', 'LTIMindtree', 'Pune, India', 'Entry-level software engineering role focused on Java programming, Spring Framework, SQL, and software development lifecycle. Participate in enterprise client projects with mentorship and technical training.', 'FULL_TIME', 400000, 600000, 'https://careers.ltimindtree.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Graduate Engineer Trainee' AND company = 'LTIMindtree');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Java Backend Developer', 'Fiserv', 'Pune, India', 'Build financial technology solutions using Java, Spring Boot, REST APIs, Kafka, and Oracle Database. Develop secure backend systems, optimize APIs, and maintain high availability applications.', 'FULL_TIME', 900000, 1400000, 'https://www.careers.fiserv.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Java Backend Developer' AND company = 'Fiserv');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Development Engineer', 'PayPal', 'Chennai, India', 'Develop scalable payment solutions using Java, Spring Boot, distributed systems, and cloud technologies. Collaborate with product teams to build secure, reliable, and high-performance backend services.', 'FULL_TIME', 1400000, 2200000, 'https://careers.pypl.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Development Engineer' AND company = 'PayPal');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Application Developer', 'DXC Technology', 'Noida, India', 'Develop and support enterprise applications using Java, Spring Boot, SQL, and REST APIs. Assist in debugging, testing, and maintaining business-critical applications for global clients.', 'FULL_TIME', 450000, 700000, 'https://careers.dxc.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Application Developer' AND company = 'DXC Technology');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer', 'Mastercard', 'Pune, India', 'Design and develop secure payment applications using Java, Spring Boot, microservices, Kafka, and cloud platforms. Write high-quality code, implement CI/CD pipelines, and participate in code reviews.', 'FULL_TIME', 1200000, 1800000, 'https://careers.mastercard.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer' AND company = 'Mastercard');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Application Developer', 'Capgemini', 'Mumbai, India', 'Develop enterprise software solutions using Java, Spring Boot, Hibernate, SQL, and cloud technologies. Collaborate with business analysts, QA engineers, and clients to deliver software solutions.', 'FULL_TIME', 500000, 800000, 'https://www.capgemini.com/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Application Developer' AND company = 'Capgemini');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer', 'Dell Technologies', 'Bengaluru, India', 'Build and maintain backend systems using Java, Spring Boot, REST APIs, Docker, and Kubernetes. Develop cloud-enabled applications, optimize performance, and contribute to software architecture discussions.', 'FULL_TIME', 900000, 1500000, 'https://jobs.dell.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer' AND company = 'Dell Technologies');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Software Engineer', 'Nokia', 'Bengaluru, India', 'Develop and maintain telecom software solutions using Java, Spring Boot, REST APIs, and SQL. Collaborate with cross-functional teams to build scalable backend services, write automated tests, and troubleshoot production issues.', 'FULL_TIME', 800000, 1200000, 'https://www.nokia.com/about-us/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Software Engineer' AND company = 'Nokia');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Java Software Engineer', 'Cisco', 'Bengaluru, India', 'Design and develop cloud-native applications using Java, Spring Boot, Kubernetes, Docker, and REST APIs. Participate in code reviews, performance optimization, and Agile development processes.', 'FULL_TIME', 1200000, 1800000, 'https://jobs.cisco.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Java Software Engineer' AND company = 'Cisco');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Backend Developer', 'Adobe', 'Noida, India', 'Build high-performance backend services using Java, Spring Boot, MySQL, Redis, and cloud technologies. Collaborate with product teams to implement scalable APIs and improve application reliability.', 'FULL_TIME', 1500000, 2400000, 'https://careers.adobe.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Backend Developer' AND company = 'Adobe');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer I', 'JPMorgan Chase', 'Hyderabad, India', 'Develop secure financial applications using Java, Spring Boot, Kafka, and Oracle Database. Write high-quality code, perform testing, and contribute to enterprise-scale banking platforms.', 'FULL_TIME', 1400000, 2200000, 'https://careers.jpmorgan.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer I' AND company = 'JPMorgan Chase');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Graduate Software Developer', 'HCLTech', 'Noida, India', 'Work on enterprise software projects using Java, Spring Framework, REST APIs, SQL, and Git. Participate in software development, debugging, documentation, and client delivery activities.', 'FULL_TIME', 400000, 650000, 'https://www.hcltech.com/careers', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Graduate Software Developer' AND company = 'HCLTech');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Associate Consultant - Java', 'YASH Technologies', 'Hyderabad, India', 'Develop and maintain Java Spring Boot applications, integrate REST APIs, optimize SQL queries, and support cloud deployments while working with global enterprise clients.', 'FULL_TIME', 650000, 1000000, 'https://www.yash.com/careers/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Associate Consultant - Java' AND company = 'YASH Technologies');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer', 'Hitachi Digital Services', 'Pune, India', 'Design backend systems using Java, Spring Boot, Hibernate, and PostgreSQL. Build microservices, implement secure APIs, and collaborate with DevOps teams for CI/CD deployments.', 'FULL_TIME', 700000, 1100000, 'https://careers.hitachi.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer' AND company = 'Hitachi Digital Services');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Application Engineer', 'Emerson', 'Pune, India', 'Develop enterprise software using Java, Spring Boot, RESTful APIs, and SQL Server. Perform code reviews, testing, and production support while working in an Agile environment.', 'FULL_TIME', 700000, 1050000, 'https://www.emerson.com/en-us/careers', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Application Engineer' AND company = 'Emerson');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Software Engineer - Backend', 'Atlassian', 'Remote, India', 'Build scalable distributed systems using Java, Spring Boot, AWS, Docker, and Kubernetes. Develop reliable backend services, optimize performance, and contribute to cloud-based collaboration products.', 'FULL_TIME', 2200000, 3200000, 'https://www.atlassian.com/company/careers', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Software Engineer - Backend' AND company = 'Atlassian');

INSERT INTO jobs (title, company, location, description, job_type, min_salary, max_salary, apply_url, posted_at)
SELECT 'Java Application Developer', 'Tech Mahindra', 'Hyderabad, India', 'Develop enterprise Java applications using Spring Boot, Hibernate, REST APIs, and MySQL. Participate in requirement analysis, coding, testing, bug fixing, and production deployments for client projects.', 'FULL_TIME', 500000, 800000, 'https://careers.techmahindra.com/', CURRENT_TIMESTAMP
WHERE NOT EXISTS (SELECT 1 FROM jobs WHERE title = 'Java Application Developer' AND company = 'Tech Mahindra');
