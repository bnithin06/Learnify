import React from 'react';

function ErrorMessage({ message }) {
    return (
        <div className="text-center text-red-600 mt-8">
            <p>Something went wrong:</p>
            <p>{message}</p>
        </div>
    );
}

export default ErrorMessage;
