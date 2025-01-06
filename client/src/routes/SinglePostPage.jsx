import { useParams, Navigate } from 'react-router-dom';

const SinglePostPage = () => {
  const { slug } = useParams();
  
  // Add a check to ensure this is actually a post URL
  const restrictedPaths = ['learn', 'get-started', 'scenarios', 'security'];
  if (!slug || restrictedPaths.includes(slug)) {
    return <Navigate to="/" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {slug.replace(/-/g, ' ')}
          </h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              This is a placeholder content for the blog post with slug: {slug}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage; 