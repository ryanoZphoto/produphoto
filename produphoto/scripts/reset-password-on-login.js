/**
 * This script will help you reset your password when you log in to your Strapi Cloud admin panel.
 * 
 * Instructions:
 * 1. Go to your Strapi Cloud admin panel: https://appealing-birds-2727bdce7c.strapiapp.com/admin
 * 2. Open the browser developer tools (F12 or right-click and select "Inspect")
 * 3. Go to the Console tab
 * 4. Copy and paste the following code into the console and press Enter
 */

(function() {
  // Replace with your desired email and password
  const email = 'ryanosmun@gmail.com';
  const password = 'YourNewPassword123!';
  
  // Function to handle the forgot password flow
  async function resetPassword() {
    try {
      // Request password reset
      const forgotResponse = await fetch('/admin/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });
      
      if (forgotResponse.ok) {
        console.log('Password reset request sent successfully!');
        console.log('Please check your email for a password reset link.');
        console.log('If you do not receive an email, please check your spam folder.');
      } else {
        const errorData = await forgotResponse.json();
        console.error('Error requesting password reset:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Execute the password reset
  resetPassword();
})(); 