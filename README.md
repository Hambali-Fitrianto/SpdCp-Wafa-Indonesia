# 🚀 SpdCp — Lead Management System

Mini Project Fullstack Web Application menggunakan Laravel 12 + React (Vite).

Project ini dibuat untuk memenuhi Tes Tahap Pertama – Full Stack Developer di WAFA Indonesia.

---

## 📌 Deskripsi

SpdCp (Lead Management System) adalah sistem penampungan data calon pelanggan (Leads) yang aman dan terstruktur.

Aplikasi memungkinkan admin untuk:

- Mengelola data leads
- Melihat dashboard statistik
- Melacak aktivitas sistem
- Mengontrol akses admin secara aman

---

## ✨ Features

### 🌐 Landing Page
Form pendaftaran leads:
- Nama
- WhatsApp
- Email
- Instansi

### 🔐 Admin Dashboard
- Secure Login Authentication (Laravel Sanctum)
- Dashboard Analytics
- Leads CRUD (Create, Read, Update, Delete)
- Search & Filtering
- Activity Logs (Audit Trail)
- Responsive UI (Mobile Friendly)

---

## 🧱 Tech Stack

### Backend
- Laravel 12
- PHP 8.2+
- Laravel Sanctum
- REST API
- MySQL

### Frontend
- React (Vite)
- TailwindCSS
- Axios
- React Hot Toast

---

## 📂 Project Structure

SpdCp/
│
├── backend/ (Laravel 12 API)
│   ├── app/
│   │   └── Helpers/activity.php
│   └── routes/api.php
│
└── frontend/ (React Admin Dashboard)

---

## ⚙️ Installation Guide

### 1. Clone Repository

git clone https://github.com/Hambali-Fitrianto/SpdCp-Wafa-Indonesia.git  
cd SpdCp-Wafa-Indonesia

### 2. Backend Setup (Laravel 12)

cd backend  
composer install  
cp .env.example .env  
php artisan key:generate  
php artisan migrate --seed  
php artisan serve  

Backend running at:
http://127.0.0.1:8000

### 3. Frontend Setup (React)

cd frontend  
npm install  
npm run dev  

Frontend running at:
http://localhost:5173

---

## 🔐 Default Admin Account

Email : admin@wafa.test  
Password : wafa123

---

## 🧾 Activity Logs (Audit Trail)

Sistem otomatis mencatat aktivitas admin:

- Login
- Logout
- Create Lead
- Update Lead
- Delete Lead

Helper digunakan:
app/Helpers/activity.php

Digunakan untuk:
- Monitoring aktivitas admin
- Tracking perubahan data
- Audit keamanan sistem

---

## 🔒 Security Checklist

Fitur keamanan yang diterapkan:

- Password Hashing (bcrypt)
- Laravel Sanctum Token Authentication
- Protected API Routes
- Request Validation
- CORS Protection
- Activity Logging
- Environment Configuration (.env)

---

## 📱 Responsive Design

Admin dashboard dibuat menggunakan TailwindCSS:

✅ Desktop friendly  
✅ Tablet friendly  
✅ Mobile friendly  

---

## 🎯 Tujuan Project

Project ini menunjukkan kemampuan:

- Fullstack Web Development
- REST API Development
- Authentication System
- Clean UI & UX Implementation
- Backend & Frontend Integration

---

## 👨‍💻 Author

Hambali Fitrianto  
Full Stack Developer Candidate — WAFA Indonesia  

GitHub:
https://github.com/Hambali-Fitrianto

---

## 📄 License

Project ini dibuat khusus untuk kebutuhan technical assessment.