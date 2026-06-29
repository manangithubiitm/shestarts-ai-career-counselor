# 🚀 SheStarts AI Career Counselor

An AI-powered career counseling platform that helps users restart or transition their careers by providing personalized career guidance, skill gap analysis, learning roadmaps, recommended courses, projects, and job roles using NVIDIA NIM AI models.

---

## 🌐 Live Demo

**Application:** https://shestarts-ai-career-counselor.vercel.app

---

## 📌 Project Overview

SheStarts AI Career Counselor enables users to complete a career assessment and receive an AI-generated personalized career report based on their education, work experience, career goals, skills, and preferred industry.

The application leverages NVIDIA NIM APIs to generate structured career recommendations and stores assessment results in MongoDB for dynamic dashboard generation.

---

## ✨ Features

* AI-powered personalized career analysis
* Career readiness score with explanation
* Recommended career path
* Career summary
* Strengths and skill gap analysis
* Personalized learning roadmap
* Recommended online courses
* Suggested hands-on projects
* Recommended job roles
* Actionable next steps
* Dynamic dashboard for every assessment
* Responsive user interface
* MongoDB database integration
* Server-side API integration using Next.js Route Handlers

---

## 🛠 Tech Stack

### Frontend

* Next.js 15 (App Router)
* React.js
* Tailwind CSS
* React Icons

### Backend

* Next.js Route Handlers
* MongoDB Atlas
* Mongoose

### AI

* NVIDIA NIM API

### Deployment

* Vercel

---

## 📂 Project Structure

```
app/
│
├── assessment/
├── dashboard/
│   └── [id]/
├── api/
│   └── analyze/
│
components/
│
├── dashboard/
├── form/
├── home/
└── layout/
│
lib/
├── mongodb.js
└── nvidia.js
│
models/
└── Assessment.js
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/manangithubiitm/shestarts-ai-career-counselor.git
```

Navigate into the project

```bash
cd shestarts-ai-career-counselor
```

Install dependencies

```bash
npm install
```

Create a `.env.local` file

```env
MONGODB_URI=your_mongodb_connection_string

NVIDIA_API_KEY=your_nvidia_api_key
```

Run the development server

```bash
npm run dev
```

Visit

```
http://localhost:3000
```

---

## 📊 AI Dashboard Includes

* Career Readiness Score
* Recommended Career Path
* Career Summary
* Strengths
* Skill Gaps
* Learning Roadmap
* Recommended Courses
* Recommended Projects
* Suggested Job Roles
* Next Steps

---

## 🗄 Database

The application stores:

* Personal Details
* Career Assessment
* AI Generated Career Analysis
* Dashboard Data

using MongoDB Atlas.

---

## 🔮 Future Improvements

* User Authentication
* Assessment History
* PDF Report Download
* Email Report Generation
* Resume Review using AI
* Career Progress Tracking
* Saved Learning Plans

---

## 👨‍💻 Author

**Manan Tilwani**

GitHub: https://github.com/manangithubiitm

---

## 📄 License

This project is developed for educational purposes as part of the **SheStarts AI Career Counselor Assignment**.
