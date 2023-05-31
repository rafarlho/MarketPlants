import React, {useState} from 'react';

const Comments = () =>{
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
  
    function handleSubmit(e) {
      e.preventDefault();
      if (newComment.trim() === '') return;
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }

    const [rating, setRating] = useState(0);
  
    //const handleRating = (value) => {
    //    setRating(value);
    //}
    
    return(    
        <div style={{ width: '100%' }}>
            <h2>Comments</h2>
            <form onSubmit={handleSubmit}>
            <textarea
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                style={{
                  padding: '10px',
                  width: '95%',
                  minHeight: '100px',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                  resize: 'vertical',
                  
                }}
            ></textarea>
            <button style={{ marginBottom:'20px',backgroundColor: '#6B8E23', color: 'white', padding: '5px 20px', fontSize: '25px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop:'10px' } } onClick={handleSubmit}>Submit</button>
            </form>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
            {comments.map((comment, index) => (
                <li
                key={index}
                style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    padding: '10px',
                    marginBottom: '10px',
                }}
                >
                {comment}
            </li>
            ))}
             </ul>
            </div>

    );} 
export default Comments;