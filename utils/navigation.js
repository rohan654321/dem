// utils/navigation.js
export const navigateToHomeWithForm = (brandName = '') => {
  // Store the brand name in sessionStorage to pre-fill the form on home page
  if (brandName) {
    sessionStorage.setItem('selectedBrand', brandName);
  }
  
  // Navigate to home page
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
};