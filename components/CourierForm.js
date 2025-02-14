import { useState } from 'react';
import styles from '../styles/courier.module.css'; // Import your CSS module correctly

const CourierForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!name || !address || !contactNumber || !pinCode) {
      setError('Please fill all the fields.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/pickup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, address, contactNumber, pinCode }),
      });

      const data = await res.json();
      if (data.success) {
        setSuccess('Pickup request submitted successfully!');
        setName('');
        setAddress('');
        setContactNumber('');
        setPinCode('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}> {/* Correct reference to CSS module class */}
    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-600 mb-6">
    Courier Pickup
  </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className={styles.input}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter your address"
          className={styles.input}
        />
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Enter your contact number"
          className={styles.input}
        />
        <input
          type="text"
          value={pinCode}
          onChange={(e) => setPinCode(e.target.value)}
          placeholder="Enter your pin code"
          className={styles.input}
        />
        <button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {error && <p className={styles.error}>{error}</p>} {/* Correct reference to CSS module class */}
      {success && <p className={styles.success}>{success}</p>} {/* Correct reference to CSS module class */}
    </div>
  );
};

export default CourierForm;
