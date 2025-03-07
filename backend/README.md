# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

# PhotoSite Backend - Strapi CMS

This directory contains the Strapi CMS backend for the PhotoSite platform.

## Content Structure

Here's how the content is structured in the Strapi CMS:

### Content Types

1. **User** (extends Strapi User)
   - Fields:
     - First Name (String)
     - Last Name (String)
     - Email (Email)
     - Password (Password)
     - Subscription Plan (Relation: one-to-one with Plans)
     - Subscription Status (Enumeration: active, trial, expired)
     - Profile Image (Media)

2. **Site**
   - Fields:
     - Name (String)
     - Description (Text)
     - Slug (UID - for site URL)
     - Owner (Relation: one-to-one with User)
     - Theme (JSON - stores color and font selections)
     - Template (Enumeration: gallery-grid, masonry, portfolio, minimalist, spotlight)
     - Logo (Media)
     - Custom Domain (String - for premium plans)
     - Created At (DateTime)
     - Updated At (DateTime)

3. **MediaItem**
   - Fields:
     - Title (String)
     - Description (Text)
     - Type (Enumeration: photo, video)
     - File (Media)
     - Price (Decimal)
     - Featured (Boolean)
     - Site (Relation: many-to-one with Site)
     - Collections (Relation: many-to-many with Collection)
     - Comments (Relation: one-to-many with Comment)
     - Sales (Relation: one-to-many with Sale)
     - Created At (DateTime)
     - Updated At (DateTime)

4. **Collection**
   - Fields:
     - Name (String)
     - Description (Text)
     - Site (Relation: many-to-one with Site)
     - Media Items (Relation: many-to-many with MediaItem)
     - Created At (DateTime)
     - Updated At (DateTime)

5. **Comment**
   - Fields:
     - Text (Text)
     - Author Name (String - for visitor comments)
     - Author Email (Email - optional)
     - Media Item (Relation: many-to-one with MediaItem)
     - Created At (DateTime)
     - Updated At (DateTime)

6. **Sale**
   - Fields:
     - Media Item (Relation: many-to-one with MediaItem)
     - Buyer Email (Email)
     - Amount (Decimal)
     - Transaction ID (String - from payment processor)
     - Status (Enumeration: completed, pending, failed)
     - Site (Relation: many-to-one with Site)
     - Created At (DateTime)
     - Updated At (DateTime)

7. **Plan**
   - Fields:
     - Name (String - Basic, Professional, Business)
     - Price (Decimal)
     - Media Limit (Integer - number of photos/videos allowed)
     - Features (JSON - list of included features)
     - Transaction Fee (Decimal - percentage)
     - Created At (DateTime)
     - Updated At (DateTime)

8. **Analytics**
   - Fields:
     - Site (Relation: many-to-one with Site)
     - Date (Date)
     - Visitors (Integer)
     - Page Views (Integer)
     - Sales (Integer)
     - Revenue (Decimal)
     - Created At (DateTime)
     - Updated At (DateTime)

## API Endpoints

The Strapi backend will expose the following main API endpoints:

### Public Endpoints (no authentication required)

- `GET /api/sites/:slug` - Get site data by slug
- `GET /api/media-items` - Get media items (filtered by site)
- `GET /api/collections` - Get collections (filtered by site)
- `POST /api/comments` - Add a comment to a media item
- `POST /api/verify-age` - Verify visitor age
- `POST /api/sales` - Process a sale (purchase)

### Protected Endpoints (authentication required)

- `GET/POST/PUT/DELETE /api/users/*` - User management
- `GET/POST/PUT/DELETE /api/sites/*` - Site management
- `GET/POST/PUT/DELETE /api/media-items/*` - Media item management
- `GET/POST/PUT/DELETE /api/collections/*` - Collection management
- `GET /api/comments/*` - Comment management
- `GET /api/sales/*` - Sales management
- `GET /api/analytics/*` - Analytics access

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables:
   ```
   cp .env.example .env
   ```
   Then edit the `.env` file with your database credentials and other settings.

3. Start the development server:
   ```
   npm run develop
   ```

4. Access the Strapi admin panel:
   ```
   http://localhost:1337/admin
   ```

## Plugins

The following Strapi plugins are configured:

- Upload (Media Library)
- Users & Permissions
- Documentation (Swagger/OpenAPI)
- GraphQL (for advanced queries)
- Email (for notifications)

## Deployment

For production deployment, follow these steps:

1. Build the admin panel:
   ```
   npm run build
   ```

2. Start the production server:
   ```
   npm run start
   ```

Or deploy to a hosting service like Heroku, Digital Ocean, or AWS using their respective deployment processes.
