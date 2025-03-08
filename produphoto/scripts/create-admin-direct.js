'use strict';

/**
 * This script creates an admin user directly using the Strapi API
 * Run with: node scripts/create-admin-direct.js
 */

const axios = require('axios');

// Replace these values with your own
const STRAPI_CLOUD_URL = 'https://appealing-birds-2727bdce7c.strapiapp.com';
const ADMIN_EMAIL = 'admin@example.com'; // Use a different email than your existing one
const ADMIN_PASSWORD = 'Admin123!'; // Choose a strong password
const ADMIN_FIRSTNAME = 'Admin';
const ADMIN_LASTNAME = 'User';

async function createAdmin() {
  try {
    console.log(`Creating admin user ${ADMIN_EMAIL}...`);
    
    // Try to register a new admin user
    const response = await axios.post(`${STRAPI_CLOUD_URL}/admin/register-admin`, {
      email: ADMIN_EMAIL,
      firstname: ADMIN_FIRSTNAME,
      lastname: ADMIN_LASTNAME,
      password: ADMIN_PASSWORD
    });
    
    console.log('Admin user created successfully!');
    console.log(`You can now log in with email: ${ADMIN_EMAIL} and your password`);
    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error creating admin user:', error.response?.data || error.message);
    
    // If the error is that the user already exists, try to reset the password
    if (error.response?.data?.error?.message?.includes('already exists')) {
      console.log('User already exists, trying to reset password...');
      try {
        await axios.post(`${STRAPI_CLOUD_URL}/admin/forgot-password`, {
          email: ADMIN_EMAIL
        });
        console.log('Password reset request sent successfully!');
        console.log('Please check your email for a password reset link.');
      } catch (resetError) {
        console.error('Error requesting password reset:', resetError.response?.data || resetError.message);
      }
    }
  }
}

createAdmin(); 