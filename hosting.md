Hosting Guide for Knight and Carter

This guide explains how to host the Knight and Carter website when it has a backend and database, including options for sending emails from the contact form.

Current State

The website is currently a static site hosted on GitHub Pages. The contact form is visual only and does not send real emails. To make the contact form work, we need a backend server and an email service.

What We Need to Store in the Database

We need to store the following data and here is why:

Contact form submissions
Name, email, phone number, type of enquiry, property of interest, message, date and time submitted
Why: When someone fills out the contact form, we need to save their enquiry so we can follow up. This creates a record of all leads and allows us to track response times.

Property listings
Property address, town, postcode, price, number of bedrooms, number of bathrooms, square footage, property type, description, exterior image URL, interior image URL, whether it is featured on homepage
Why: Storing property data in a database allows us to easily add, edit, and remove properties without changing code. It also enables advanced search and filtering by area, price, or bedrooms.

User accounts (optional, for future)
Name, email, password, role (admin, staff, customer)
Why: If you want to add a login system later for staff to manage properties or for customers to save favourite properties, you will need user accounts with different permission levels.

Database Options

Option 1: SQLite
Simple database that lives in a single file. Good for small sites and development. Not ideal for production with multiple users because it can have issues when many people access it at once.
Cost: Free
Ease of use: Very easy
Recommended for: Development and small personal sites

Option 2: PostgreSQL
Professional database used by many companies. Handles multiple users well, reliable, and scalable. Requires a hosting service.
Cost: Free with most backend hosting services, or paid from £15 per month
Ease of use: Moderate
Recommended for: Production sites with real users

My Recommendation: Use PostgreSQL for production. It is more reliable and can handle growth. Use SQLite only for development and testing.

Backend Hosting Options (Python)

Option 1: Fly.io (Recommended)
Simple hosting that you are already familiar with. Supports Python apps and includes PostgreSQL. Good performance and reliable.
Cost: Free tier available, paid from approximately £5 per month for basic resources
Ease of use: Easy (especially since you already know it)
Setup: Install Fly CLI, create app, deploy from GitHub, add PostgreSQL database, configure environment variables

Option 2: Render
Simple hosting that automatically deploys from GitHub. Includes PostgreSQL database for free. Good for Python apps.
Cost: Free tier available, paid from £7 per month
Ease of use: Easy
Setup: Connect GitHub repository, create web service, add PostgreSQL database, add environment variables

Option 3: Railway
Simple hosting with automatic deployment from GitHub. Includes PostgreSQL database. Good for Python apps.
Cost: Free £5 credit, paid from £5 per month
Ease of use: Easy
Setup: Connect GitHub repository, select backend service, add PostgreSQL database, configure environment variables

Option 4: Heroku
Industry standard hosting with many add-ons available. Mature ecosystem with good documentation.
Cost: Free tier available, paid from £5 per month
Ease of use: Moderate
Setup: Install Heroku CLI, create app, add PostgreSQL add-on, set environment variables, push code

Option 5: PythonAnywhere
Specialised Python hosting. Good for Django and Flask apps.
Cost: Free tier limited, paid from £5 per month
Ease of use: Easy
Setup: Upload code via web or git, configure web app, add PostgreSQL database

My Recommendation: Use Fly.io since you are already familiar with it. It supports Python and PostgreSQL well, and you can leverage your existing knowledge.

Email Service Options (SMTP)

The contact form needs an email service to send messages. Here are the options:

Option 1: Gmail (Recommended)
Free and easy to set up. This is what the diamSystems Tracker project uses. Requires two-factor authentication and an app password.
Cost: Free
Ease of use: Easy
Setup: Enable two-factor authentication on your Gmail account, generate an app password, add credentials to backend
Note: Suitable for small business use with moderate email volume

Option 2: SendGrid
Reliable email service with good documentation. Free tier allows 100 emails per day.
Cost: Free tier (100 emails per day), paid from £12 per month
Ease of use: Easy
Setup: Sign up, create API key, verify sender email, add credentials to backend

Option 3: Mailgun
Powerful email service with good API. Free trial allows 5000 emails.
Cost: Free trial (5000 emails), paid from £28 per month
Ease of use: Moderate
Setup: Sign up, get API key and domain, add credentials to backend

My Recommendation: Use Gmail since you already use it for the Tracker project. It is free, easy to set up, and sufficient for a small business contact form.

Recommended Setup

For Knight and Carter, I recommend this setup:

Frontend: Netlify (free, easy, handles static sites well)
Backend: Fly.io (free tier, includes PostgreSQL, you already know how to use it)
Database: PostgreSQL (included with Fly.io)
Email: Gmail (free, same as used in Tracker project)
Custom Domain: knightandcarter.co.uk (approximately £10-15 per year)
Total monthly cost: £0 (using free tiers) plus £10-15 per year for domain

This setup costs nothing monthly to start and can scale as the business grows. When you need more, you can upgrade to paid plans. The only ongoing cost is the domain name.

Alternative Setup (If you want to use GitHub Pages for frontend)

Frontend: GitHub Pages (current setup, free)
Backend: Fly.io (free tier, includes PostgreSQL)
Database: PostgreSQL (included with Fly.io)
Email: Gmail (free)
Custom Domain: knightandcarter.co.uk (approximately £10-15 per year)
Total monthly cost: £0 plus £10-15 per year for domain

This keeps the current frontend on GitHub Pages and only adds the backend.

Cost Comparison

Free Tier Options
Fly.io backend: Free
PostgreSQL database: Free (included with Fly.io)
Netlify frontend: Free
GitHub Pages frontend: Free
Gmail email: Free
Custom domain: £10-15 per year (one-time purchase or annual renewal)

Paid Tier Options (if you outgrow free tiers)
Fly.io backend: Approximately £5 per month
PostgreSQL database: £12 per month (standalone)
Netlify frontend: £15 per month
Gmail email: Free
Custom domain: £10-15 per year

Environment Variables

The backend needs a file called .env with these settings:

Database connection string
SMTP host (smtp.gmail.com)
SMTP port (587)
SMTP username (your Gmail address)
SMTP password (your Gmail app password)
Sender email (your Gmail address)
Sender name (Knight and Carter)
Frontend URL (for security)

Never share the .env file or commit it to GitHub. It contains sensitive passwords and API keys.

Next Steps

1. Choose your hosting setup (I recommend Fly.io for backend, Netlify for frontend, Gmail for email)
2. Create accounts on Fly.io and Netlify
3. Set up the backend on Fly.io with PostgreSQL
4. Enable two-factor authentication on your Gmail and generate an app password
5. Build the Python backend with contact form endpoint
6. Update the frontend to send form data to the backend
7. Deploy both frontend and backend
8. Test the contact form to ensure emails are sent
9. Purchase and set up custom domain (knightandcarter.co.uk) if desired

Security Notes

Always use HTTPS (free on all recommended platforms)
Never share passwords or API keys
Validate all form data on the backend before processing
Limit how many emails can be sent per hour to prevent spam
Only allow requests from your own website domain
