import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../../firebase.js';
import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink
} from 'firebase/auth';

const ADMIN_EMAIL = import.meta.env.VITE_fghjklsd;

const actionCodeSettings = {
  url: import.meta.env.VITE_adminverify,
  handleCodeInApp: true,
};

const AdminVerify = () => {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setStep(3);
      const storedEmail = window.localStorage.getItem('adminEmailForSignIn');
      let promptEmail = storedEmail;
      if (!promptEmail) {
        promptEmail = window.prompt('Please provide your admin email for confirmation');
      }
      if (promptEmail) {
        signInWithEmailLink(auth, promptEmail, window.location.href)
          .then(() => {
            window.localStorage.removeItem('adminEmailForSignIn');
            navigate('/blogadmin');
          })
          .catch((err) => {
            setError('Verification failed. Try again.');
            setStep(1);
          });
      }
    }
  }, [navigate]);

  const handleRequest = async (e) => {
    e.preventDefault();
    setError('');
    if (email !== ADMIN_EMAIL) {
      setError('Only the admin email is allowed.');
      return;
    }
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('adminEmailForSignIn', email);
      setStep(2);
    } catch (err) {
      setError('Failed to send email. Try again.');
    }
  };

  return (
    <div className='flex items-center justify-center flex-col h-[100vh]'>
      <form onSubmit={handleRequest} className='flex flex-col items-center'>
        <p>Enter Admin Email</p>
        <input
          type="email"
          required
          className='px-10 py-2 border border-[#404040]'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={step !== 1}
        />
        {step === 1 && (
          <button type="submit" className='px-[10px] py-[10px] bg-[#404040] mt-2'>
            Request
          </button>
        )}
      </form>
      {step === 2 && (
        <div className='mt-4'>
          <p>Check your email for the sign-in link and click it to verify.</p>
        </div>
      )}
      {step === 3 && (
        <div className='mt-4'>
          <p>Verifying...</p>
        </div>
      )}
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>
  );
};

export default AdminVerify;