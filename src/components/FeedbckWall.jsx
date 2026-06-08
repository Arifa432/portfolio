import { useState } from 'react';

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: 'Sara Karimi', rating: 5, comment: 'It is an amazing potfolio! The design is fully responsive and looks great.' },
    { id: 2, name: 'Arifa Ramazani', rating: 4, comment: 'You have some really great projects. Again Work hard.' },
  ]);

  
  const [newName, setNewName] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [error, setError] = useState('');

  const handleAddFeedback = (e) => {
    e.preventDefault();

    if (!newName.trim() || !newComment.trim()) {
      setError('Please enter your name and comment.');
      return;
    }

    
    const newFeedbackObj = {
      id: Date.now(),
      name: newName,
      rating: Number(newRating),
      comment: newComment,
    };

    
    setFeedbacks([newFeedbackObj, ...feedbacks]);
    setNewName('');
    setNewComment('');
    setNewRating(5);
    setError('');
  };

  return (
    <div className='box'>

      <h2 className='feedback-wall'>💬 Feedback Wall</h2>

      <form onSubmit={handleAddFeedback} className='feedback-form'>
        <h4 className='record-new-comment'>Record New Comment</h4>
        
        {error && <p className='feedback-for-err'>{error}</p>}

        <div >
          <div className='feedback-name-label-box' >
            <label className='feedback-name-label'>Your Name:</label>
            <input 
              type="text" 
              value={newName} 
              onChange={(e) => setNewName(e.target.value)} 
              className='feedback-name-input'/>
          </div>

          <div style={{ width: '150px' }}>
            <label className='feedback-rate-label'>Rate (Stare):</label>
            <select 
              value={newRating} 
              onChange={(e) => setNewRating(e.target.value)}
              className='slect-rating'>
              <option value="5">⭐⭐⭐⭐⭐ (5)</option>
              <option value="4">⭐⭐⭐⭐ (4)</option>
              <option value="3">⭐⭐⭐ (3)</option>
              <option value="2">⭐⭐ (2)</option>
              <option value="1">⭐ (1)</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label className='feedback-comment-label'>Feedback or Comment:</label>
          <textarea 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)} 
            rows="3"
            className='feedback-comment'
          ></textarea>
        </div>

        <button type="submit" className='feedback-btn'>
          Post Feedback✨
        </button>
      </form>

      <div className='show-comment-list'>
        {feedbacks.map((item) => (
          <div 
            key={item.id}
            style={{border: item.rating === 5 ? '2px solid #ffc107' : '1px solid #eee' }} 
            className='comment-list'
          >
            
            {item.rating === 5 && (
              <span className='five-stare'>
                🌟 Featured
              </span>
            )}

            <div className='featured-user'>
              <strong style={{ fontSize: '16px' }}>{item.name}</strong>
              <span style={{ color: '#ffc107' }}>
                {'⭐'.repeat(item.rating)}
              </span>
            </div>
            
            <p className='comment'>{item.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
