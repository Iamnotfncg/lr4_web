import React, { useState } from 'react';

const ProductDetailPage = ({ product }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      product.comments.push(comment);
      setComment('');
    }
  };

  return (
    <div>
      <h2>{product.name} Details</h2>

      <form>
        <label>Add Comment:</label>
        <textarea value={comment} onChange={handleCommentChange} />
        <button type="button" onClick={handleAddComment}>
          Add Comment
        </button>
      </form>

      <h3>Comments:</h3>
      {product.comments && product.comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
};

export default ProductDetailPage;
