import axios from 'axios';

export default function sendMessage(formData) {
    try {
      const response = axios.post('https://flask-translator-api.vercel.app/send_message', {
        "sdfg" : "", 
        "email": "fdgsg@sdad",
         "subject": "sdfg",
          "message": "sdfg"
        } );
      
      console.log('Message sent successfully:', response);
      return response.data;
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error response:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
      throw error;
    }
  }
  