﻿# PhotoSite Platform
# PhotoSite Platform

A platform that allows users to create their own subscription-based personal sites for sharing photos, videos, and other media content without requiring any coding knowledge.

## Features

- **User Authentication**: Complete user registration and login functionality
- **Dashboard**: User dashboard for content management
- **Media Management**: Upload, organize, and manage media content
- **Collections**: Group related media items into collections
- **Customization**: Simple site customization options
- **Subscriptions**: Monetize content through subscription plans

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: Strapi CMS
- **Authentication**: NextAuth.js with JWT
- **Database**: SQLite (development), PostgreSQL (production)

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- PostgreSQL database (for production)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/ryanoZphoto/produphoto.git
   cd produphoto
   ```

2. Set up the backend:
   ```
   cd backend
   npm install
   npm run develop
   ```

3. Set up the frontend:
   ```
   cd frontend
   npm install
   npm run dev
   ```

4. Access the application:
   - Frontend: http://localhost:3000
   - Backend Admin: http://localhost:1337/admin

## Project Structure

```
/
├── frontend/                 # Next.js frontend application
│   ├── public/               # Static assets
│   └── src/
│       ├── app/              # Next.js App Router pages
│       ├── components/       # React components
│       ├── lib/              # Utilities, hooks, and contexts
│       └── styles/           # Global styles
│
└── backend/                  # Strapi CMS backend
    ├── config/               # Strapi configuration
    ├── src/
    │   ├── api/              # API endpoints and models
    │   ├── extensions/       # Strapi extensions
    │   └── plugins/          # Custom plugins
    └── public/               # Public assets
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact support@photosite.com

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Strapi](https://strapi.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/)
