import React, { useEffect, useState } from 'react';

const API_URL = 'http://localhost:4000/api/posts';
import BlogFallback from '../fallbacks/BlogFallback';

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ title: '', content: '', image: '' });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch all posts
  const fetchPosts = () => {
    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        // Sort by newest first
        setPosts([...data].sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle form input
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Create or update post
  const handleSubmit = e => {
    e.preventDefault();
    setMessage('');
    if (!form.title || !form.content) {
      setMessage('Title and content are required.');
      return;
    }
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `${API_URL}/${editId}` : API_URL;
    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(() => {
        setForm({ title: '', content: '', image: '' });
        setEditId(null);
        fetchPosts();
        setMessage(editId ? 'Post updated!' : 'Post created!');
      })
      .catch(() => setMessage('Error saving post.'));
  };

  // Edit post
  const handleEdit = post => {
    setForm({ title: post.title, content: post.content, image: post.image || '' });
    setEditId(post._id);
    setMessage('Editing post...');
  };

  // Delete post
  const handleDelete = id => {
    if (!window.confirm('Delete this post?')) return;
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => {
        fetchPosts();
        setMessage('Post deleted.');
      })
      .catch(() => setMessage('Error deleting post.'));
  };

  // Cancel edit
  const handleCancel = () => {
    setForm({ title: '', content: '', image: '' });
    setEditId(null);
    setMessage('');
  };

  return (
    <div style={{ maxWidth: 1400, margin: '2rem auto', padding: 20 }}>
      <div className="flex flex-row gap-8 items-start">
        {/* Admin Panel Heading and Form */}
        <div className="flex-1 min-w-[320px] max-w-[400px]">
          <h2 className="text-2xl mb-4">Admin Panel</h2>
          {message && <div className="mb-2 text-blue-600">{message}</div>}
          <form onSubmit={handleSubmit} className="mb-8 p-4 border border-[#404040] rounded bg-[#181818]">
            <div className="mb-2">
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title"
                className="w-full p-2 border border-[#404040] rounded mb-2"
              />
              <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                placeholder="Content"
                className="w-full p-2 border border-[#404040] rounded mb-2"
                rows={4}
              />
              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="Image URL (optional)"
                className="w-full p-2 border border-[#404040] rounded"
              />
            </div>
            <div className="flex gap-2 mt-5">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                {editId ? 'Update' : 'Create'} Post
              </button>
              {editId && (
                <button type="button" onClick={handleCancel} className="bg-gray-400 text-white px-4 py-2 rounded">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        {/* All Blog Posts Section */}
        <div className="flex-1 mt-2 ml-5">
          <h3 className="text-2xl mb-2">All Blog Posts</h3>
          {loading ? (
            <BlogFallback/>
          ) : posts.length === 0 ? (
            <div>No posts found.</div>
          ) : (
            <div className="space-y-6">
              {posts.map(post => (
                <div key={post._id} className="border border-[#404040] p-4 rounded mb-4 bg-[#181818] shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-lg">{post.title}</span>
                      <span className="ml-2 text-xs text-gray-500">{new Date(post.uploadedAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(post)} className="text-blue-600">Edit</button>
                      <button onClick={() => handleDelete(post._id)} className="text-red-600">Delete</button>
                    </div>
                  </div>
                  {post.image && (
                    <img src={post.image} alt="post" style={{ maxWidth: 200, marginBottom: 8 }} />
                  )}
                  <div className="mb-2 text-gray-700">{post.content}</div>
                  <div className="text-sm text-white">Likes: {post.likes}</div>
                  <br /><hr className='border border-[#404040]'/>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;