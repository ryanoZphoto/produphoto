'use strict';

/**
 * This script resets the admin password for your Strapi Cloud deployment
 * Run with: node scripts/local-reset-admin.js
 */

const axios = require('axios');

// Replace these values with your own
const STRAPI_CLOUD_URL = 'https://appealing-birds-2727bdce7c.strapiapp.com';
const ADMIN_EMAIL = 'ryanosmun@gmail.com';
const NEW_PASSWORD = 'YourNewStrongPassword123!'; // Choose a strong password

async function resetPassword() {
  try {
    // Request password reset
    console.log(`Requesting password reset for ${ADMIN_EMAIL}...`);
    await axios.post(`${STRAPI_CLOUD_URL}/admin/forgot-password`, {
      email: ADMIN_EMAIL
    });
    
    console.log('Password reset request sent successfully!');
    console.log('Please check your email for a password reset link.');
    console.log('If you do not receive an email, please check your spam folder.');
    console.log('You can also try to reset your password directly through the Strapi Cloud admin panel.');
  } catch (error) {
    console.error('Error requesting password reset:', error.response?.data || error.message);
  }
}

resetPassword(); 