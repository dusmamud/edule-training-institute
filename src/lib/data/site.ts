// ─────────────────────────────────────────────────────────────────────────────
// EduLe — Computer Training Institute. MOCK DATA ONLY (default, by rule).
// Every course, instructor, fee, blog post and FAQ lives here so real data
// can be swapped in later without touching any page or component.
// Prices in ₹ (en-IN). All people, batches, placements and testimonials are
// fictional placeholders for design review.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
	name: 'EduLe',
	tagline: 'Computer Training Institute',
	url: 'https://edule-training-institute.pages.dev',
	phoneDisplay: '+91 97026 21413',
	phoneHref: 'tel:+919702621413',
	email: 'hello@edule.in',
	linkedin: 'https://www.linkedin.com/company/edule-in',
	address: '2nd Floor, Sunrise Plaza, MG Road, Pune, Maharashtra 411001',
	hours: 'Mon–Sat, 9:00 am – 7:00 pm IST',
	whatsappHref: 'https://wa.me/919702621413',
	mapsUrl: 'https://www.google.com/maps/search/EduLe+Computer+Training+Institute,+MG+Road,+Pune',
	mapsEmbed: 'https://www.google.com/maps?q=EduLe+Computer+Training+Institute,+MG+Road,+Pune&output=embed',
	gbpUrl: 'https://www.google.com/maps/search/EduLe+Computer+Training+Institute,+MG+Road,+Pune',
	justdialUrl: 'https://www.justdial.com/Pune/EduLe-Computer-Training-Institute',
	sulekhaUrl: 'https://www.sulekha.com/edule-computer-training-institute-pune',
	batchCapacity: 25,
	instagram: 'https://www.instagram.com/edule.in',
	facebook: 'https://www.facebook.com/edule.in',
	twitter: 'https://x.com/edule_in',
	youtube: 'https://www.youtube.com/@edule-in',
	stats: { courses: 13, students: 28400, enrolments: 39990, rating: 4.8, ratingCount: '9.8K', instructors: 6, placed: 18200 }
};

export type Course = {
	id: string;
	title: string;
	category: string;
	level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
	instructor: string;
	instructorImage: string | null;
	image: string;
	imageAlt: string;
	duration: string;
	lectures: number;
	weeks: number;
	price: number; // ₹, 0 = Free
	oldPrice: number | null;
	rating: number;
	students: number;
	badge: string | null;
	short: string;
	learn: string[];
	curriculum: { title: string; lessons: string[] }[];
	tools: string[];
	jobs: string[];
	reviews: { name: string; text: string; rating: number }[];
	nextBatch: { date: string; days: string; time: string; mode: string; seats: number };
	certificate: boolean;
	mode: string;
};

export const categories = ['All', 'UI/UX Design', 'Development', 'Data Science', 'Business', 'Financial'];

export const courses: Course[] = [
	{
		id: 'data-science-python',
		title: 'Data Science and Machine Learning with Python — Hands On!',
		category: 'Data Science',
		level: 'Intermediate',
		instructor: 'Rahul Sharma',
		instructorImage: 'instructor-rahul',
		image: 'course-data-science',
		imageAlt: 'Data analyst working with colourful charts and dashboards on dual monitors',
		duration: '42 hr 30 mins',
		lectures: 42,
		weeks: 12,
		price: 32500,
		oldPrice: 38500,
		rating: 4.9,
		students: 3240,
		badge: 'Bestseller',
		short: 'Python, pandas, visualisation and real ML projects — from raw data to a portfolio-ready model.',
		learn: ['Python, NumPy and pandas for real datasets', 'Data cleaning, visualisation and storytelling', 'Regression, classification and clustering', 'Build and deploy 4 end-to-end ML projects'],
		curriculum: [
			{ title: 'Python for Data Work', lessons: ['Python refresher & Jupyter setup', 'NumPy arrays & pandas DataFrames', 'Working with CSV, Excel & APIs'] },
			{ title: 'Visualisation & EDA', lessons: ['Matplotlib & Seaborn deep dive', 'Exploratory analysis on Indian datasets', 'Dashboards with Plotly'] },
			{ title: 'Machine Learning', lessons: ['Regression & classification', 'Clustering & model evaluation', 'Capstone: house-price prediction'] }
		],

		tools: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Jupyter'],
		jobs: ['Data Analyst', 'Junior ML Engineer', 'Business Analyst'],
		reviews: [{ name: 'Ananya Deshmukh', text: 'Went from zero Python to a working ML model in 12 weeks. The capstone project got me my first interview.', rating: 5 }, { name: 'Karan Joshi', text: 'Best part is the hands-on datasets — real Indian data, not toy examples.', rating: 5 }],
		nextBatch: { date: 'Mon, 23 Nov 2026', days: 'Mon–Fri', time: '9:00 – 11:00 am', mode: 'Classroom, Pune', seats: 6 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'ux-color-schemes',
		title: 'Create Amazing Colour Schemes for Your UX Design Projects',
		category: 'UI/UX Design',
		level: 'Beginner',
		instructor: 'Sana Kapoor',
		instructorImage: 'instructor-sana',
		image: 'course-uiux',
		imageAlt: 'Designer sketching mobile app wireframes and colour swatches on a desk',
		duration: '28 hr 15 mins',
		lectures: 36,
		weeks: 8,
		price: 34000,
		oldPrice: 42500,
		rating: 4.8,
		students: 1980,
		badge: null,
		short: 'Colour theory, palettes and accessible UI — design interfaces that feel right and read clearly.',
		learn: ['Colour theory and 60-30-10 palettes', 'Accessible contrast (WCAG 2.2 AA)', 'Figma colour systems & tokens', 'Portfolio: redesign a real app screen'],
		curriculum: [
			{ title: 'Colour Foundations', lessons: ['Hue, saturation & value', 'Colour psychology in Indian markets', 'Building a palette'] },
			{ title: 'Colour in Figma', lessons: ['Styles, variables & tokens', 'Dark mode & theming', 'Handoff to developers'] },
			{ title: 'Portfolio Project', lessons: ['Audit an existing app', 'Redesign with a new scheme', 'Present & critique'] }
		],

		tools: ['Figma', 'Adobe Color', 'Coolors', 'Stark'],
		jobs: ['UI Designer', 'Visual Designer', 'Design Associate'],
		reviews: [{ name: 'Kavya Reddy', text: 'I finally understand why some palettes feel right. My Figma files look professional now.', rating: 5 }, { name: 'Nikhil Rao', text: 'Short, practical and fun. The accessibility module alone was worth the fee.', rating: 4 }],
		nextBatch: { date: 'Mon, 23 Nov 2026', days: 'Mon–Fri', time: '6:30 – 8:30 pm', mode: 'Classroom + Live Online', seats: 4 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'culture-leadership',
		title: 'Culture & Leadership: Strategies for a Successful Business',
		category: 'Business',
		level: 'All Levels',
		instructor: 'Arjun Mehta',
		instructorImage: 'instructor-arjun',
		image: 'instructor-teaching',
		imageAlt: 'Instructor explaining a business strategy on a large screen to adult students',
		duration: '18 hr 45 mins',
		lectures: 24,
		weeks: 6,
		price: 24500,
		oldPrice: 28900,
		rating: 4.7,
		students: 1540,
		badge: null,
		short: 'Lead teams, shape culture and make decisions — practical leadership for growing Indian businesses.',
		learn: ['Leadership styles that actually work', 'Building culture in small teams', 'Difficult conversations & feedback', 'A 90-day leadership plan'],
		curriculum: [
			{ title: 'Leading People', lessons: ['What great managers do daily', 'Motivation beyond salary', 'Hiring & onboarding well'] },
			{ title: 'Culture & Communication', lessons: ['Values into everyday habits', 'Meetings that respect time', 'Handling conflict'] },
			{ title: 'Your Plan', lessons: ['Diagnose your team', 'Draft a 90-day plan', 'Peer review & feedback'] }
		],

		tools: ['Notion', 'Miro', 'Google Workspace'],
		jobs: ['Team Lead', 'Operations Manager', 'Store Manager'],
		reviews: [{ name: 'Sana Sheikh', text: 'The 90-day leadership plan helped me restructure my small team within a month.', rating: 5 }, { name: 'Vivek Nair', text: 'Practical, no jargon. Every session ended with something I used at work the next day.', rating: 4 }],
		nextBatch: { date: 'Sat, 28 Nov 2026', days: 'Sat–Sun', time: '10:00 am – 1:00 pm', mode: 'Live Online', seats: 8 },
		certificate: true,
		mode: 'Live Online'
	},
	{
		id: 'finance-budget',
		title: 'Finance Series: Learn to Budget and Calculate Your Net Worth',
		category: 'Financial',
		level: 'Beginner',
		instructor: 'Arjun Mehta',
		instructorImage: 'instructor-arjun',
		image: 'course-finance',
		imageAlt: 'Woman calculating a household budget with a calculator, notebook and laptop',
		duration: '12 hr 30 mins',
		lectures: 18,
		weeks: 4,
		price: 0,
		oldPrice: 9999,
		rating: 4.8,
		students: 5210,
		badge: 'Free',
		short: 'Budgeting, saving and net-worth tracking for real Indian households — free, practical, no jargon.',
		learn: ['Build a monthly budget that sticks', 'Emergency funds & goal-based saving', 'Track net worth in a spreadsheet', 'Debt, EMIs and interest — plainly explained'],
		curriculum: [
			{ title: 'Money Basics', lessons: ['Income, expenses & cash flow', 'The 50-30-20 rule, Indian edition', 'Banking & UPI hygiene'] },
			{ title: 'Budgeting in Practice', lessons: ['A family budget template', 'Festival & wedding planning', 'Reviewing month-end'] },
			{ title: 'Net Worth & Goals', lessons: ['Assets vs liabilities', 'Your net-worth sheet', 'A one-year money plan'] }
		],

		tools: ['Google Sheets', 'Excel', 'UPI & banking apps'],
		jobs: ['Accounts Assistant', 'Banking Associate', 'Back-office Executive'],
		reviews: [{ name: 'Pooja Sharma', text: 'Free, and genuinely useful. My family budget finally makes sense.', rating: 5 }, { name: 'Rahul Verma', text: 'Explained net worth and EMIs in plain language. Wish I had done this years ago.', rating: 5 }],
		nextBatch: { date: 'Mon, 30 Nov 2026', days: 'Mon–Fri', time: '2:00 – 4:00 pm', mode: 'Self-paced + Live Q&A', seats: 12 },
		certificate: true,
		mode: 'Self-paced + Live Q&A'
	},
	{
		id: 'brand-marketing',
		title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape',
		category: 'Business',
		level: 'Intermediate',
		instructor: 'Priya Nair',
		instructorImage: null,
		image: 'course-digital-marketing',
		imageAlt: 'Professional planning a social media marketing campaign on phone and laptop',
		duration: '26 hr 00 mins',
		lectures: 32,
		weeks: 8,
		price: 11500,
		oldPrice: 14999,
		rating: 4.8,
		students: 2760,
		badge: null,
		short: 'Brand strategy, content and campaigns — market a business without a big-city budget.',
		learn: ['Positioning & brand voice', 'Content calendars that ship', 'Instagram, WhatsApp & Google basics', 'Measure what matters, ignore the rest'],
		curriculum: [
			{ title: 'Brand Foundations', lessons: ['Who is this for, really?', 'Voice, visuals & story', 'Competitor teardown'] },
			{ title: 'Campaigns', lessons: ['A 30-day content plan', 'WhatsApp Business & reels', 'Local SEO & Google Business'] },
			{ title: 'Measure & Improve', lessons: ['Analytics without overwhelm', 'A/B testing on a budget', 'Capstone campaign review'] }
		],

		tools: ['Canva', 'Meta Business Suite', 'WhatsApp Business', 'Google Analytics'],
		jobs: ['Digital Marketing Executive', 'Social Media Manager'],
		reviews: [{ name: 'Sneha Kulkarni', text: 'The 30-day content plan doubled our shop’s Instagram enquiries.', rating: 5 }, { name: 'Amit Patel', text: 'Great for small businesses — every example used budgets we actually have.', rating: 4 }],
		nextBatch: { date: 'Mon, 30 Nov 2026', days: 'Mon–Fri', time: '6:30 – 8:30 pm', mode: 'Classroom + Live Online', seats: 5 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'graphic-design-badges',
		title: 'Graphic Design: Illustrating Badges and Icons with Geometric Shapes',
		category: 'UI/UX Design',
		level: 'Beginner',
		instructor: 'Sana Kapoor',
		instructorImage: 'instructor-sana',
		image: 'course-graphic-design',
		imageAlt: 'Graphic designer creating colourful geometric badge artwork on a graphics tablet',
		duration: '22 hr 10 mins',
		lectures: 28,
		weeks: 6,
		price: 19500,
		oldPrice: 24999,
		rating: 4.9,
		students: 1890,
		badge: null,
		short: 'Vector badges, icons and logos from simple shapes — the design skill every freelancer needs.',
		learn: ['Vector basics in Illustrator & Figma', 'Geometric construction & grids', 'Badge, icon & logo systems', 'Export for print, web & social'],
		curriculum: [
			{ title: 'Shapes & Grids', lessons: ['The geometry behind good logos', 'Grids & alignment', 'Colour & texture'] },
			{ title: 'Badge & Icon Sets', lessons: ['Design a badge series', 'A consistent icon family', 'Monograms & marks'] },
			{ title: 'Portfolio', lessons: ['A brand kit for a local business', 'Mockups & presentation', 'Client-ready exports'] }
		],

		tools: ['Illustrator', 'Figma', 'Procreate'],
		jobs: ['Graphic Designer', 'Freelance Illustrator', 'Brand Designer'],
		reviews: [{ name: 'Kavya Reddy', text: 'Geometric construction finally clicked. My badge set got me freelance work.', rating: 5 }, { name: 'Divya Menon', text: 'Clear steps, good feedback on the portfolio project.', rating: 5 }],
		nextBatch: { date: 'Sat, 28 Nov 2026', days: 'Sat–Sun', time: '10:00 am – 1:00 pm', mode: 'Classroom, Pune', seats: 7 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'web-development',
		title: 'Full-Stack Web Development with HTML, CSS & JavaScript',
		category: 'Development',
		level: 'Beginner',
		instructor: 'Meera Iyer',
		instructorImage: 'instructor-meera',
		image: 'course-web-dev',
		imageAlt: 'Developer writing website code on a laptop showing a colourful webpage',
		duration: '56 hr 20 mins',
		lectures: 48,
		weeks: 16,
		price: 24999,
		oldPrice: 32999,
		rating: 4.9,
		students: 4120,
		badge: 'Bestseller',
		short: 'From a blank page to a deployed website — HTML, CSS, JavaScript and a real portfolio site.',
		learn: ['Semantic HTML & modern CSS', 'JavaScript, DOM & fetch APIs', 'Responsive design that works at 320px', 'Deploy a live site & Git basics'],
		curriculum: [
			{ title: 'Web Foundations', lessons: ['How the web works', 'HTML structure & forms', 'CSS layout: flex & grid'] },
			{ title: 'JavaScript', lessons: ['Variables, functions & events', 'Fetching data from APIs', 'A working app, start to finish'] },
			{ title: 'Ship It', lessons: ['Git & GitHub', 'Hosting & domains', 'Capstone: your portfolio site'] }
		],

		tools: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Netlify'],
		jobs: ['Frontend Developer', 'Web Developer', 'Junior Full-Stack Developer'],
		reviews: [{ name: 'Amit Verma', text: 'Evening batch fit around my shop job. I now build websites for local businesses.', rating: 5 }, { name: 'Rohan Gupta', text: 'From a blank page to a live site in 16 weeks. The Git and deployment module is gold.', rating: 5 }],
		nextBatch: { date: 'Mon, 23 Nov 2026', days: 'Mon–Fri', time: '9:00 – 11:00 am', mode: 'Classroom, Pune', seats: 3 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'python-programming',
		title: 'Python Programming: From Basics to Real Projects',
		category: 'Development',
		level: 'Beginner',
		instructor: 'Meera Iyer',
		instructorImage: 'instructor-meera',
		image: 'course-python',
		imageAlt: 'Hands typing Python code on a laptop with a colourful code editor',
		duration: '38 hr 40 mins',
		lectures: 36,
		weeks: 10,
		price: 14999,
		oldPrice: 19999,
		rating: 4.8,
		students: 3680,
		badge: null,
		short: 'The first programming course that sticks — Python basics, then automation scripts you actually use.',
		learn: ['Python syntax, clearly explained', 'Files, APIs & automation scripts', 'OOP without the confusion', '3 portfolio projects'],
		curriculum: [
			{ title: 'Python Core', lessons: ['Setup & first scripts', 'Data types & control flow', 'Functions & modules'] },
			{ title: 'Practical Python', lessons: ['Files & spreadsheets', 'Web scraping basics', 'Automate a boring task'] },
			{ title: 'Projects', lessons: ['Expense tracker CLI', 'WhatsApp reminder bot (mock)', 'Final project & review'] }
		],

		tools: ['Python', 'VS Code', 'Git', 'REST APIs'],
		jobs: ['Python Developer', 'Automation Executive', 'Data Analyst (Entry)'],
		reviews: [{ name: 'Ananya Deshmukh', text: 'The automation scripts I built in week 6 still save me hours every week.', rating: 5 }, { name: 'Sanjay Iyer', text: 'Patient teaching, lots of practice. Perfect first programming course.', rating: 5 }],
		nextBatch: { date: 'Mon, 30 Nov 2026', days: 'Mon–Fri', time: '6:30 – 8:30 pm', mode: 'Classroom + Live Online', seats: 6 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'cyber-security',
		title: 'Cyber Security Fundamentals & Ethical Hacking Basics',
		category: 'Development',
		level: 'Intermediate',
		instructor: 'Vikram Singh',
		instructorImage: 'instructor-vikram',
		image: 'course-cyber-security',
		imageAlt: 'IT professional monitoring a security dashboard with shield graphics on monitors',
		duration: '36 hr 15 mins',
		lectures: 32,
		weeks: 10,
		price: 21999,
		oldPrice: 27999,
		rating: 4.8,
		students: 2140,
		badge: 'New',
		short: 'Networks, threats and defence — the security foundations every IT job now expects.',
		learn: ['How networks & the web really work', 'Common attacks & how to spot them', 'Linux, firewalls & safe lab practice', 'A security audit capstone'],
		curriculum: [
			{ title: 'Foundations', lessons: ['Networks & protocols', 'Threat landscape 2026', 'Linux essentials'] },
			{ title: 'Attack & Defence', lessons: ['Phishing & social engineering', 'Web vulnerabilities', 'Hardening a system'] },
			{ title: 'Capstone', lessons: ['Audit a demo site (authorised lab)', 'Write a findings report', 'Career paths in security'] }
		],

		tools: ['Linux', 'Wireshark', 'Nmap', 'Burp Suite'],
		jobs: ['SOC Analyst', 'Security Associate', 'IT Support Executive'],
		reviews: [{ name: 'Imran Shaikh', text: 'The security lab is the real deal — I audited a demo site end to end.', rating: 5 }, { name: 'Neha Kapoor', text: 'Made networking and threats easy to follow, even with no IT background.', rating: 4 }],
		nextBatch: { date: 'Sat, 5 Dec 2026', days: 'Sat–Sun', time: '10:00 am – 1:00 pm', mode: 'Classroom + Live Online', seats: 5 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'excel-advanced',
		title: 'Advanced Excel & Data Analysis for Office Jobs',
		category: 'Business',
		level: 'Intermediate',
		instructor: 'Arjun Mehta',
		instructorImage: 'instructor-arjun',
		image: 'course-excel',
		imageAlt: 'Office worker building a colourful spreadsheet with charts on a laptop',
		duration: '20 hr 05 mins',
		lectures: 24,
		weeks: 5,
		price: 6999,
		oldPrice: 9999,
		rating: 4.9,
		students: 4870,
		badge: 'Popular',
		short: 'Formulas, PivotTables and dashboards — the Excel skills that get office jobs and promotions.',
		learn: ['Formulas that save hours weekly', 'PivotTables & Power Query', 'Dashboards managers love', 'Practice on real office datasets'],
		curriculum: [
			{ title: 'Formula Power', lessons: ['XLOOKUP, INDEX-MATCH & IFs', 'Text & date functions', 'Error-proofing sheets'] },
			{ title: 'Analyse & Present', lessons: ['PivotTables & slicers', 'Charts that tell the truth', 'A management dashboard'] },
			{ title: 'Workplace Practice', lessons: ['Payroll & invoice templates', 'Data cleaning drills', 'Final assessment'] }
		],

		tools: ['Excel', 'Power Query', 'Power BI'],
		jobs: ['MIS Executive', 'Data Entry Executive', 'Back-office Analyst'],
		reviews: [{ name: 'Rohit Patil', text: 'PivotTables and dashboards got me noticed at work within weeks.', rating: 5 }, { name: 'Meera Joshi', text: 'Every lesson used real office data. I use these sheets daily.', rating: 5 }],
		nextBatch: { date: 'Mon, 23 Nov 2026', days: 'Mon–Fri', time: '2:00 – 4:00 pm', mode: 'Classroom, Pune', seats: 9 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'tally-gst',
		title: 'Tally Prime with GST: Complete Accounting Course',
		category: 'Financial',
		level: 'Beginner',
		instructor: 'Arjun Mehta',
		instructorImage: 'instructor-arjun',
		image: 'course-tally',
		imageAlt: 'Accountant at a desk with ledger books, calculator and laptop showing accounting software',
		duration: '30 hr 00 mins',
		lectures: 30,
		weeks: 8,
		price: 8499,
		oldPrice: 11999,
		rating: 4.9,
		students: 3960,
		badge: 'Job-ready',
		short: 'Tally Prime, GST returns and payroll — the accounting combo small businesses hire for.',
		learn: ['Tally Prime end to end', 'GST: GSTR-1, GSTR-3B & e-invoicing', 'Payroll, inventory & banking', 'Practice on a mock company'],
		curriculum: [
			{ title: 'Tally Foundations', lessons: ['Company setup & masters', 'Vouchers & ledgers', 'Inventory basics'] },
			{ title: 'GST in Tally', lessons: ['GST setup & rates', 'GSTR-1 & GSTR-3B', 'E-invoicing & e-way bills'] },
			{ title: 'Real Practice', lessons: ['A full month in a mock firm', 'Payroll & TDS intro', 'Final assessment & certificate'] }
		],

		tools: ['Tally Prime', 'GST Portal', 'Excel'],
		jobs: ['Accounts Executive', 'GST Assistant', 'Billing Executive'],
		reviews: [{ name: 'Rohit Patil', text: 'Filed my first GSTR-3B in the mock company before I ever touched a real one.', rating: 5 }, { name: 'Sunita Agarwal', text: 'Payroll and inventory modules are exactly what our CA firm uses.', rating: 5 }],
		nextBatch: { date: 'Mon, 30 Nov 2026', days: 'Mon–Fri', time: '9:00 – 11:00 am', mode: 'Classroom, Pune', seats: 4 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'ai-ml-foundations',
		title: 'Artificial Intelligence & Machine Learning Foundations',
		category: 'Data Science',
		level: 'Intermediate',
		instructor: 'Meera Iyer',
		instructorImage: 'instructor-meera',
		image: 'course-ai',
		imageAlt: 'Student exploring AI and machine learning visuals on a laptop screen',
		duration: '44 hr 50 mins',
		lectures: 40,
		weeks: 12,
		price: 29999,
		oldPrice: 36999,
		rating: 4.8,
		students: 2870,
		badge: 'New',
		short: 'What AI can and cannot do — prompts, models and ML basics, taught without the hype.',
		learn: ['How modern AI models work', 'Prompting & AI tools for work', 'ML pipelines, simply explained', 'Build a small AI-powered app'],
		curriculum: [
			{ title: 'AI, Demystified', lessons: ['From rules to learning', 'LLMs & generative AI', 'AI at Indian workplaces'] },
			{ title: 'Working with AI', lessons: ['Prompting that works', 'AI for docs, sheets & code', 'Spotting AI mistakes'] },
			{ title: 'Build & Ship', lessons: ['A chatbot with an API', 'Evaluate & improve it', 'Capstone demo day'] }
		],

		tools: ['ChatGPT', 'Python', 'Hugging Face', 'Streamlit'],
		jobs: ['AI Support Executive', 'Junior ML Engineer', 'Prompt Engineer (Entry)'],
		reviews: [{ name: 'Karan Joshi', text: 'No hype, just what AI can and cannot do — and how to use it at work.', rating: 5 }, { name: 'Priya Desai', text: 'Built a working chatbot in the capstone. My manager was impressed.', rating: 4 }],
		nextBatch: { date: 'Mon, 7 Dec 2026', days: 'Mon–Fri', time: '6:30 – 8:30 pm', mode: 'Live Online', seats: 7 },
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'cloud-computing-aws',
		title: 'Cloud Computing with AWS: From Zero to Deployment',
		category: 'Development',
		level: 'Intermediate',
		instructor: 'Rahul Sharma',
		instructorImage: 'instructor-rahul',
		image: 'course-cloud',
		imageAlt: 'Cloud engineer working with server and cloud network diagrams on a laptop',
		duration: '34 hr 25 mins',
		lectures: 34,
		weeks: 10,
		price: 18999,
		oldPrice: 24999,
		rating: 4.7,
		students: 1730,
		badge: null,
		short: 'EC2, S3, databases and deployment — run real workloads on AWS with confidence.',
		learn: ['Cloud concepts & the AWS console', 'EC2, S3 & RDS hands-on', 'Deploy & secure a web app', 'Costs, billing & free-tier safety'],
		curriculum: [
			{ title: 'Cloud Basics', lessons: ['Why cloud, why AWS', 'IAM & security first', 'Your first EC2 instance'] },
			{ title: 'Core Services', lessons: ['S3 storage & hosting', 'Databases on RDS', 'Networking & VPC basics'] },
			{ title: 'Deploy', lessons: ['A full app on AWS', 'Monitoring & alerts', 'Cost review & capstone'] }
		],

		tools: ['AWS Console', 'EC2', 'S3', 'RDS'],
		jobs: ['Cloud Support Associate', 'DevOps Trainee', 'System Administrator'],
		reviews: [{ name: 'Imran Shaikh', text: 'Deployed a real app on AWS in the final module. The cost-safety tips saved me money.', rating: 5 }, { name: 'Vikram Reddy', text: 'Clear, step-by-step cloud labs. Great start for a DevOps career.', rating: 4 }],
		nextBatch: { date: 'Sat, 5 Dec 2026', days: 'Sat–Sun', time: '10:00 am – 1:00 pm', mode: 'Live Online', seats: 6 },
		certificate: true,
		mode: 'Live Online'
	}
];

export const instructors = [
	{ name: 'Meera Iyer', role: 'Full-Stack Development & AI', image: 'instructor-meera', exp: '12 yrs', students: 8200, courses: 3, slug: 'meera-iyer', bio: 'Ex-product engineer from Bengaluru. Has taught 8,200+ students to build and ship real websites and AI apps.', credentials: 'B.E. Computer Science, ex-product engineer', companies: 'Bengaluru product startups', highlights: ['Built EduLe’s full-stack and AI tracks from scratch', 'Mentored 40+ student capstone launches', 'Speaks at Pune developer meetups'] },
	{ name: 'Rahul Sharma', role: 'Data Science & Cloud', image: 'instructor-rahul', exp: '10 yrs', students: 6400, courses: 2, slug: 'rahul-sharma', bio: 'Data scientist who moved from finance to teaching. Known for making statistics feel obvious.', credentials: 'M.Sc. Statistics, AWS Certified', companies: 'Mumbai fintech & analytics', highlights: ['10 years across finance analytics and cloud', 'Designed the data-science capstone used by 3,000+ students', 'Runs the weekend AI tools workshop'] },
	{ name: 'Sana Kapoor', role: 'UI/UX & Graphic Design', image: 'instructor-sana', exp: '9 yrs', students: 4800, courses: 2, slug: 'sana-kapoor', bio: 'Design lead turned trainer. Her students’ portfolios have landed jobs at startups across India.', credentials: 'B.Des. Communication Design', companies: 'Pune & Mumbai design studios', highlights: ['9 years leading design teams', 'Portfolio reviews for every design student', 'Judges EduLe’s annual design showcase'] },
	{ name: 'Arjun Mehta', role: 'Finance, Accounting & Business', image: 'instructor-arjun', exp: '15 yrs', students: 5100, courses: 4, slug: 'arjun-mehta', bio: 'Chartered accountant and former CFO. Teaches Tally, GST and budgeting the way real offices use them.', credentials: 'Chartered Accountant (CA)', companies: 'CA firms & mid-size businesses', highlights: ['15 years in accounting and finance leadership', 'Built the mock-company practice used in Tally classes', 'Guest lectures on GST for local business associations'] },
	{ name: 'Priya Nair', role: 'Digital Marketing', image: null, exp: '8 yrs', students: 2100, courses: 1, slug: 'priya-nair', bio: 'Growth marketer for D2C brands. Teaches campaigns on the budgets small businesses actually have.', credentials: 'MBA Marketing, Google Ads certified', companies: 'D2C brands & agencies', highlights: ['8 years growing D2C brands', 'Ran campaigns for 30+ small businesses', 'Leads the free digital-marketing workshop'] },
	{ name: 'Vikram Singh', role: 'Cyber Security', image: 'instructor-vikram', exp: '11 yrs', students: 1800, courses: 1, slug: 'vikram-singh', bio: 'Security analyst and CTF mentor. Runs EduLe’s hands-on security lab and audit capstones.', credentials: 'CEH, CompTIA Security+', companies: 'IT security teams & SOCs', highlights: ['11 years in security operations', 'Built EduLe’s authorised security lab', 'Coaches the student CTF team'] }
];

export const batches = [
	{ name: 'Morning Batch', time: '9:00 – 11:00 am', days: 'Mon–Fri', mode: 'Classroom, Pune' },
	{ name: 'Afternoon Batch', time: '2:00 – 4:00 pm', days: 'Mon–Fri', mode: 'Classroom, Pune' },
	{ name: 'Evening Batch', time: '6:30 – 8:30 pm', days: 'Mon–Sat', mode: 'Classroom + Live Online' },
	{ name: 'Weekend Batch', time: '10:00 am – 1:00 pm', days: 'Sat–Sun', mode: 'Live Online' }
];

export const testimonials = [
	{ name: 'Ananya Deshmukh', course: 'Data Science with Python', text: 'I joined after my B.Com with zero coding. Twelve weeks later I had four projects on GitHub and a data analyst interview lined up. The teachers explain until it clicks.', rating: 5 },
	{ name: 'Rohit Patil', course: 'Tally Prime with GST', text: 'Got a job at a CA firm in Pune within a month of finishing. The mock-company practice is exactly what the office asked me to do on day one.', rating: 5 },
	{ name: 'Kavya Reddy', course: 'UI/UX Design', text: 'The colour and Figma modules changed how I design. My portfolio from this course got me freelance clients before I even finished.', rating: 5 },
	{ name: 'Amit Verma', course: 'Full-Stack Web Development', text: 'Evening batch fit around my shop job. Now I build websites for local businesses on the side — the instalment plan made it possible.', rating: 5 },
	{ name: 'Sneha Kulkarni', course: 'Digital Marketing', text: 'I run a home business and needed customers, not theory. The WhatsApp and Instagram modules paid for the course in the first month.', rating: 5 },
	{ name: 'Imran Shaikh', course: 'Cloud Computing with AWS', text: 'From B.Sc. graduate to cloud support associate in four months. The hands-on AWS labs were exactly what the interviewer asked about.', rating: 5 }
];

export const placements = [
	{ company: 'TechServe Solutions', role: 'Junior Data Analyst', students: 214 },
	{ company: 'Pune Accounting Partners', role: 'Accounts Executive', students: 186 },
	{ company: 'WebKraft Studio', role: 'Frontend Developer', students: 142 },
	{ company: 'RetailKart India', role: 'Digital Marketing Executive', students: 128 },
	{ company: 'CloudNine IT', role: 'Cloud Support Associate', students: 96 },
	{ company: 'DesignNest Agency', role: 'UI Designer', students: 88 },
	{ company: 'BrightAccounts LLP', role: 'Accounts Executive', students: 74 },
	{ company: 'DataBridge Analytics', role: 'Junior Data Analyst', students: 61 }
];

export const blogPosts = [
	{ slug: 'best-computer-courses-after-12th', author: 'Meera Iyer', title: 'Best Computer Courses After 12th in 2026', excerpt: 'Confused after boards? These five job-ready courses pay off fastest — with honest fees, durations and starting salaries.', date: '12 Nov 2026', read: '6 min read', image: 'course-data-science', category: 'Career Guide', body: ['After Class 12, the question is not which course is trendy — it is which one gets you hired. In our Pune classrooms, the fastest job outcomes this year came from five paths: data analysis, web development, accounting with Tally and GST, UI/UX design, and digital marketing.', 'Data analysis suits students who like maths and patterns; web development suits builders; Tally and GST suit commerce students and lead directly to accounts jobs in CA firms and small businesses. UI/UX rewards visual thinkers, and digital marketing rewards communicators.', 'Before you enrol anywhere, ask three questions: does the course include real projects, does it end with a verifiable certificate, and does the institute help with interviews? If any answer is vague, keep looking.'] },
	{ slug: 'python-vs-excel-which-first', author: 'Rahul Sharma', title: 'Python or Excel First? A Practical Answer for Beginners', excerpt: 'Both are useful, but the right order depends on your goal. Here is how to choose — and when to learn both.', date: '28 Oct 2026', read: '5 min read', image: 'course-python', category: 'Learning', body: ['If your goal is an office job in the next three months, learn Excel first. Advanced Excel — PivotTables, XLOOKUP, dashboards — is the single most requested skill in accounts, sales and operations job posts.', 'If your goal is a tech career, start with Python. It opens data analysis, automation and web development, and it teaches you to think like a programmer.', 'The good news: they stack. Excel teaches you to think in tables; Python teaches you to automate them. Most of our students do Excel in month one and Python next — and employers notice both on a CV.'] },
	{ slug: 'how-to-verify-certificate', author: 'Arjun Mehta', title: 'How Employers Verify an EduLe Certificate (and Why It Matters)', excerpt: 'Every EduLe certificate carries a verification code. Here is exactly how hiring managers check it in under a minute.', date: '15 Oct 2026', read: '4 min read', image: 'classroom', category: 'Certificates', body: ['Every certificate we issue carries a unique code, printed on the certificate and stored in our records. An employer visits our verification page, enters the code, and sees the student name, course, completion date and grade — in under a minute.', 'This matters because fake certificates are common in hiring. A verifiable certificate protects honest students: your achievement is checkable, not just claimed.', 'If you are a student, keep your code safe and add it to your CV and LinkedIn. If you are an employer, try the demo verification on our Certificates page.'] },
	{ slug: 'tally-vs-excel-which-gets-you-hired', author: 'Arjun Mehta', title: 'Tally vs Excel: Which Accounting Skill Gets You Hired Faster?', excerpt: 'Both appear in nearly every accounts job post. Here is which one to learn first — and why most hired candidates know both.', date: '18 Nov 2026', read: '5 min read', image: 'course-tally', category: 'Career Guide', body: ['Open any accounts job post in Pune and you will see the same two words: Tally and Excel. Employers rarely ask for one without the other — but the order you learn them in matters.', 'Learn Excel first if you need a job in weeks: PivotTables, XLOOKUP and dashboards are the daily tools of every accounts, sales and operations team. Tally comes next, because it is where the actual books live — vouchers, ledgers, GST returns and payroll.', 'The candidates who get hired fastest are the ones who can do both in one workflow: pull a report from Tally, clean it in Excel, and present it to a manager. That is exactly how our Tally course is taught — on a mock company, not on slides.'] },
	{ slug: 'free-ai-tools-office-work-2026', author: 'Rahul Sharma', title: '10 Free AI Tools Every Office Worker Should Know in 2026', excerpt: 'From drafting emails to cleaning spreadsheets — the free AI tools that genuinely save time at work, and the ones to skip.', date: '5 Nov 2026', read: '6 min read', image: 'course-ai', category: 'Learning', body: ['AI tools are everywhere now, but only a handful actually help in a normal office job. The useful ones share one trait: they remove a boring, repeated task — drafting a standard email, summarising a long document, or cleaning a messy spreadsheet.', 'Start with three: a chatbot for drafting and summarising, a spreadsheet helper for formulas, and a meeting-notes tool. Learn to check their output — AI makes confident mistakes, and spotting them is the real skill.', 'We teach all of this hands-on in our AI Foundations course, including when not to trust the tool. The goal is not to replace your judgement; it is to give you back two hours a day.'] },
	{ slug: 'data-analyst-interview-preparation', author: 'Meera Iyer', title: 'How to Prepare for a Data Analyst Interview (With Sample Questions)', excerpt: 'What interviewers actually ask junior data analysts — and how to answer with projects, not just theory.', date: '22 Oct 2026', read: '7 min read', image: 'course-data-science', category: 'Career Guide', body: ['Junior data analyst interviews rarely test exotic maths. They test three things: can you clean messy data, can you explain a chart in plain language, and can you use SQL and Excel or Python without freezing.', 'Prepare two stories: one project where you found something surprising in data, and one where you fixed a messy dataset. Interviewers remember stories far longer than they remember definitions.', 'Bring your work. A GitHub link, a dashboard screenshot, or a one-page case study beats a long list of course names on a CV. Our data science students build four such projects — that is what gets them shortlisted.'] }
];

export const faqs = [
	{ q: 'Do I need a computer background to join?', a: 'No. Most of our students start with no prior knowledge. Beginner courses assume nothing, and our faculty explain every concept from scratch with plenty of practice.' },
	{ q: 'Are the certificates recognised by employers?', a: 'Yes. Every EduLe certificate carries a unique verification code that employers can check on our Certificates page. We also add certificates to your LinkedIn profile on request.' },
	{ q: 'Can I pay fees in instalments?', a: 'Yes. Most courses can be split into 2 instalments at no extra charge. The first instalment is due at enrolment; the rest follow the batch schedule. See the Fees page for the exact split per course.' },
	{ q: 'Do you offer online classes?', a: 'Yes. Every course runs in classroom batches in Pune and as live online batches with the same faculty, recordings and doubt-clearing sessions.' },
	{ q: 'What if I miss a class?', a: 'All live sessions are recorded and shared the same day, and every batch has a weekly doubt-clearing slot. You can also repeat a missed module with the next batch free of charge.' },
	{ q: 'Do you help with jobs and placements?', a: 'Yes. We run resume workshops, mock interviews and placement drives with partner employers in Pune and Mumbai. Placement support is free for all certificate-course students — see the Placements page.' },
	{ q: 'Is there a refund policy?', a: 'Yes. If you withdraw within the first 7 days of your batch, we refund the unused portion of your fees minus a ₹1,000 processing charge. See the Terms page for full details.' },
	{ q: 'What is the discount on the homepage?', a: 'All paid courses are currently up to 30% off the listed fee as our enrolment offer (the Finance Series course is free). Pay in full for an extra 5% off — up to 35% off the list price in total. The discounted price shown on each course is the price before that extra full-pay discount, and all fees include GST.' },
	{ q: 'Can I attend a free demo class before enrolling?', a: 'Yes. Every course offers a free 60-minute demo class — online or in our Pune classroom. Pick a date and slot on the Free Demo page and we confirm on WhatsApp within a few hours.' },
	{ q: 'Do you offer scholarships?', a: 'Yes. We offer a merit scholarship of up to ₹10,000, a 15% Women in Tech discount on Development and Data Science courses, and a 10% early-bird discount. See the Scholarships page for eligibility.' }
];

export type CareerPath = {
	slug: string;
	title: string;
	goal: string;
	courses: string[];
	weeks: number;
	fee: number;
	bundle: number;
	roles: string[];
	salary: string;
	image: string;
};

export const careerPaths: CareerPath[] = [
	{ slug: 'data-analyst', title: 'Become a Data Analyst', goal: 'From zero to job-ready analyst: spreadsheets, Python and real ML projects.', courses: ['python-programming', 'excel-advanced', 'data-science-python'], weeks: 27, fee: 54498, bundle: 49999, roles: ['Data Analyst', 'MIS Executive', 'Business Analyst'], salary: '₹3.5–6 LPA*', image: 'course-data-science' },
	{ slug: 'full-stack-developer', title: 'Become a Full-Stack Developer', goal: 'Build and deploy real websites, then run them on the cloud.', courses: ['web-development', 'python-programming', 'cloud-computing-aws'], weeks: 36, fee: 58997, bundle: 54999, roles: ['Frontend Developer', 'Full-Stack Developer', 'Web Developer'], salary: '₹4–8 LPA*', image: 'course-web-dev' },
	{ slug: 'ui-ux-designer', title: 'Become a UI/UX Designer', goal: 'Colour, layout and Figma — a portfolio that wins freelance and full-time work.', courses: ['ux-color-schemes', 'graphic-design-badges'], weeks: 14, fee: 53500, bundle: 49999, roles: ['UI Designer', 'Visual Designer', 'Graphic Designer'], salary: '₹3–5.5 LPA*', image: 'course-uiux' },
	{ slug: 'accountant', title: 'Become an Accountant', goal: 'Tally, GST and Excel — the exact combo CA firms and small businesses hire for.', courses: ['tally-gst', 'excel-advanced', 'finance-budget'], weeks: 17, fee: 15498, bundle: 13999, roles: ['Accounts Executive', 'GST Assistant', 'Billing Executive'], salary: '₹2.5–4.5 LPA*', image: 'course-tally' }
];

export const workshops = [
	{ slug: 'build-first-website', title: 'Free Workshop: Build Your First Website in 2 Hours', date: 'Sat, 21 Nov 2026', time: '11:00 am – 1:00 pm', startDate: '2026-11-21T11:00:00+05:30', endDate: '2026-11-21T13:00:00+05:30', mode: 'Classroom + Live Online', trainer: 'Meera Iyer', image: 'workshop-seminar', seats: 40, desc: 'No experience needed. Leave with a live one-page website you built yourself — and a clear idea of what a web career looks like.', agenda: ['Welcome & setup — get your tools ready (15 min)', 'HTML basics: structure a real page (30 min)', 'CSS: colours, layout & making it look good (30 min)', 'Publish your site live & open Q&A (45 min)'] },
	{ slug: 'ai-tools-office-work', title: 'AI Tools for Office Work', date: 'Sat, 28 Nov 2026', time: '11:00 am – 12:30 pm', startDate: '2026-11-28T11:00:00+05:30', endDate: '2026-11-28T12:30:00+05:30', mode: 'Live Online', trainer: 'Rahul Sharma', image: 'course-ai', seats: 100, desc: 'The free AI tools that genuinely save time at work — drafting, spreadsheets, summaries — and how to check their output.', agenda: ['The 10 free AI tools worth your time (20 min)', 'Drafting emails & documents with AI (25 min)', 'Spreadsheets & summaries, hands-on (25 min)', 'Spotting AI mistakes & Q&A (20 min)'] },
	{ slug: 'tally-gst-live-return', title: 'Tally + GST: File a Return Live', date: 'Sun, 29 Nov 2026', time: '10:00 am – 12:00 pm', startDate: '2026-11-29T10:00:00+05:30', endDate: '2026-11-29T12:00:00+05:30', mode: 'Classroom, Pune', trainer: 'Arjun Mehta', image: 'course-tally', seats: 30, desc: 'Watch a full GST return filed step by step on a mock company, then try it yourself with faculty beside you.', agenda: ['The mock company & its books (15 min)', 'GSTR-1, filed step by step (35 min)', 'GSTR-3B & payment, live (35 min)', 'Try it yourself with faculty beside you (35 min)'] },
	{ slug: 'design-logo-figma', title: 'Design a Logo in Figma', date: 'Sat, 5 Dec 2026', time: '11:00 am – 1:00 pm', startDate: '2026-12-05T11:00:00+05:30', endDate: '2026-12-05T13:00:00+05:30', mode: 'Live Online', trainer: 'Sana Kapoor', image: 'course-uiux', seats: 60, desc: 'From a blank canvas to a finished logo using grids and geometry — a perfect first taste of graphic design.', agenda: ['What makes a logo work (15 min)', 'Grids & geometry in Figma (40 min)', 'Build your logo, step by step (40 min)', 'Share, critique & export (25 min)'] }
];

export const alumni = [
	{ name: 'Ananya Deshmukh', course: 'Data Science with Python', previous: 'B.Com graduate, no coding', current: 'Junior Data Analyst', company: 'TechServe Solutions', salary: '₹4.2 LPA', image: 'alumni-graduate', quote: 'I joined after my B.Com with zero coding. Twelve weeks later I had four projects on GitHub and a data analyst interview lined up.' },
	{ name: 'Rohit Patil', course: 'Tally Prime with GST', previous: '12th pass, looking for work', current: 'Accounts Executive', company: 'BrightAccounts LLP', salary: '₹3 LPA', image: null, quote: 'Got a job at a CA firm in Pune within a month of finishing. The mock-company practice is exactly what the office asked me to do on day one.' },
	{ name: 'Kavya Reddy', course: 'UI/UX Design', previous: 'Self-taught designer', current: 'UI Designer', company: 'DesignNest Agency', salary: '₹5 LPA', image: null, quote: 'The colour and Figma modules changed how I design. My portfolio from this course got me freelance clients before I even finished.' },
	{ name: 'Amit Verma', course: 'Full-Stack Web Development', previous: 'Shop assistant', current: 'Frontend Developer', company: 'WebKraft Studio', salary: '₹4.5 LPA', image: null, quote: 'Evening batch fit around my shop job. Now I build websites for local businesses on the side.' },
	{ name: 'Sneha Kulkarni', course: 'Digital Marketing', previous: 'Home business owner', current: 'Digital Marketing Executive', company: 'RetailKart India', salary: '₹3.6 LPA', image: null, quote: 'The WhatsApp and Instagram modules paid for the course in the first month. Customers started coming from social media.' },
	{ name: 'Imran Shaikh', course: 'Cloud Computing with AWS', previous: 'B.Sc. graduate', current: 'Cloud Support Associate', company: 'CloudNine IT', salary: '₹4 LPA', image: null, quote: 'From B.Sc. graduate to cloud support associate in four months. The hands-on AWS labs were exactly what the interviewer asked about.' }
];

export const partners = ['TechServe Solutions', 'BrightAccounts LLP', 'WebKraft Studio', 'RetailKart India', 'CloudNine IT', 'DesignNest Agency', 'Pune Accounting Partners', 'DataBridge Analytics'];

export const scholarships = [
	{ name: 'Merit Scholarship', amount: 'Up to ₹10,000 off', desc: 'Score in the top 10% of our free entrance test and get up to ₹10,000 off any certificate course.', eligibility: 'Open to all new students; test taken online or in Pune.' },
	{ name: 'Women in Tech', amount: '15% off', desc: '15% off all Development and Data Science courses for women students, every batch.', eligibility: 'All women students; applied automatically at enrolment.' },
	{ name: 'Early Bird', amount: '10% off', desc: 'Enrol at least 2 weeks before your batch starts and save an extra 10% on the fee.', eligibility: 'All courses; combines with the enrolment offer.' },
	{ name: 'Refer & Earn', amount: '₹1,000 off each', desc: 'Refer a friend — when they enrol, you both get ₹1,000 off your next course.', eligibility: 'Current and past students; no limit on referrals.' }
];

export const gallery = [
	{ image: 'classroom', alt: 'Bright EduLe classroom with students at desktop computers', caption: 'Morning batch in the Pune classroom', category: 'Classroom' },
	{ image: 'lab-students', alt: 'Students collaborating around a laptop in an EduLe computer lab', caption: 'Lab session — students debugging together', category: 'Lab' },
	{ image: 'workshop-seminar', alt: 'Free weekend workshop with a full room of learners', caption: 'Free weekend workshop, full house', category: 'Events' },
	{ image: 'corporate-training', alt: 'Corporate training session for a Pune business team', caption: 'Corporate training for a local business team', category: 'Events' },
	{ image: 'instructor-teaching', alt: 'Instructor explaining a business strategy on a large screen to adult students', caption: 'Faculty teaching a business strategy session', category: 'Classroom' },
	{ image: 'alumni-graduate', alt: 'EduLe graduate holding a certificate', caption: 'Graduation day — certificate in hand', category: 'Events' },
	{ image: 'course-web-dev', alt: 'Developer writing website code on a laptop', caption: 'Web development batch — capstone week', category: 'Lab' },
	{ image: 'course-data-science', alt: 'Data analyst working with charts and dashboards', caption: 'Data science batch — dashboard project', category: 'Lab' },
	{ image: 'course-uiux', alt: 'Designer sketching mobile app wireframes and colour swatches', caption: 'UI/UX studio — colour & Figma session', category: 'Classroom' }
];

export const studentWork = [
	{ student: 'Ananya Deshmukh', course: 'data-science-python', courseTitle: 'Data Science with Python', title: 'Pune House-Price Predictor', desc: 'An ML model trained on Pune property listings that predicts prices from area, bedrooms and amenities — with a live dashboard.', tools: ['Python', 'pandas', 'scikit-learn', 'Plotly'], outcome: 'Shown in 4 job interviews; shortlisted for a data analyst role', image: 'course-data-science' },
	{ student: 'Amit Verma', course: 'web-development', courseTitle: 'Full-Stack Web Development', title: 'Kirana Store Website', desc: 'A complete website for a neighbourhood grocery store in Pune — catalogue, WhatsApp ordering and UPI payment links.', tools: ['HTML', 'CSS', 'JavaScript', 'Netlify'], outcome: 'Live site used by a real local business', image: 'course-web-dev' },
	{ student: 'Kavya Reddy', course: 'ux-color-schemes', courseTitle: 'UX Colour Schemes', title: 'Banking App Redesign', desc: 'A full recolour and re-layout of a banking app screen, with an accessible palette that passes WCAG 2.2 AA contrast.', tools: ['Figma', 'Stark', 'Adobe Color'], outcome: 'Won freelance work from a Pune fintech startup', image: 'course-uiux' },
	{ student: 'Rohit Patil', course: 'tally-gst', courseTitle: 'Tally Prime with GST', title: 'Mock-Company Books, One Full Month', desc: 'A complete month of accounts for a mock trading firm — vouchers, ledgers, inventory, GSTR-1 and GSTR-3B, all filed in Tally.', tools: ['Tally Prime', 'GST Portal', 'Excel'], outcome: 'Hired by a CA firm within a month of finishing', image: 'course-tally' },
	{ student: 'Sneha Kulkarni', course: 'brand-marketing', courseTitle: 'Brand Marketing', title: '30-Day Instagram Campaign', desc: 'A month-long content plan for a home food business — reels, WhatsApp broadcast and a Google Business profile.', tools: ['Canva', 'Meta Business Suite', 'WhatsApp Business'], outcome: 'Doubled the business’s Instagram enquiries', image: 'course-digital-marketing' },
	{ student: 'Imran Shaikh', course: 'cyber-security', courseTitle: 'Cyber Security Fundamentals', title: 'Authorised Security Audit', desc: 'A full audit of a demo site in the EduLe security lab — findings report, severity ratings and fixes, presented to faculty.', tools: ['Linux', 'Nmap', 'Burp Suite'], outcome: 'Presented at the EduLe demo day; cited in interviews', image: 'course-cyber-security' },
	{ student: 'Karan Joshi', course: 'ai-ml-foundations', courseTitle: 'AI & ML Foundations', title: 'Shop Assistant Chatbot', desc: 'A small AI chatbot that answers product and price questions for a Pune electronics shop, built on a public LLM API.', tools: ['Python', 'ChatGPT', 'Streamlit'], outcome: 'Demoed to the shop owner; now answering real customer queries', image: 'course-ai' },
	{ student: 'Meera Joshi', course: 'excel-advanced', courseTitle: 'Advanced Excel', title: 'Management Dashboard', desc: 'A sales dashboard with PivotTables, slicers and charts that a manager can read in 30 seconds — built on real office data.', tools: ['Excel', 'Power Query', 'Power BI'], outcome: 'Adopted by the student’s office team', image: 'course-excel' }
];

export const mentors = [
	{ slug: 'meera-iyer', name: 'Meera Iyer', focus: 'Web development & AI — portfolio reviews, capstone feedback, interview prep', topics: ['Portfolio review', 'Capstone feedback', 'Interview prep'], price: 499 },
	{ slug: 'rahul-sharma', name: 'Rahul Sharma', focus: 'Data science & cloud — project debugging, career roadmap, AWS labs', topics: ['Project debugging', 'Career roadmap', 'AWS labs'], price: 499 },
	{ slug: 'sana-kapoor', name: 'Sana Kapoor', focus: 'Design — portfolio critique, Figma feedback, freelance pricing', topics: ['Portfolio critique', 'Figma feedback', 'Freelance pricing'], price: 499 },
	{ slug: 'arjun-mehta', name: 'Arjun Mehta', focus: 'Accounting & business — Tally practice, GST doubts, business plans', topics: ['Tally practice', 'GST doubts', 'Business plans'], price: 499 },
	{ slug: 'vikram-singh', name: 'Vikram Singh', focus: 'Cyber security — lab walkthroughs, audit reports, CTF coaching', topics: ['Lab walkthrough', 'Audit reports', 'CTF coaching'], price: 499 }
];

export const placementReport = [
	{ batch: 'Nov 2026 — Data Science', students: 42, placed: 31, topRoles: 'Junior Data Analyst, MIS Executive', avgPackage: '₹4.1 LPA' },
	{ batch: 'Nov 2026 — Web Development', students: 38, placed: 29, topRoles: 'Frontend Developer, Web Developer', avgPackage: '₹4.3 LPA' },
	{ batch: 'Oct 2026 — Tally + GST', students: 45, placed: 36, topRoles: 'Accounts Executive, GST Assistant', avgPackage: '₹3.0 LPA' },
	{ batch: 'Oct 2026 — UI/UX Design', students: 28, placed: 19, topRoles: 'UI Designer, Graphic Designer', avgPackage: '₹4.6 LPA' },
	{ batch: 'Sep 2026 — Digital Marketing', students: 33, placed: 24, topRoles: 'Digital Marketing Executive, Social Media Manager', avgPackage: '₹3.4 LPA' },
	{ batch: 'Sep 2026 — Cloud with AWS', students: 26, placed: 18, topRoles: 'Cloud Support Associate, DevOps Trainee', avgPackage: '₹4.0 LPA' }
];

export const certificateRecords: Record<string, { name: string; course: string; completed: string; grade: string }> = {
	'EDULE-2026-0142': { name: 'Ananya Deshmukh', course: 'Data Science and Machine Learning with Python', completed: '12 Oct 2026', grade: 'A' },
	'EDULE-2026-0087': { name: 'Rohit Patil', course: 'Tally Prime with GST', completed: '28 Sep 2026', grade: 'A' },
	'EDULE-2026-0213': { name: 'Demo Student', course: 'Finance Series: Budget & Net Worth', completed: '30 Oct 2026', grade: 'A' }
};

export const demoLesson = {
	title: 'Free Demo Lesson: Your First Python Script in 20 Minutes',
	poster: 'course-python',
	duration: 'PT20M',
	description: 'A free 20-minute demo lesson from the Python Programming course: write your first real script, automate a boring task, and see how EduLe teaches. Taught by Meera Iyer.',
	transcript: [
		{ t: '0:00', text: 'Namaste, and welcome to EduLe. I am Meera Iyer, and in the next twenty minutes you will write your first real Python program — no experience needed.' },
		{ t: '1:30', text: 'First, we open the editor and print our first line. Python reads almost like English: print, brackets, and your words in quotes.' },
		{ t: '4:00', text: 'Next, variables. Think of a variable as a labelled box: we store a name, a number, or a list of expenses, and Python remembers it for us.' },
		{ t: '8:00', text: 'Now the useful part: we take a messy list of monthly expenses and ask Python to add them up, find the biggest one, and show the total in rupees.' },
		{ t: '13:00', text: 'We add one condition — if the total crosses your budget, Python warns you. That is the whole idea of programming: rules that do the boring work for you.' },
		{ t: '17:00', text: 'Finally, we save the script and run it again with different numbers. Change the data, keep the program — that is automation.' },
		{ t: '19:00', text: 'That is your first script. In the full course we build three portfolio projects like this, with a teacher beside you. Book a free demo class to try a live lesson.' }
	]
};

export function instructorSlug(name: string): string | null {
	return instructors.find((t) => t.name === name)?.slug ?? null;
}

export function getInstructor(slug: string) {
	return instructors.find((t) => t.slug === slug);
}

export function getCareerPath(slug: string) {
	return careerPaths.find((p) => p.slug === slug);
}

export function inr(n: number): string {
	return '₹' + n.toLocaleString('en-IN');
}

export function getCourse(id: string): Course | undefined {
	return courses.find((c) => c.id === id);
}
