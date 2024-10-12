import React from 'react';

const CreatePostPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white w-full max-w-lg my-12 rounded-lg shadow-md p-8">
        <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
          Add Your <span className="text-fuchsia-600">Book Review</span>
        </h1>
        <form className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Book Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Book Name"
              className="input input-bordered w-full border-gray-300 focus:ring-fuchsia-600 focus:border-fuchsia-600"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Write your description here..."
              className="textarea textarea-bordered w-full h-32 border-gray-300 focus:ring-fuchsia-600 focus:border-fuchsia-600"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Fantasy, Fiction"
              className="input input-bordered w-full border-gray-300 focus:ring-fuchsia-600 focus:border-fuchsia-600"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="Enter Image URL"
              className="input input-bordered w-full border-gray-300 focus:ring-fuchsia-600 focus:border-fuchsia-600"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-fuchsia-600 text-white w-full hover:bg-fuchsia-700 transition duration-200 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
