/*{import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks'); // Assuming you have a route for fetching feedbacks
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h3>Feedbacks are:</h3>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback._id}>
            <strong>Name:</strong> {feedback.name}, <strong>Subject:</strong> {feedback.subject}, <strong>Message:</strong> {feedback.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;

}*/


// Feedback.js in src folder
/*{import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks'); // Assuming you have a route for fetching feedbacks
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3">All Feedbacks:</h3>
      {feedbacks.map((feedback) => (
        <div key={feedback._id} className="card bg-light mb-3" style={{ maxWidth: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">Name: {feedback.name}</h5>
            <p className="card-text"><strong>Email:</strong> {feedback.email}</p>
            <p className="card-text"><strong>Subject:</strong> {feedback.subject}</p>
            <p className="card-text"><strong>Message:</strong> {feedback.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
}*/



// Feedback.js in src folder
/*{}
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks'); // Assuming you have a route for fetching feedbacks
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container mt-4">
      <h3 className="mb-3 font-weight-bold">All Feedbacks:</h3>
      <div className="row">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="col-md-4 mb-3">
            <div className="card bg-light" style={{ maxWidth: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">Name: {feedback.name}</h5>
                <p className="card-text"><strong>Email:</strong> {feedback.email}</p>
                <p className="card-text"><strong>Subject:</strong> {feedback.subject}</p>
                <p className="card-text"><strong>Message:</strong> {feedback.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
}*/


/*{// Feedback.js in src folder
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks'); // Assuming you have a route for fetching feedbacks
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container-fluid mt-4 bg-light">
      <h3 className="mb-3 font-weight-bold text-center">All Feedbacks</h3>
      <div className="row justify-content-center">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="col-md-4 mb-3">
            <div className="card" style={{ maxWidth: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold text-center">Name: {feedback.name}</h5>
                <p className="card-text"><strong>Email:</strong> {feedback.email}</p>
                <p className="card-text"><strong>Subject:</strong> {feedback.subject}</p>
                <p className="card-text"><strong>Message:</strong> {feedback.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
}*/

// Feedback.js in src folder
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/feedbacks'); // Assuming you have a route for fetching feedbacks
        setFeedbacks(response.data);
      } catch (error) {
        console.error('Error fetching feedbacks:', error.message);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <div className="container-fluid mt-4" style={{ backgroundColor: '#9136f6', color: 'black' }}>
      <h3 className="mb-3 font-weight-bold text-center">All Feedbacks</h3>
      <div className="row justify-content-center">
        {feedbacks.map((feedback) => (
          <div key={feedback._id} className="col-md-4 mb-3">
            <div className="card" style={{ maxWidth: '18rem' }}>
              <div className="card-body">
                <h5 className="card-title font-weight-bold text-center">Name: {feedback.name}</h5>
                <p className="card-text"><strong>Email:</strong> {feedback.email}</p>
                <p className="card-text"><strong>Subject:</strong> {feedback.subject}</p>
                <p className="card-text"><strong>Message:</strong> {feedback.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;

