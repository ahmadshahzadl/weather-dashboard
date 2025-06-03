import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="bg-red-500/20 backdrop-blur-md border border-red-500/40 rounded-lg p-4 text-white flex items-center my-4">
      <AlertCircle className="mr-2 flex-shrink-0 text-red-300" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;