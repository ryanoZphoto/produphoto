'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = async ({ strapi }) => {
  // Only run in production (Strapi Cloud)
  if (process.env.NODE_ENV === 'production') {
    try {
      // Import the admin password reset script
      const adminPasswordReset = require('../../scripts/reset-admin-password');
      
      // Run the password reset
      await adminPasswordReset.resetAdminPassword(strapi);
    } catch (error) {
      console.error('Error resetting admin password:', error);
    }
  }
}; 