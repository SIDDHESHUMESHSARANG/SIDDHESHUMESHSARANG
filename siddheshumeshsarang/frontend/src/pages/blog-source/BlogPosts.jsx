import { useEffect, useState } from 'react';
import prelike from '/heart.png'
import postlike from '/heart-liked.png'
import BlogFallback from './fallbacks/BlogFallback';

const LOCAL_STORAGE_KEY = 'likedPosts';

const BlogPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [likedPosts, setLikedPosts] = useState(() => {
    // Load liked posts from localStorage on initial render
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  }); // Track liked posts by id

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then(res => res.json())
      .then(data => {
        // Sort posts by uploadedAt descending (newest first)
        const sorted = [...data].sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
        setPosts(sorted);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setLoading(false);
      });
  }, []);

  // Persist likedPosts to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(likedPosts));
  }, [likedPosts]);

  if (loading) return <BlogFallback />;

  // Handler to toggle like/unlike for a post and update the backend
  const handleLike = async (id) => {
    const isLiked = likedPosts[id];
    const endpoint = isLiked ? 'unlike' : 'like';
    try {
      const res = await fetch(`http://localhost:4000/api/posts/${id}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error('Failed to update like');
      const updatedPost = await res.json();
      setPosts(posts => posts.map(post =>
        post._id === id ? { ...post, likes: updatedPost.likes } : post
      ));
      setLikedPosts(liked => ({ ...liked, [id]: !isLiked }));
    } catch (err) {
      console.error('Error updating like:', err);
    }
  };

  return (
    <div className='border border-dotted border-[#404040] h-auto w-auto'>
      {posts.map(post => {
        const isLiked = !!likedPosts[post._id];
        // Convert uploadedAt to IST string
        let istString = '';
        if (post.uploadedAt) {
          const date = new Date(post.uploadedAt);
          istString = date.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
        }
        return (
          <div key={post._id} className="h-auto w-auto m-7">
            <div>
              <p className="text-2xl text-left md:ml-0 mt-5">{post.title}</p>
              <p className='text-[#404040] md:mt-0 mt-5 text-[13px] md:text-[20px]'>Posted on {istString} (IST)</p>
            </div>
            {post.image && (
              <>
                <br />
                <img loading='lazy' className='border border-dotted border-[#404040]' src={post.image} alt="" height='auto' width='auto' />
              </>
            )}
            <p className="text-left text-[18px] mt-10 text-[#505050]">{post.content}</p>
            <button
              className='ml-0 mt-10 cursor-pointer'
              onClick={() => handleLike(post._id)}
            // Button is never disabled so user can toggle like/unlike
            >
              <div className='flex gap-2'>
                <img src={isLiked ? postlike : prelike} alt="like" height='25px' width='25px' />
                {post.likes}
              </div>
            </button>
            <hr className='mb-10 mt-10 border border-[#404040]' />
          </div>
        );
      })}
    </div>
  )
}

export default BlogPosts