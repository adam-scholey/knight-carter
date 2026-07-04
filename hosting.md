# Hosting Guide — Knight & Carter

This document outlines hosting solutions for the Knight & Carter website when fully built with a backend and frontend, including SMTP configuration for the contact form.

---

## Current State

The website is currently a **static site** hosted on GitHub Pages:
- **Frontend**: HTML5 + CSS3 + Vanilla JS
- **Hosting**: GitHub Pages (main branch)
- **Contact Form**: Currently a UI only — no backend integration
- **Repository**: https://github.com/adam-scholey/knight-carter
- **Live Site**: https://adam-scholey.github.io/knight-carter/

---

## Future Architecture (With Backend)

When the site is fully built with a backend, the architecture will be:

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│   Frontend      │  HTTPS  │   Backend API   │  HTTPS  │   SMTP Service │
│   (React/Vue)   │ ◄──────► │   (Node/Python) │ ◄──────► │  (SendGrid/etc)│
└─────────────────┘         └─────────────────┘         └─────────────────┘
                                      │
                                      ▼
                              ┌─────────────────┐
                              │   Database      │
                              │  (PostgreSQL)   │
                              └─────────────────┘
```

---

## Frontend Hosting Options

### 1. Vercel (Recommended for React/Next.js)
- **Pros**: Zero config, automatic HTTPS, edge network, preview deployments
- **Pricing**: Free tier available, paid plans from $20/month
- **Setup**:
  ```bash
  npm install -g vercel
  vercel login
  vercel
  ```
- **Environment Variables**: Configure in Vercel dashboard or `.env.local`

### 2. Netlify (Recommended for Static/Jamstack)
- **Pros**: Free tier, form handling, edge functions, CI/CD
- **Pricing**: Free tier available, paid plans from $19/month
- **Setup**:
  ```bash
  npm install -g netlify-cli
  netlify login
  netlify deploy --prod
  ```
- **Form Handling**: Netlify Forms can handle contact forms without backend

### 3. GitHub Pages (Current — Static Only)
- **Pros**: Free, easy, integrates with Git
- **Cons**: Static only, no backend, no server-side processing
- **Best for**: Static sites, documentation, portfolios

### 4. AWS S3 + CloudFront
- **Pros**: Scalable, full AWS ecosystem, CDN
- **Cons**: Complex setup, AWS learning curve
- **Pricing**: Pay per use (~$0.023/GB storage, $0.09/GB transfer)

---

## Backend Hosting Options

### 1. Railway (Recommended for Small-Medium Apps)
- **Pros**: Simple, auto-deploys from GitHub, built-in PostgreSQL
- **Pricing**: Free tier ($5 credit), paid from $5/month
- **Supported**: Node.js, Python, Go, Ruby, Docker
- **Setup**:
  1. Connect GitHub repo
  2. Select backend service
  3. Add PostgreSQL database
  4. Configure environment variables

### 2. Render (Recommended for Node.js/Python)
- **Pros**: Free tier, auto-deploys, PostgreSQL included
- **Pricing**: Free tier available, paid from $7/month
- **Supported**: Node.js, Python, Go, Rust
- **Setup**:
  1. Connect GitHub repo
  2. Create web service
  3. Add PostgreSQL database
  4. Add environment variables

### 3. Heroku (Industry Standard)
- **Pros**: Mature ecosystem, add-ons, CLI tools
- **Pricing**: Free tier (Eco), paid from $5/month
- **Supported**: Node.js, Python, Ruby, Java, Go
- **Setup**:
  ```bash
  heroku create knight-carter-api
  heroku addons:create heroku-postgresql
  heroku config:set SMTP_HOST=smtp.sendgrid.net
  git push heroku main
  ```

### 4. AWS Elastic Beanstalk
- **Pros**: Full AWS control, scalable, load balancing
- **Cons**: Complex, AWS learning curve
- **Pricing**: Pay per use (~$0.025/hour for t3.micro)

---

## Database Hosting Options

### 1. PostgreSQL (Recommended)
- **Railway PostgreSQL**: Included with Railway backend
- **Render PostgreSQL**: Included with Render backend
- **Heroku PostgreSQL**: Add-on from $0/month
- **AWS RDS**: From $15/month
- **Neon**: Serverless PostgreSQL, free tier available

### 2. MongoDB (Alternative)
- **MongoDB Atlas**: Free tier (512MB)
- **Railway MongoDB**: Add-on available

---

## SMTP Configuration for Contact Form

The contact form "Send Message" button requires an SMTP service to send emails. Here are the options:

### Option 1: SendGrid (Recommended)
- **Pros**: Free tier (100 emails/day), reliable, easy API
- **Pricing**: Free tier, paid from $15/month
- **Setup**:
  1. Sign up at https://sendgrid.com
  2. Create API key
  3. Verify sender email
  4. Add to `.env`

### Option 2: Mailgun
- **Pros**: Free trial (5,000 emails), powerful API
- **Pricing**: Free trial, paid from $35/month
- **Setup**:
  1. Sign up at https://mailgun.com
  2. Get API key and domain
  3. Add to `.env`

### Option 3: AWS SES (Cost-Effective for High Volume)
- **Pros**: Cheap at scale ($0.10/1000 emails), reliable
- **Cons**: Complex setup, sandbox mode initially
- **Pricing**: $0.10/1000 emails after free tier

### Option 4: Gmail (For Development Only)
- **Pros**: Free, easy
- **Cons**: Not for production, app password required
- **Setup**:
  1. Enable 2FA on Gmail
  2. Generate app password
  3. Add to `.env`

---

## Environment Variables (.env)

Create a `.env` file in the backend root directory:

```env
# Database
DATABASE_URL=postgresql://user:password@host:5432/knight_carter

# SMTP Configuration (SendGrid example)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USERNAME=apikey
SMTP_PASSWORD=SG.xxxxxx
SMTP_FROM=noreply@knightandcarter.co.uk
SMTP_FROM_NAME=Knight & Carter

# Frontend URL (for CORS)
FRONTEND_URL=https://knightandcarter.co.uk

# JWT Secret (if using authentication)
JWT_SECRET=your-super-secret-key-change-in-production

# Environment
NODE_ENV=production
```

### Example Backend Code (Node.js + Express + Nodemailer)

```javascript
// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, enquiryType, propertyInterest, message } = req.body;

  // Validate input
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // Email options
  const mailOptions = {
    from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM}>`,
    to: 'hello@knightandcarter.co.uk',
    subject: `New Enquiry: ${enquiryType} - ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Enquiry Type: ${enquiryType}
Property of Interest: ${propertyInterest || 'None'}

Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```

### Example Frontend Code (Fetch API)

```javascript
// contact.js
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    enquiryType: document.getElementById('enquiryType').value,
    propertyInterest: document.getElementById('propertyInterest').value,
    message: document.getElementById('message').value,
  };

  const btn = contactForm.querySelector('[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    const response = await fetch('https://api.knightandcarter.co.uk/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      btn.textContent = 'Message Sent';
      btn.style.background = '#22c55e';
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        btn.disabled = false;
      }, 4000);
    } else {
      throw new Error(data.error || 'Failed to send');
    }
  } catch (error) {
    btn.textContent = 'Error — Try Again';
    btn.style.background = '#ef4444';
    setTimeout(() => {
      btn.textContent = 'Send Message';
      btn.style.background = '';
      btn.disabled = false;
    }, 4000);
  }
});
```

---

## Recommended Hosting Stack

### Option A: Modern & Simple (Recommended)
- **Frontend**: Vercel (React/Next.js)
- **Backend**: Railway (Node.js/Express)
- **Database**: Railway PostgreSQL
- **SMTP**: SendGrid
- **Total Cost**: ~$10-20/month

### Option B: Industry Standard
- **Frontend**: Netlify
- **Backend**: Heroku
- **Database**: Heroku PostgreSQL
- **SMTP**: SendGrid
- **Total Cost**: ~$20-30/month

### Option C: Cost-Effective (DIY)
- **Frontend**: GitHub Pages (static only)
- **Backend**: Render (free tier)
- **Database**: Render PostgreSQL (free tier)
- **SMTP**: Gmail (dev) or SendGrid (prod)
- **Total Cost**: $0-15/month

---

## Deployment Checklist

### Frontend
- [ ] Build production bundle (`npm run build`)
- [ ] Configure environment variables
- [ ] Set up custom domain (knightandcarter.co.uk)
- [ ] Enable HTTPS (automatic on most platforms)
- [ ] Configure CORS for backend API

### Backend
- [ ] Set up hosting account (Railway/Render/Heroku)
- [ ] Connect GitHub repository
- [ ] Add PostgreSQL database
- [ ] Configure environment variables (.env)
- [ ] Run database migrations
- [ ] Test API endpoints
- [ ] Set up custom domain

### SMTP
- [ ] Create SMTP account (SendGrid/Mailgun)
- [ ] Verify sender email
- [ ] Generate API key
- [ ] Add SMTP credentials to .env
- [ ] Test email sending
- [ ] Set up email templates

---

## Security Considerations

1. **Never commit .env files** — add to `.gitignore`
2. **Use HTTPS** — all platforms provide free SSL certificates
3. **Validate input** — sanitize all form data on backend
4. **Rate limiting** — prevent spam on contact form
5. **CORS** — only allow requests from your frontend domain
6. **Environment-specific configs** — separate dev/staging/prod

---

## Monitoring & Logging

- **Frontend**: Vercel Analytics, Netlify Analytics
- **Backend**: Railway Logs, Heroku Logs, AWS CloudWatch
- **Email**: SendGrid Dashboard, Mailgun Analytics
- **Uptime**: UptimeRobot, Pingdom (free tiers available)

---

## Cost Summary (Monthly)

| Service | Free Tier | Paid Tier |
|---------|-----------|-----------|
| Vercel | Free | $20 |
| Netlify | Free | $19 |
| Railway | $5 credit | $5+ |
| Render | Free | $7+ |
| Heroku | Free (Eco) | $5+ |
| PostgreSQL | Free (with backend) | $15+ |
| SendGrid | 100 emails/day | $15 |
| Mailgun | 5,000 emails (trial) | $35 |
| AWS SES | 62,000 emails (free) | $0.10/1000 |

---

## Next Steps

1. **Choose hosting stack** based on budget and requirements
2. **Set up backend** with chosen provider
3. **Configure SMTP** and test email sending
4. **Build API** with contact form endpoint
5. **Update frontend** to call backend API
6. **Deploy** both frontend and backend
7. **Configure custom domain** and DNS
8. **Set up monitoring** and error tracking

---

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Render Documentation](https://render.com/docs)
- [Heroku Documentation](https://devcenter.heroku.com)
- [SendGrid Documentation](https://docs.sendgrid.com)
- [Nodemailer Documentation](https://nodemailer.com)
