# Digital Job Application Form

An interactive, client-side job application form built with **HTML**, **CSS**, and **JavaScript**. Features real-time validation, a progress bar, password strength meter, and a polished responsive UI.

## Features

- **Real-time Form Validation** — Name, email, phone, and password fields validated with regex on submit
- **Password Strength Meter** — Live visual feedback (Weak / Medium / Strong) as the user types
- **Show/Hide Password Toggle** — Eye icon toggle for password and confirm password fields
- **Form Completion Progress Bar** — Tracks how many fields are filled and displays a percentage
- **Character Counter** — Live character count on the "About" textarea
- **Salary Range Slider** — Dynamic range input with live value display
- **Success Message** — Displays a confirmation screen after successful submission
- **Reset Button** — Clears all fields and resets validation states

## Form Fields

| Field | Type | Validation |
|---|---|---|
| Full Name | Text | 3–30 letters only |
| Email Address | Text | Standard email format |
| Phone Number | Text | Exactly 11 digits |
| Password | Password | 8–16 chars, uppercase, lowercase, digit, special char |
| Repeat Password | Password | Must match password |
| Job Position | Dropdown | Frontend / Backend / Full Stack |
| Job Experience | Number | Years of experience |
| Job Type | Radio | Full-time / Part-time / Remote |
| Skills | Checkbox | HTML, CSS, JS, C, C++, Java, Python, React, Django |
| Portfolio Link | URL | — |
| Date of Birth | Date | — |
| Expected Salary | Range Slider | 10k–200k |
| About / Why You | Textarea | — |

## Tech Stack

- **HTML5** — Semantic form structure
- **CSS3** — Gradient backgrounds, transitions, responsive layout
- **JavaScript (Vanilla)** — DOM manipulation, regex validation, event listeners
- **Font Awesome** — Icons for input fields and UI elements
- **Google Fonts (Poppins)** — Clean typography

## Project Structure

```
├── index.html   # Basic version of the form
├── idx.css      # Styles for basic version
├── idx.js       # Validation logic for basic version
└── README.md
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Akash235711/Digital_form.git
   ```
2. **Open in browser**
   - Open `n.html` for the enhanced version, or `index.html` for the basic version.

## Screenshots

> _Add screenshots of the form here._

## License

This project is open source and available for personal and educational use.
# Digital_form
