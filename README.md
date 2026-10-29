# Hola Trail — beginner Spanish learning app

A working, no-build starter app with a landing page and six beginner Spanish lessons. It is built with plain HTML, CSS, and JavaScript. No API keys, subscriptions, database, or Node installation are needed.

## Run in Google Cloud Shell

These instructions assume you mean **Google Cloud Shell**. This also runs in other consoles with Python 3 and a web preview.

1. Download `hola-trail.zip` from the Tasklet thread to your computer.
2. Open Google Cloud Shell. In the terminal toolbar, open the three-dot menu and choose **Upload** (sometimes labelled **Upload file**).
3. Upload `hola-trail.zip` to your home directory.
4. Copy and paste these commands into the Cloud Shell terminal:

```sh
mkdir -p ~/hola-trail
unzip ~/hola-trail.zip -d ~/hola-trail
cd ~/hola-trail
python3 -m http.server 8080 --bind 0.0.0.0
```

Use a new folder if `~/hola-trail` already contains your own files. Do not overwrite an existing project.

5. Click **Web Preview** in the Cloud Shell toolbar, then **Preview on port 8080**.
6. The landing page opens. Click **Start learning free**.

Keep the terminal server running while you use the app. Press **Ctrl+C** in the terminal to stop it. To start it again:

```sh
cd ~/hola-trail
python3 -m http.server 8080 --bind 0.0.0.0
```

If port 8080 is already in use, replace `8080` with `8081` and select that port in Web Preview.

**Cloud Shell Web Preview is a development preview, not permanent public hosting.** It may require your Google login, and it stops when the server or session stops. Nothing in this package deploys a public website or incurs a hosting subscription. Python's simple server is for development, not production hosting.

## What is included

- A responsive landing page and a learning dashboard.
- Six lessons: greetings, introductions, the café, numbers, directions, and everyday expressions.
- 36 taught expressions with meanings and explanatory notes.
- Multiple-choice translations, Spanish typing, word ordering, and listening questions.
- Pronunciation using the browser/device speech engine. Spanish voices depend on the device. A text fallback lets you complete listening exercises without audio.
- Unlimited retries, accent-character buttons, and immediate explanations.
- XP, lesson completion, and daily practice streaks.
- Review scheduling: missed expressions return after 10 minutes; correctly recalled expressions use intervals of 1, 3, 7, 14, and 30 days. You can also practice before they are due.
- Saved progress synced to your Firebase account across devices, with local storage fallback when offline.
- Firebase user authentication (Sign in, Sign up, Password reset) and email verification.
- Privacy details and a two-step progress reset.

## Check that it works

1. Open the landing page on desktop and on your phone or a narrow browser window.
2. Start a lesson, move through all six expressions, and try pronunciation.
3. Complete the quiz. Intentionally miss one answer: you should see help and be able to try again without losing progress.
4. For a typing exercise, use the accent buttons if necessary. Accents and ñ matter; capitalization and punctuation are ignored.
5. Check the result screen and return to **My learning**. XP, the completed lesson, and practiced expressions should update.
6. Reload the page and confirm that your progress remains.
7. Open **Practice learned words** to try a review session.
8. If audio does not work, choose **Show the Spanish text**. The question must remain usable.

## Edit the app

The entire app is in `index.html`. Open it in Cloud Shell Editor. Styling is in the `<style>` section; the Spanish course lives in the `COURSE` object; lesson and quiz behavior lives in the `<script>` section. Save your change and reload Web Preview.

Additional languages need their own lesson content, locale, progress key, and a course selector. The course data is grouped to make that expansion easier, but **only Spanish is implemented**. Do not simply change the label and assume another language is ready.

## Scope and privacy

This is a functional beginner starter course, not a complete curriculum, pronunciation assessment, or AI tutor. Typed exercises accept the exact expression taught (with normalized punctuation/case), not all possible valid translations. There is no microphone recording.

Outside Tasklet, progress is synced with your authenticated Firebase account and cached in browser storage. When signed in, your learning progress (XP, completed lessons, streaks, and review schedules) follows your account across devices.

Firebase Authentication supports email and password login, password reset, and email verification. Configuration is managed via `.env` (with `.gitignore` to prevent committing secrets) and loaded dynamically.

Speech synthesis is supplied by your browser or operating system. Some voices may use network services. The app itself contains no tracking scripts, external fonts, or third-party asset requests.

Before a public launch, choose hosting, review the teaching content, and decide whether you need individual accounts and cross-device progress. Do not store secrets in this HTML file.
