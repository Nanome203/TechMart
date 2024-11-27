import React from 'react';

const Header = ({ searchQuery }) => {
  return (
    <header className="bg-gray-100 p-4">
      {/* Breadcrumb section */}
      <div className="flex items-center">
        <span className="text-lg me-2">
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 25V15.8704C9 15.0301 9.71634 14.3488 10.6 14.3488H15.4C16.2837 14.3488 17 15.0301 17 15.8704V25M12.0728 1.28156L1.67276 8.31471C1.25069 8.60014 1 9.06221 1 9.55474V22.7176C1 23.9781 2.07452 25 3.4 25H22.6C23.9255 25 25 23.9781 25 22.7176V9.55474C25 9.06221 24.7493 8.60014 24.3272 8.31471L13.9272 1.28156C13.3721 0.906146 12.6279 0.906145 12.0728 1.28156Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="text-lg me-2">Home ›</span>
        <span className="text-lg font-semibold">Search</span>
      </div>

      {/* Horizontal Line */}
      <hr className="my-4" style={{ borderColor: 'black' }} />

      {/* Search result section */}
      <div className="text-4xl">
        Result for <span className="text-4xl font-semibold">“{searchQuery || 'All'}”</span>
      </div>

      {/* Horizontal Lines for separation */}
      <hr className="my-4" style={{ borderColor: 'black' }} />
    </header>
  );
};

export default Header;
