Hosting Guide for Knight and Carter

This guide explains how to host the Knight and Carter website when it has a backend and database, including options for sending emails from the contact form.

Current State

The website is currently a static site hosted on GitHub Pages. The contact form is visual only and does not send real emails. To make the contact form work, we need a backend server and an email service.

What We Need to Store in the Database

We need to store the following data:

Contact form submissions
Name, email, phone number, type of enquiry, property of interest, message, date and time submitted

Property listings
Property address, town, postcode, price, number of bedrooms, number of bathrooms, square footage, property type, description, exterior image URL, interior image URL, whether it is featured on homepage

User accounts (optional, for future)
Name, email, password, role (admin, staff, customer)

Database Options

Option 1: SQLite
Simple database that lives in a single file. Good for small sites and development. Not ideal for production with multiple users because it can have issues when many people access it at once.
Cost: Free
Ease of use: Very easy
Recommended for: Development and small personal sites

Option 2: PostgreSQL
Professional database used by many companies. Handles multiple users well, reliable, and scalable. Requires a hosting service.
Cost: Free with most backend hosting services, or paid from 15 dollars per month
Ease of use: Moderate
Recommended for: Production sites with real users

My Recommendation: Use PostgreSQL for production. It is more reliable and can handle growth. Use SQLite only for development and testing.

Backend Hosting Options (Python)

Option 1: Render
Simple hosting that automatically deploys from GitHub. Includes PostgreSQL database for free. Good for Python apps.
Cost: Free tier available, paid from 7 dollars per month
Ease of use: Easy
Setup: Connect GitHub repository, create web service, add PostgreSQL database, add environment variables

Option 2: Railway
Simple hosting with automatic deployment from GitHub. Includes PostgreSQL database. Good for Python apps.
Cost: Free 5 dollar credit, paid from 5 dollars per month
Ease of use: Easy
Setup: Connect GitHub repository, select backend service, add PostgreSQL database, configure environment variables

Option 3: Heroku
Industry standard hosting with many add-ons available. Mature ecosystem with good documentation.
Cost: Free tier available, paid from 5 dollars per month
Ease of use: Moderate
Setup: Install Heroku CLI, create app, add PostgreSQL add-on, set environment variables, push code

Option 4: PythonAnywhere
Specialised Python hosting. Good for Django and Flask apps.
Cost: Free tier limited, paid from 5 dollars per month
Ease of use: Easy
Setup: Upload code via web or git, configure web app, add PostgreSQL database

My Recommendation: Use Render for simplicity and free PostgreSQL. It is the easiest to set up and has good documentation for Python.

Email Service Options (SMTP)

The contact form needs an email service to send messages. Here are the options:

Option 1: SendGrid
Reliable email service with good documentation. Free tier allows 100 emails per day.
Cost: Free tier (100 emails per day), paid from 15 dollars per month
Ease of use: Easy
Setup: Sign up, create API key, verify sender email, add credentials to backend

Option 2: Mailgun
Powerful email service with good API. Free trial allows 5000 emails.
Cost: Free trial (5000 emails), paid from 35 dollars per month
Ease of use: Moderate
Setup: Sign up, get API key and domain, add credentials to backend

Option 3: Gmail
Free but not recommended for production. Requires app password and has sending limits.
Cost: Free
Ease of use: Easy
Setup: Enable two-factor authentication, generate app password, add to backend
Warning: Not suitable for business use

My Recommendation: Use SendGrid. The free tier is generous for a small business, it is reliable, and easy to set up.

Recommended Setup

For Knight and Carter, I recommend this setup:

Frontend: Netlify (free, easy, handles static sites well)
Backend: Render (free tier, includes PostgreSQL, easy Python deployment)
Database: PostgreSQL (included with Render)
Email: SendGrid (free tier, 100 emails per day is plenty to start)
Total monthly cost: 0 dollars (using free tiers)

This setup costs nothing to start and can scale as the business grows. When you need more, you can upgrade to paid plans.

Alternative Setup (If you want to use GitHub Pages for frontend)

Frontend: GitHub Pages (current setup, free)
Backend: Render (free tier, includes PostgreSQL)
Database: PostgreSQL (included with Render)
Email: SendGrid (free tier)
Total monthly cost: 0 dollars

This keeps the current frontend on GitHub Pages and only adds the backend.

Cost Comparison

Free Tier Options
Render backend: Free
PostgreSQL database: Free (included with Render)
Netlify frontend: Free
GitHub Pages frontend: Free
SendGrid email: Free (100 emails per day)

Paid Tier Options (if you outgrow free tiers)
Render backend: 7 dollars per month
PostgreSQL database: 15 dollars per month (standalone)
Netlify frontend: 19 dollars per month
SendGrid email: 15 dollars per month

Environment Variables

The backend needs a file called .env with these settings:

Database connection string
SMTP host (smtp.sendgrid.net)
SMTP port (587)
SMTP username (apikey)
SMTP password (your SendGrid API key)
Sender email (noreply@knightandcarter.co.uk)
Sender name (Knight and Carter)
Frontend URL (for security)

Never share the .env file or commit it to GitHub. It contains sensitive passwords and API keys.

Next Steps

1. Choose your hosting setup (I recommend Render for backend, Netlify for frontend, SendGrid for email)
2. Create accounts on Render, Netlify, and SendGrid
3. Set up the backend on Render with PostgreSQL
4. Configure SendGrid and get your API key
5. Build the Python backend with contact form endpoint
6. Update the frontend to send form data to the backend
7. Deploy both frontend and backend
8. Test the contact form to ensure emails are sent
9. Set up custom domain (knightandcarter.co.uk) if desired

Security Notes

Always use HTTPS (free on all recommended platforms)
Never share passwords or API keys
Validate all form data on the backend before processing
Limit how many emails can be sent per hour to prevent spam
Only allow requests from your own website domain
