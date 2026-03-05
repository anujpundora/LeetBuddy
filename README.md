📘 LeetBuddy – AI Coding Assistant for LeetCode

LeetBuddy is an AI-powered Chrome extension designed to assist developers while solving problems on LeetCode.
It integrates a Generative AI model (Gemini API) directly into the LeetCode interface to provide hints, explanations, and guidance without leaving the problem page.

The goal of LeetBuddy is to act like a coding mentor, helping users understand problem approaches rather than simply providing answers.

🚀 Features
🤖 AI-Powered Assistance

Uses Google Gemini API to generate intelligent responses.

Helps users understand problem approaches and solution strategies.

🧠 Smart Hints

Provides conceptual hints instead of giving full solutions immediately.

Helps improve problem-solving skills.

💡 Code Explanation


📄 Context Awareness

Reads the current LeetCode problem name from the page tittle.

Sends relevant context to the AI model for better responses.

⚡ Seamless Integration

Works directly inside the LeetCode problem page.

No need to copy-paste problems into external tools.

🏗️ Project Architecture
LeetBuddy
│
├── manifest.json        # Chrome extension configuration
├── content.js           # Extracts problem content from LeetCode page
├── background.js        # Handles extension background logic
├── popup.html           # Extension popup interface
├── popup.js             # Handles UI interactions
└── styles.css           # UI styling

Workflow:

User opens LeetCode problem
        ↓
Extension extracts problem name and Id
        ↓
User asks question / requests hint
        ↓
Request sent to Gemini API
        ↓
AI generates response
        ↓
Response displayed inside extension UI

🛠️ Tech Stack

Frontend / Extension:

JavaScript

HTML

CSS

Chrome Extension API

AI Integration:

Google Gemini API

Prompt Engineering

Tools:

Git

Chrome Developer Mode

⚙️ Installation (Local Development)
1️⃣ Clone the Repository
git clone https://github.com/anujpundora/LeetBuddy.git
cd LeetBuddy
2️⃣ Open Chrome Extensions

Go to:

chrome://extensions

Enable:

Developer Mode
3️⃣ Load the Extension

Click:

Load Unpacked

Select the project folder.

The extension will now appear in your browser.

📌 Usage

Open any LeetCode problem.

Click the LeetBuddy extension icon.

🤝 Contributing

Contributions are welcome!

If you'd like to improve the extension:

Fork the repository

Create a new branch

Submit a pull request

👨‍💻 Author

Anuj Pundora