# PhotoSite Platform

A platform for photographers and videographers to create their own customizable content showcase and selling sites without any coding knowledge.

![PhotoSite Platform](https://via.placeholder.com/1200x600/6C63FF/FFFFFF?text=PhotoSite+Platform)

## Project Structure

This is a monorepo containing both the frontend and backend for the PhotoSite platform:

- **`/frontend`**: Next.js application with the main platform interface and user site templates
- **`/backend`**: Strapi CMS that manages content, users, and provides API endpoints

## Features

### For Content Creators

- Create personalized showcase sites with simple customization options
- Upload and manage photos and videos
- Set prices and sell content directly to visitors
- Collect comments and feedback on their work
- Track analytics and sales

### For Site Visitors

- Browse photo and video showcases with age verification
- Purchase digital content directly from creators
- Leave comments and feedback
- Responsive design for viewing on any device

## Technology Stack

### Frontend
- Next.js 14
- TypeScript
- Tailwind CSS
- Stripe for payment processing

### Backend
- Strapi CMS
- PostgreSQL
- AWS S3 / Cloudinary for media storage

## Development Setup

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

2. Set up the frontend:
   ```
   cd frontend
   npm install
   cp .env.example .env.local  # Then edit with your env variables
   npm run dev
   ```

3. Set up the backend:
   ```
   cd ../backend
   npm install
   cp .env.example .env  # Then edit with your env variables
   npm run develop
   ```

4. Create your first admin user in Strapi by following the instructions in the terminal.

5. Access the applications:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:1337/api
   - Strapi Admin: http://localhost:1337/admin

## Documentation

Detailed documentation can be found in the respective directories:

- [Frontend Documentation](./frontend/README.md)
- [Backend Documentation](./backend/README.md)

## Deployment

### Frontend

```
cd frontend
npm run build
```

Deploy the built application to Vercel, Netlify, or any static hosting service.

### Backend

```
cd backend
npm run build
npm run start
```

Deploy to Heroku, Digital Ocean, or any Node.js hosting platform.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact support@photosite.com

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Strapi](https://strapi.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Stripe](https://stripe.com/) #   p r o d u p h o t o  
 