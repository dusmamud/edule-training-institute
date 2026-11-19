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
	phoneDisplay: '(970) 262-1413',
	phoneHref: 'tel:+919702621413',
	email: 'hello@edule.in',
	address: '2nd Floor, Sunrise Plaza, MG Road, Pune, Maharashtra 411001',
	hours: 'Mon–Sat, 9:00 am – 7:00 pm IST',
	whatsappHref: 'https://wa.me/919702621413',
	instagram: 'https://www.instagram.com/edule.in',
	facebook: 'https://www.facebook.com/edule.in',
	twitter: 'https://x.com/edule_in',
	youtube: 'https://www.youtube.com/@edule-in',
	stats: { courses: 1235, students: 28400, rating: 4.8, ratingCount: '9.8K', instructors: 42, placed: 18200 }
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
		duration: '08 hr 15 mins',
		lectures: 29,
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
		duration: '08 hr 15 mins',
		lectures: 29,
		weeks: 8,
		price: 34000,
		oldPrice: null,
		rating: 4.9,
		students: 1980,
		badge: null,
		short: 'Colour theory, palettes and accessible UI — design interfaces that feel right and read clearly.',
		learn: ['Colour theory and 60-30-10 palettes', 'Accessible contrast (WCAG 2.2 AA)', 'Figma colour systems & tokens', 'Portfolio: redesign a real app screen'],
		curriculum: [
			{ title: 'Colour Foundations', lessons: ['Hue, saturation & value', 'Colour psychology in Indian markets', 'Building a palette'] },
			{ title: 'Colour in Figma', lessons: ['Styles, variables & tokens', 'Dark mode & theming', 'Handoff to developers'] },
			{ title: 'Portfolio Project', lessons: ['Audit an existing app', 'Redesign with a new scheme', 'Present & critique'] }
		],
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
		duration: '08 hr 15 mins',
		lectures: 29,
		weeks: 6,
		price: 24500,
		oldPrice: 28900,
		rating: 4.9,
		students: 1540,
		badge: null,
		short: 'Lead teams, shape culture and make decisions — practical leadership for growing Indian businesses.',
		learn: ['Leadership styles that actually work', 'Building culture in small teams', 'Difficult conversations & feedback', 'A 90-day leadership plan'],
		curriculum: [
			{ title: 'Leading People', lessons: ['What great managers do daily', 'Motivation beyond salary', 'Hiring & onboarding well'] },
			{ title: 'Culture & Communication', lessons: ['Values into everyday habits', 'Meetings that respect time', 'Handling conflict'] },
			{ title: 'Your Plan', lessons: ['Diagnose your team', 'Draft a 90-day plan', 'Peer review & feedback'] }
		],
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
		duration: '08 hr 15 mins',
		lectures: 29,
		weeks: 4,
		price: 0,
		oldPrice: 9999,
		rating: 4.9,
		students: 5210,
		badge: 'Free',
		short: 'Budgeting, saving and net-worth tracking for real Indian households — free, practical, no jargon.',
		learn: ['Build a monthly budget that sticks', 'Emergency funds & goal-based saving', 'Track net worth in a spreadsheet', 'Debt, EMIs and interest — plainly explained'],
		curriculum: [
			{ title: 'Money Basics', lessons: ['Income, expenses & cash flow', 'The 50-30-20 rule, Indian edition', 'Banking & UPI hygiene'] },
			{ title: 'Budgeting in Practice', lessons: ['A family budget template', 'Festival & wedding planning', 'Reviewing month-end'] },
			{ title: 'Net Worth & Goals', lessons: ['Assets vs liabilities', 'Your net-worth sheet', 'A one-year money plan'] }
		],
		certificate: true,
		mode: 'Self-paced + Live Q&A'
	},
	{
		id: 'brand-marketing',
		title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape',
		category: 'Business',
		level: 'Intermediate',
		instructor: 'Meera Iyer',
		instructorImage: 'instructor-meera',
		image: 'course-digital-marketing',
		imageAlt: 'Professional planning a social media marketing campaign on phone and laptop',
		duration: '08 hr 15 mins',
		lectures: 29,
		weeks: 8,
		price: 11500,
		oldPrice: null,
		rating: 4.9,
		students: 2760,
		badge: null,
		short: 'Brand strategy, content and campaigns — market a business without a big-city budget.',
		learn: ['Positioning & brand voice', 'Content calendars that ship', 'Instagram, WhatsApp & Google basics', 'Measure what matters, ignore the rest'],
		curriculum: [
			{ title: 'Brand Foundations', lessons: ['Who is this for, really?', 'Voice, visuals & story', 'Competitor teardown'] },
			{ title: 'Campaigns', lessons: ['A 30-day content plan', 'WhatsApp Business & reels', 'Local SEO & Google Business'] },
			{ title: 'Measure & Improve', lessons: ['Analytics without overwhelm', 'A/B testing on a budget', 'Capstone campaign review'] }
		],
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
		duration: '08 hr 15 mins',
		lectures: 29,
		weeks: 6,
		price: 19500,
		oldPrice: null,
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
		duration: '12 hr 40 mins',
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
		duration: '10 hr 05 mins',
		lectures: 36,
		weeks: 10,
		price: 14999,
		oldPrice: 19999,
		rating: 4.9,
		students: 3680,
		badge: null,
		short: 'The first programming course that sticks — Python basics, then automation scripts you actually use.',
		learn: ['Python syntax, clearly explained', 'Files, APIs & automation scripts', 'OOP without the confusion', '3 portfolio projects'],
		curriculum: [
			{ title: 'Python Core', lessons: ['Setup & first scripts', 'Data types & control flow', 'Functions & modules'] },
			{ title: 'Practical Python', lessons: ['Files & spreadsheets', 'Web scraping basics', 'Automate a boring task'] },
			{ title: 'Projects', lessons: ['Expense tracker CLI', 'WhatsApp reminder bot (mock)', 'Final project & review'] }
		],
		certificate: true,
		mode: 'Classroom + Live Online'
	},
	{
		id: 'cyber-security',
		title: 'Cyber Security Fundamentals & Ethical Hacking Basics',
		category: 'Development',
		level: 'Intermediate',
		instructor: 'Rahul Sharma',
		instructorImage: 'instructor-rahul',
		image: 'course-cyber-security',
		imageAlt: 'IT professional monitoring a security dashboard with shield graphics on monitors',
		duration: '09 hr 30 mins',
		lectures: 32,
		weeks: 10,
		price: 21999,
		oldPrice: 27999,
		rating: 4.9,
		students: 2140,
		badge: 'New',
		short: 'Networks, threats and defence — the security foundations every IT job now expects.',
		learn: ['How networks & the web really work', 'Common attacks & how to spot them', 'Linux, firewalls & safe lab practice', 'A security audit capstone'],
		curriculum: [
			{ title: 'Foundations', lessons: ['Networks & protocols', 'Threat landscape 2026', 'Linux essentials'] },
			{ title: 'Attack & Defence', lessons: ['Phishing & social engineering', 'Web vulnerabilities', 'Hardening a system'] },
			{ title: 'Capstone', lessons: ['Audit a demo site (authorised lab)', 'Write a findings report', 'Career paths in security'] }
		],
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
		duration: '06 hr 45 mins',
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
		duration: '09 hr 00 mins',
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
		duration: '11 hr 20 mins',
		lectures: 40,
		weeks: 12,
		price: 29999,
		oldPrice: 36999,
		rating: 4.9,
		students: 2870,
		badge: 'New',
		short: 'What AI can and cannot do — prompts, models and ML basics, taught without the hype.',
		learn: ['How modern AI models work', 'Prompting & AI tools for work', 'ML pipelines, simply explained', 'Build a small AI-powered app'],
		curriculum: [
			{ title: 'AI, Demystified', lessons: ['From rules to learning', 'LLMs & generative AI', 'AI at Indian workplaces'] },
			{ title: 'Working with AI', lessons: ['Prompting that works', 'AI for docs, sheets & code', 'Spotting AI mistakes'] },
			{ title: 'Build & Ship', lessons: ['A chatbot with an API', 'Evaluate & improve it', 'Capstone demo day'] }
		],
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
		duration: '10 hr 30 mins',
		lectures: 34,
		weeks: 10,
		price: 18999,
		oldPrice: 24999,
		rating: 4.9,
		students: 1730,
		badge: null,
		short: 'EC2, S3, databases and deployment — run real workloads on AWS with confidence.',
		learn: ['Cloud concepts & the AWS console', 'EC2, S3 & RDS hands-on', 'Deploy & secure a web app', 'Costs, billing & free-tier safety'],
		curriculum: [
			{ title: 'Cloud Basics', lessons: ['Why cloud, why AWS', 'IAM & security first', 'Your first EC2 instance'] },
			{ title: 'Core Services', lessons: ['S3 storage & hosting', 'Databases on RDS', 'Networking & VPC basics'] },
			{ title: 'Deploy', lessons: ['A full app on AWS', 'Monitoring & alerts', 'Cost review & capstone'] }
		],
		certificate: true,
		mode: 'Live Online'
	}
];

export const instructors = [
	{ name: 'Meera Iyer', role: 'Full-Stack Development & AI', image: 'instructor-meera', exp: '12 yrs', students: 11200, courses: 4, bio: 'Ex-product engineer from Bengaluru. Has taught 11,000+ students to build and ship real websites and AI apps.' },
	{ name: 'Rahul Sharma', role: 'Data Science & Cloud', image: 'instructor-rahul', exp: '10 yrs', students: 9800, courses: 3, bio: 'Data scientist who moved from finance to teaching. Known for making statistics feel obvious.' },
	{ name: 'Sana Kapoor', role: 'UI/UX & Graphic Design', image: 'instructor-sana', exp: '9 yrs', students: 7600, courses: 2, bio: 'Design lead turned trainer. Her students’ portfolios have landed jobs at startups across India.' },
	{ name: 'Arjun Mehta', role: 'Finance, Accounting & Business', image: 'instructor-arjun', exp: '15 yrs', students: 13400, courses: 4, bio: 'Chartered accountant and former CFO. Teaches Tally, GST and budgeting the way real offices use them.' },
	{ name: 'Priya Nair', role: 'Digital Marketing', image: null, exp: '8 yrs', students: 5400, courses: 2, bio: 'Growth marketer for D2C brands. Teaches campaigns on the budgets small businesses actually have.' },
	{ name: 'Vikram Singh', role: 'Cyber Security', image: null, exp: '11 yrs', students: 4200, courses: 2, bio: 'Security analyst and CTF mentor. Runs EduLe’s hands-on security lab and audit capstones.' }
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
	{ name: 'Amit Verma', course: 'Full-Stack Web Development', text: 'Evening batch fit around my shop job. Now I build websites for local businesses on the side — the instalment plan made it possible.', rating: 5 }
];

export const placements = [
	{ company: 'TechMahindra Services', role: 'Junior Data Analyst', students: 214 },
	{ company: 'Pune Accounting Partners', role: 'Accounts Executive', students: 186 },
	{ company: 'WebKraft Studio', role: 'Frontend Developer', students: 142 },
	{ company: 'RetailKart India', role: 'Digital Marketing Executive', students: 128 },
	{ company: 'CloudNine IT', role: 'Cloud Support Associate', students: 96 },
	{ company: 'DesignNest Agency', role: 'UI Designer', students: 88 }
];

export const blogPosts = [
	{ slug: 'best-computer-courses-after-12th', title: 'Best Computer Courses After 12th in 2026', excerpt: 'Confused after boards? These five job-ready courses pay off fastest — with honest fees, durations and starting salaries.', date: '12 Nov 2026', read: '6 min read', image: 'course-data-science', category: 'Career Guide', body: ['After Class 12, the question is not which course is trendy — it is which one gets you hired. In our Pune classrooms, the fastest job outcomes this year came from five paths: data analysis, web development, accounting with Tally and GST, UI/UX design, and digital marketing.', 'Data analysis suits students who like maths and patterns; web development suits builders; Tally and GST suit commerce students and lead directly to accounts jobs in CA firms and small businesses. UI/UX rewards visual thinkers, and digital marketing rewards communicators.', 'Before you enrol anywhere, ask three questions: does the course include real projects, does it end with a verifiable certificate, and does the institute help with interviews? If any answer is vague, keep looking.'] },
	{ slug: 'python-vs-excel-which-first', title: 'Python or Excel First? A Practical Answer for Beginners', excerpt: 'Both are useful, but the right order depends on your goal. Here is how to choose — and when to learn both.', date: '28 Oct 2026', read: '5 min read', image: 'course-python', category: 'Learning', body: ['If your goal is an office job in the next three months, learn Excel first. Advanced Excel — PivotTables, XLOOKUP, dashboards — is the single most requested skill in accounts, sales and operations job posts.', 'If your goal is a tech career, start with Python. It opens data analysis, automation and web development, and it teaches you to think like a programmer.', 'The good news: they stack. Excel teaches you to think in tables; Python teaches you to automate them. Most of our students do Excel in month one and Python next — and employers notice both on a CV.'] },
	{ slug: 'how-to-verify-certificate', title: 'How Employers Verify an EduLe Certificate (and Why It Matters)', excerpt: 'Every EduLe certificate carries a verification code. Here is exactly how hiring managers check it in under a minute.', date: '15 Oct 2026', read: '4 min read', image: 'classroom', category: 'Certificates', body: ['Every certificate we issue carries a unique code, printed on the certificate and stored in our records. An employer visits our verification page, enters the code, and sees the student name, course, completion date and grade — in under a minute.', 'This matters because fake certificates are common in hiring. A verifiable certificate protects honest students: your achievement is checkable, not just claimed.', 'If you are a student, keep your code safe and add it to your CV and LinkedIn. If you are an employer, try the demo verification on our Certificates page.'] }
];

export const faqs = [
	{ q: 'Do I need a computer background to join?', a: 'No. Most of our students start with no prior knowledge. Beginner courses assume nothing, and our faculty explain every concept from scratch with plenty of practice.' },
	{ q: 'Are the certificates recognised by employers?', a: 'Yes. Every EduLe certificate carries a unique verification code that employers can check on our Certificates page. We also add certificates to your LinkedIn profile on request.' },
	{ q: 'Can I pay fees in instalments?', a: 'Yes. Most courses can be split into 2–3 instalments at no extra charge. The first instalment is due at enrolment; the rest follow the batch schedule. See the Fees page for the exact split per course.' },
	{ q: 'Do you offer online classes?', a: 'Yes. Every course runs in classroom batches in Pune and as live online batches with the same faculty, recordings and doubt-clearing sessions.' },
	{ q: 'What if I miss a class?', a: 'All live sessions are recorded and shared the same day, and every batch has a weekly doubt-clearing slot. You can also repeat a missed module with the next batch free of charge.' },
	{ q: 'Do you help with jobs and placements?', a: 'Yes. We run resume workshops, mock interviews and placement drives with partner employers in Pune and Mumbai. Placement support is free for all certificate-course students — see the Placements page.' },
	{ q: 'Is there a refund policy?', a: 'Yes. If you withdraw within the first 7 days of your batch, we refund the unused portion of your fees minus a ₹1,000 processing charge. See the Terms page for full details.' },
	{ q: 'What is the 25% discount on the homepage?', a: 'All courses are currently 25% off the listed fee as our enrolment offer. The discounted price is the one shown on each course — what you see is what you pay.' }
];

export function inr(n: number): string {
	return '₹' + n.toLocaleString('en-IN');
}

export function getCourse(id: string): Course | undefined {
	return courses.find((c) => c.id === id);
}
