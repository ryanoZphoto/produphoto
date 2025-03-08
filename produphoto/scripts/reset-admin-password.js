'use strict';

/**
 * This script resets the admin password in Strapi Cloud
 * 
 * To use this script:
 * 1. Deploy it to your Strapi Cloud project
 * 2. Run it using the Strapi Cloud console or CLI
 */

// Replace with your email
const ADMIN_EMAIL = 'ryanosmun@gmail.com';
// Choose a strong password
const NEW_PASSWORD = 'YourNewStrongPassword123!';

module.exports = {
  async resetAdminPassword(strapi) {
    try {
      // Find the admin user by email
      const adminUser = await strapi.query('admin::user').findOne({
        where: { email: ADMIN_EMAIL }
      });

      if (!adminUser) {
        console.error(`No admin user found with email ${ADMIN_EMAIL}`);
        return;
      }

      console.log(`Found admin user: ${adminUser.firstname} ${adminUser.lastname}`);

      // Hash the new password
      const hashedPassword = await strapi.admin.services.auth.hashPassword(NEW_PASSWORD);

      // Update the user with the new password
      await strapi.query('admin::user').update({
        where: { id: adminUser.id },
        data: { password: hashedPassword, resetPasswordToken: null }
      });

      console.log('Password reset successfully!');
      console.log(`You can now log in with email: ${ADMIN_EMAIL} and your new password`);
    } catch (error) {
      console.error('Error resetting admin password:', error);
    }
  }
};

// If this script is run directly
if (require.main === module) {
  // This part will only run if the script is executed directly
  console.log('This script should be run through the Strapi console or as a bootstrap function.');
  console.log('Please deploy it to your Strapi Cloud project and run it there.');
} 