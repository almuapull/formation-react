function PostItem({ post }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', margin: '4px' }}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 50)}...</p> {/* Affichage tronqué */}
    </div>
  );
}

export default PostItem;
