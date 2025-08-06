import React from 'react';
const AdminVerify = () => {
  return (
    <div className='flex items-center justify-center flex-col h-[100vh]'>
      <form className='flex flex-col items-center'>
        <p>Enter Admin Email</p>
        <input
          type="email"
          required
          className='px-10 py-2 border border-[#404040]'
        />
        <button type="submit" className='px-[10px] py-[10px] bg-[#404040] mt-2'>
          Request
        </button>
      </form>
    </div>
  );
};

export default AdminVerify;