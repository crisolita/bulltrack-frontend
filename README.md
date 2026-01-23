<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Bulltrack Frontend</title>
  </head>
  <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">

    <h1 style="color:#16a34a;">🐂 Bulltrack – Frontend</h1>

    <p>
      This is the <strong>frontend application</strong> for the Bulltrack technical test.
      It was built using <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, and it
      connects to an existing backend API deployed on Railway.
    </p>

    <hr />

    <h2>🚀 Live Demo</h2>
    <p>
      You can access the deployed application here:
    </p>
    <p>
      🔗 <a href="https://bulltrack-frontend.vercel.app" target="_blank">
        https://bulltrack-frontend.vercel.app
      </a>
    </p>

    <hr />

    <h2>🛠️ Tech Stack</h2>
    <ul>
      <li><strong>Next.js</strong> (App Router)</li>
      <li><strong>React</strong></li>
      <li><strong>Tailwind CSS</strong></li>
      <li><strong>TypeScript</strong></li>
      <li><strong>Vercel</strong> for deployment</li>
    </ul>

    <hr />

    <h2>🔗 Backend Integration</h2>
    <p>
      The frontend consumes a REST API deployed on Railway.
      Environment variables are used to configure the API base URL.
    </p>

    <pre style="background:#f3f4f6; padding:12px; border-radius:8px;">
NEXT_PUBLIC_API_URL=https://bulltrack-production.up.railway.ap
    </pre>

    <hr />

    <h2>⚙️ Local Setup</h2>
    <ol>
      <li>Clone the repository</li>
      <li>Install dependencies:</li>
    </ol>

    <pre style="background:#f3f4f6; padding:12px; border-radius:8px;">
npm install
    </pre>

    <p>3. Run the development server:</p>

    <pre style="background:#f3f4f6; padding:12px; border-radius:8px;">
npm run dev
    </pre>

    <p>
      The app will be available at
      <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
    </p>

    <hr />

    <h2>🎨 Design Notes</h2>
    <p>
      The UI was kept clean and minimal, focusing on functionality and clarity.
      Tailwind was used to quickly match the provided color palette and layout
      requirements without aiming for pixel-perfect design.
    </p>

    <hr />

    <h2>📌 Notes</h2>
    <ul>
      <li>This project was developed as part of a technical assessment.</li>
      <li>The backend was already implemented and deployed beforehand.</li>
      <li>Frontend and backend are maintained in separate repositories.</li>
    </ul>

    <hr />

    <p>
      👩‍💻 Developed by <strong>Crisol Cova</strong>
    </p>

  </body>
</html>
