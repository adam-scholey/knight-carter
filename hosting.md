Hosting Guide for Knight and Carter

This guide explains how to host the Knight and Carter website when it has a backend and database, including how to send emails from the contact form.

Current State

The website is currently a static site hosted on GitHub Pages. The contact form is visual only and does not send real emails. To make the contact form work, we need a backend server and an email service.

What We Need to Store in the Database

We need to store the following data and here is why:

Contact form submissions
Name, email, phone number, type of enquiry, property of interest, message, date and time submitted
Why: When someone fills out the contact form, we need to save their enquiry so you can follow up. This creates a record of all leads and allows you to track response times.

Property listings
Property address, town, postcode, price, number of bedrooms, number of bathrooms, square footage, property type, description, exterior image URL, interior image URL, whether it is featured on homepage
Why: Storing property data in a database allows you to easily add, edit, and remove properties without changing any code. It also enables advanced search and filtering by area, price, or bedrooms.

User accounts (optional, for future)
Name, email, password, role (admin, staff, customer)
Why: If you want to add a login system later for staff to manage properties or for customers to save favourite properties, you will need user accounts with different permission levels.

Recommended Hosting Solution

For Knight and Carter, I recommend using Fly.io for hosting. This is a reliable and simple hosting service that includes everything you need.

Backend: Fly.io
Fly.io will host the Python backend and include the PostgreSQL database. It is easy to use and has a free tier to get started.

Database: PostgreSQL
PostgreSQL is a professional database that comes included with Fly.io. It handles multiple users well and is reliable for business use.

Email: Gmail
We will use Gmail to send emails from the contact form. This is the same email service used in the Tracker project and works well for small businesses. It is free and easy to set up.

Frontend: Netlify
Netlify will host the website frontend. It is free, simple, and handles static websites perfectly.

Custom Domain: knightandcarter.co.uk
You will need to purchase the domain name, which costs approximately £10-15 per year.

Total Cost
Monthly: £0 (using free tiers)
Annual: £10-15 for the domain name

Why We Need These Services

Fly.io: This hosts the backend server that processes the contact form and stores data in the database. Without this, the contact form cannot send emails or save information.

PostgreSQL: This stores all the property listings and contact form submissions. Without a database, you would need to manually update property information in the code every time something changes.

Gmail SMTP: This sends the emails when someone fills out the contact form. Without an email service, the form would not notify you when someone enquires about a property.

Netlify: This hosts the website that visitors see. It delivers the pages quickly and securely.

Next Steps

1. Create an account on Fly.io
2. Create an account on Netlify
3. Set up the backend on Fly.io with PostgreSQL
4. Enable two-factor authentication on your Gmail account and generate an app password
5. Build the Python backend with contact form endpoint
6. Update the website to send form data to the backend
7. Deploy both the website and backend
8. Test the contact form to ensure emails are sent
9. Purchase the domain name knightandcarter.co.uk and set it up

Security Notes

Always use HTTPS (this is free and automatic on all recommended services)
Never share passwords or API keys with anyone
The backend will validate all form data before processing to prevent spam
Emails will only be sent from your own website domain
