'use strict';

/**
 * This script creates an admin user in Strapi
 * Run with: node scripts/run-create-admin.js
 */

const strapiPath = require('path').resolve(__dirname, '..');
const Strapi = require('@strapi/strapi');

async function createAdmin() {
  // Start Strapi in silent mode
  const strapi = await Strapi().load();
  
  try {
    // Create admin user
    const params = {
      username: 'admin',
      password: 'Admin123!',
      firstname: 'Admin',
      lastname: 'User',
      email: 'admin@example.com',
      roles: [1], // Admin role
    };

    // Check if the user already exists
    const existingUser = await strapi.admin.services.user.findOne({
      email: params.email,
    });

    if (existingUser) {
      console.log('Admin user already exists, updating password...');
      await strapi.admin.services.user.updateById(existingUser.id, {
        password: params.password,
      });
      console.log('Admin password updated successfully!');
    } else {
      console.log('Creating admin user...');
      await strapi.admin.services.user.create(params);
      console.log('Admin user created successfully!');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }

  // Stop Strapi
  await strapi.destroy();
  process.exit(0);
}

createAdmin(); 