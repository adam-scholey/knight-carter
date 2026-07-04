Hosting Proposal for Knight and Carter

This document outlines the recommended hosting solution for the Knight and Carter website to enable the contact form and property management features.

Current Situation

The website is currently displayed as a static site. The contact form is visible but does not send real emails. To make the contact form functional and enable property management, we need to add a backend system and database.

What Data Will Be Stored

Contact Form Enquiries
Customer name, email address, phone number, type of enquiry, property of interest, message, and the date and time submitted.
Purpose: This creates a permanent record of all enquiries so you can follow up with potential clients and track response times.

Property Listings
Property address, town, postcode, price, number of bedrooms, number of bathrooms, square footage, property type, description, photographs, and featured status.
Purpose: Storing property information in a database allows you to add, edit, or remove properties easily without needing technical changes. It also enables visitors to search and filter properties by location, price, or size.

User Accounts (Optional for Future)
Staff names, email addresses, and access levels.
Purpose: If you wish to add a login system later for staff to manage properties or for clients to save favourite properties, user accounts will be required.

Recommended Hosting Solution

I recommend using Fly.io for all hosting requirements. This service provides everything needed in one place and is straightforward to manage.

Website and Database Hosting: Fly.io
Fly.io will host the website and include the database system. It offers a free tier to get started and is reliable for business use.

Database: PostgreSQL
PostgreSQL is a professional database system included with Fly.io. It handles multiple visitors simultaneously and is widely used by businesses for its reliability.

Email Service: Gmail (Recommended for Starting)
Gmail can be used to send emails when someone submits the contact form. It is free and simple to set up.

Gmail Considerations: 
Daily sending limit of approximately 500 emails
Designed for personal use rather than high-volume business email
Emails will appear to come from your personal Gmail address
Gmail may occasionally flag automated sending as suspicious activity

Alternative Email Service: SendGrid (For Professional Setup)
If you prefer a more professional email arrangement, SendGrid is a dedicated email service. It allows emails to be sent from a business address such as info@knightandcarter.co.uk and provides higher sending limits.
Cost: Free tier allows 100 emails per day, paid plans from £12 per month

Domain Name: knightandcarter.co.uk
You will need to purchase the domain name, which typically costs £10-15 per year.

Cost Summary
Monthly: £0 (using free service tiers)
Annual: £10-15 for the domain name

Why These Services Are Required

Fly.io: This service hosts the website, processes contact form submissions, and stores all data in the database. Without this, the contact form cannot send emails or save information.

PostgreSQL Database: This stores all property listings and contact form submissions. Without a database, property information would need to be manually updated in the website code whenever changes are required.

Email Service: This sends email notifications when someone submits an enquiry through the contact form. Without an email service, you would not be notified when a potential client enquires about a property.


Security Measures:
The website will use secure connections (HTTPS) automatically at no additional cost
Passwords and access keys will never be shared
All form submissions will be validated before processing to prevent spam
Emails will only be sent from your own website domain

Future Things to Consider

Admin Panel for Property Management
Currently, updating property listings would require technical access to the database. In the future, we could build a secure admin panel that allows you to add, edit, or remove properties through a simple web interface. This would give you full control over the website content without needing technical assistance. The admin panel would be password-protected and only accessible to authorised staff.

Online Payments via Stripe
If you wish to accept payments or deposits through the website, we could integrate Stripe, a secure payment processing service. This would allow clients to pay for services or reserve properties online. Stripe charges a small fee per transaction (typically 1.4% plus 20p for UK cards). We would need to discuss how pricing would work, as property prices vary and may require custom payment arrangements.

Client Registration and Login
We could add a system for clients to create accounts, save favourite properties, and receive notifications when new properties matching their criteria become available. This would help build a client database and improve engagement.

Property Alerts and Notifications
Clients could sign up to receive email alerts when new properties are listed in specific areas or within certain price ranges. This would help potential buyers find suitable properties quickly.

Virtual Tours and Video Integration
We could add virtual tour videos or 360-degree photography to property listings, giving viewers a better sense of the property before arranging viewings.

Document Management
A secure area where clients can access documents related to their property purchase, such as brochures, floor plans, or legal documents, could be added for convenience.

Analytics and Reporting
We could add reporting tools to show which properties are receiving the most views, which areas generate the most enquiries, and other useful business intelligence to help with marketing decisions.
