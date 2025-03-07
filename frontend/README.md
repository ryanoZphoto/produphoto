# PhotoSite - Platform for Photo/Video Showcase Sites

PhotoSite is a platform that allows photographers and videographers to create their own customizable sites to showcase and sell their visual content without any coding knowledge.

## Project Overview

This platform enables content creators to:

1. Create personalized showcase sites with simple customization options
2. Upload and manage photos and videos
3. Set prices and sell their content directly to visitors
4. Collect comments and feedback on their work
5. Track analytics and sales

## Technologies Used

- **Frontend**: Next.js 14 with TypeScript and Tailwind CSS
- **Backend**: Strapi (Headless CMS)
- **Database**: PostgreSQL
- **Media Storage**: AWS S3 / Cloudinary
- **Payments**: Stripe
- **Hosting**: Vercel (frontend), Heroku/Digital Ocean (backend)

## Key Features

### Main Platform

- User authentication and account management
- Site builder with template selection
- Media upload and management
- Sales tracking and analytics
- Subscription management

### User-Created Sites

- Age verification for visitors
- Showcase of photos and videos with customizable layouts
- E-commerce capabilities (buy buttons, checkout)
- Commenting system
- Custom theming based on user preferences

## Project Structure

```
/frontend
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js app directory
│   │   ├── dashboard/    # User dashboard
│   │   ├── site-builder/ # Site customization interface
│   │   ├── [site]/       # Dynamic routes for user sites
│   │   └── api/          # API routes
│   ├── components/   # Reusable components
│   │   ├── common/       # Shared components
│   │   ├── dashboard/    # Dashboard components
│   │   ├── site-builder/ # Site builder components
│   │   └── viewer/       # Components for site visitors
│   ├── lib/          # Shared libraries and utilities
│   └── utils/        # Helper functions
└── ...

/backend
├── config/           # Strapi configuration
├── api/              # Content types and routes
├── extensions/       # Custom extensions
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- PostgreSQL (for production)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/photosite.git
   cd photosite
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

4. Set up environment variables:
   - Create `.env.local` in the frontend directory
   - Create `.env` in the backend directory

5. Start the development servers:
   - Frontend: `npm run dev` in the frontend directory
   - Backend: `npm run develop` in the backend directory

## Templates

The platform offers 5 different layout templates for user sites:

1. **Gallery Grid**: Clean grid layout focusing on images
2. **Masonry**: Pinterest-style masonry layout for varied content
3. **Portfolio**: Professional layout for showcasing work
4. **Minimalist**: Simple, elegant design with focus on content
5. **Spotlight**: Bold design with featured content sections

## Customization Options

Users can customize their sites with:

- Color themes
- Typography choices
- Site information (name, description, logo)
- Custom domains (premium plans)

## Deployment

### Frontend

The frontend is deployed on Vercel:

```
cd frontend
vercel
```

### Backend

The backend can be deployed on Heroku, Digital Ocean, or any other platform that supports Node.js applications.

## License

[MIT License](LICENSE)

## Contact

For questions or support, please contact support@photosite.com
