# Contact Form Setup

The contact form sends emails directly to **anuragkumar88583@gmail.com** using your own backend—no third-party services.

## 1. Create a Gmail App Password

1. Go to [Google Account](https://myaccount.google.com/)
2. **Security** → **2-Step Verification** (enable it if not already)
3. **Security** → **App passwords**
4. Create a new app password for "Mail"
5. Copy the 16-character password

## 2. Configure the Server

Edit `server/.env` and add your app password:

```
GMAIL_USER=anuragkumar88583@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
RECIPIENT_EMAIL=anuragkumar88583@gmail.com
```

(Remove spaces from the app password when pasting)

## 3. Run the App

Use both the backend server and frontend:

```bash
npm run dev:all
```

This starts:
- **Backend** on http://localhost:3001
- **Frontend** on http://localhost:5173 (proxies /api to backend)

Open http://localhost:5173, go to Contact, fill the form and click **Send Message**. The email will be sent directly to your inbox.
