# 🌟 Profile Card — HNG Task

This is a responsive, accessible **Profile Card** component built with **HTML, CSS, and Vanilla JavaScript** as part of the HNG Frontend Task.  
It follows semantic HTML best practices and includes all required `data-testid` attributes for automated testing.

---

## 🧠 Features

- ✅ Semantic and accessible HTML structure  
- ✅ Responsive layout for mobile, tablet, and desktop  
- ✅ Real-time current time display in milliseconds (`Date.now()`)  
- ✅ Avatar image with alt text and figure element  
- ✅ Keyboard-focusable social links (open in new tabs)  
- ✅ Lists for hobbies and dislikes  
- ✅ Clean and modern UI design  

---

## 📸 Live Demo

🔗 **Live Site:** (https://samadeola-profile-card.netlify.app/)

🔗 **GitHub Repo:** (https://github.com/samadeola1/Profile-Card-HNG-Task)

---

## 🧩 Tech Stack

- **HTML5** — semantic markup  
- **CSS3** — responsive layout with Flexbox  
- **JavaScript (ES6)** — dynamic time rendering  

---

## 🧪 Data Test IDs (for automated testing)

Each visible element in the card includes a `data-testid` attribute:

| Element | Test ID |
|----------|----------|
| Profile Card Root | `test-profile-card` |
| User Name | `test-user-name` |
| Biography | `test-user-bio` |
| Current Time (milliseconds) | `test-user-time` |
| Avatar Image | `test-user-avatar` |
| Social Links Container | `test-user-social-links` |
| Individual Social Link | `test-user-social-<network>` (e.g. `test-user-social-twitter`) |
| Hobbies List | `test-user-hobbies` |
| Dislikes List | `test-user-dislikes` |

---

## 🚀 Setup

1. **Clone this repository**
   ```bash
   git clone https://github.com/samadeola1/Profile-Card-HNG-Task.git
   
 2.	Open the folder
         ```bash
        cd Profile-Card-HNG-Task
    
3.	Open the project in your browser
        Just open the index.html file directly, or use a local server such as:
         ```bash
        npx live-server
        (You can also preview it in VS Code using the “Live Server” extension.)

    🧭 Accessibility & Responsiveness
	•	Semantic HTML elements: <article>, <header>, <section>, <figure>, <nav>, etc.
	•	Alt text included for avatar image
	•	Focus styles visible for keyboard users
	•	Responsive using media queries — stacked on mobile, side-by-side on desktop

    🧰 Folder Structure
    Profile-Card-HNG-Task/
│
├── index.html
├── style.css
├── script.js
└── README.md

👨‍💻 Author

Samuel Adeola
Frontend Developer | HNG Internship
