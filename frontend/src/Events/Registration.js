import React from "react";
import EventRegistrationForm from '../components/EventRegistration'; // Corrected the import path


const EventRegistration = () => {
  return (
    <div 
      className="flex items-center justify-center" 
      style={{ 
        backgroundColor:'#001f3f',
        backgroundSize: 'cover', 
        backgroundAttachment: 'fixed', 
        backgroundPosition: 'center' 
      }}
    >
      <EventRegistrationForm />
    </div>
  );
}

export default EventRegistration;
