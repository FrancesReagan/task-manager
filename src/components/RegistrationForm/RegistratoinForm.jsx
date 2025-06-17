import React, { useState, useEffect } from 'react';

function RegistrationForm() {
  // const [registration, setRegistration] = useState<string | null>(null);

return (
  <form className="flex flex-col gap-4 w-max mx-auto mb-10">
    <label htmlFor="username">Username:</label>
    <input className="outline ml-2" type="text" name="username" />

    <label htmlFor="password">Password:</label>
    <input className="outline ml-2" type="password" name="passowrd" />

    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input className="outline ml-2" type="password" name="confirmPassword" />

    <label htmlFor="email">Email:</label>
    <input className="outline ml-2" type="email" name="email" />

    <label htmlFor="subscribeToNewsletter">
      Subscribe to Newsletter:
      <input className="ml-2" type="checkbox" name="subscribeToNewsletter"/>
    </label>
    <button className="outline" type="submit">Register</button>
  </form>
 );
}

export default RegistrationForm;