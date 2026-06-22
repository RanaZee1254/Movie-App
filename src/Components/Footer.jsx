import React from 'react'

const Footer = () => {
  return (
  <>
    <div className="flex flex-col md:flex-row justify-between gap-8 p-6 bg-gray-800 text-white"className="flex justify-between items-center p-4 bg-gray-800 text-white">
<div>

    <h2 className="font-bold mb-2">Explore More</h2>
    <ul>
      <li>About Us</li>
      <li>Contact</li>
      <li>Privacy Policy</li>
    </ul>
</div>

  <div>
    <h2 className="font-bold mb-2">Follow Us</h2>
    <ul>
      <li>LinkedIn</li>
      <li>Twitter</li>
      <li>Facebook</li>
    </ul>
  </div>

  <div>
    <h2 className="font-bold mb-2 p-2 m-2">Subscribe</h2>
    <input
      type="email"
      placeholder="Enter your email"
      className="p-2 rounded text-black-900 border-white bg-white border-white-500"
      />
    <button className="mt-2 m-2 px-4 py-2 bg-blue-500 rounded">
      Subscribe
    </button>
      </div> 
  </div>
     <div className="text-left bg-gray-800 text-white">
        <br/>
        <p>&copy; 2026 @ Top Movie Finder. All rights reserved. Contact us at info@topmoviefinder.com</p>
        <p></p>
      </div>
 </>
 )
}

export default Footer
