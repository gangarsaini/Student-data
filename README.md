# 📘 Student Management Application (DOM Manipulation)

This is a **Student Management System** built using **HTML, CSS, and Vanilla JavaScript**. This project demonstrates core
 **DOM manipulation**, 
 **form validation**,
**localStorage-based CRUD operations** 
without using any external libraries or frameworks.

---

## 🚀 Features

* ➕ Add student details
* ✏️ Edit existing student records
* 🗑️ Delete student records
* 💾 Persistent data using **localStorage**
* 👁️ Show/Hide table automatically based on data availability
* ✅ Form validation with inline error messages
* 📱 Fully responsive (mobile-friendly table with horizontal scroll)

---

## 🧩 Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & responsiveness
* **JavaScript (ES6)** – Logic & DOM manipulation
* **LocalStorage** – Data persistence

---

## 📂 Project Structure

```
├── index.html
├── style.css
├── script.js
├── img/
│   └── school.jpg
└── README.md
```

---

## 📝 How It Works

### 1️⃣ Add Student

* User fills in:

  * Student Name
  * Student ID
  * Student Class
  * Roll Number
* Click **"Add Detail"**
* Data is validated and stored in `localStorage`
* Table becomes visible when data exists

### 2️⃣ Edit Student

* Click **Edit** button in table
* Data populates back into input fields
* Button text changes to **"Update Data"**
* Existing record is updated instead of adding a new one

### 3️⃣ Delete Student

* Click **Delete** button
* Student record is removed from:

  * Table
  * localStorage
* Table hides automatically if no data exists

---

## ✅ Form Validation Rules

| Field         | Validation            |
| ------------- | --------------------- |
| Student Name  | Letters & spaces only |
| Student ID    | Numbers only          |
| Student Email | email only            |
| Contact No.   | Should have 10 digit  |

Inline error messages are shown below each input field.

---

## 👁️ Table Visibility Logic

The table is hidden when there is no data using a CSS class:

```css
.table-has-data {
  display: none;
}
```

JavaScript toggles this class based on array length:

```js
function toggleTable(data) {
  if (data.length > 0) {
    studentinfo.classList.remove('table-has-data');
  } else {
    studentinfo.classList.add('table-has-data');
  }
}
```

---

## 📱 Responsive Design

* Mobile-first adjustments using media queries
* Horizontal scroll enabled for tables on small screens
* Prevents table headers from breaking into multiple lines

---

## 🧠 Key JavaScript Concepts Used

* DOM Selection & Manipulation
* Event Handling
* Array operations (`push`, `splice`, `forEach`)
* localStorage (`getItem`, `setItem`)
* Conditional rendering
* Regex-based validation

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open `index.html` in your browser
3. Start adding student data 🎉


Git Hub link :  https://github.com/gangarsaini/Student-data

Git Repository : git clone https://github.com/gangarsaini/Student-data.git



