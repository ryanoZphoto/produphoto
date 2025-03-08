// create-admin.js
const fs = require('fs');
const path = require('path');

// Make sure the directory exists
const scriptsDir = path.resolve(__dirname);
if (!fs.existsSync(scriptsDir)) {
  fs.mkdirSync(scriptsDir, { recursive: true });
}

// Create the script content
const scriptContent = `
'use strict';

/**
 * This script creates an admin user in Strapi
 * Run with: node scripts/create-admin.js
 */

module.exports = async () => {
  // Create an admin user
  const params = {
    username: 'admin',
    password: 'Admin123!',
    firstname: 'Admin',
    lastname: 'User',
    email: 'admin@example.com',
    roles: [1], // Admin role
    blocked: false,
    isActive: true,
  };

  // Check if the user already exists
  const existingUser = await strapi.admin.services.user.findOne({
    email: params.email,
  });

  if (existingUser) {
    console.log('Admin user already exists, updating password...');
    const updatedUser = await strapi.admin.services.user.updateById(existingUser.id, {
      password: params.password,
    });
    console.log('Admin password updated successfully!');
    return updatedUser;
  }

  console.log('Creating admin user...');
  const user = await strapi.admin.services.user.create(params);
  console.log('Admin user created successfully!');
  return user;
};
`; 