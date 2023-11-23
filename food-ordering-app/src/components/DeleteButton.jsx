import React, { useState } from "react";

const DeleteButton = ({ label, onDelete }) => {
  const [showCofirm, setShowCofirm] = useState(false);

  if (showCofirm) {
    return (
      <div className="fixed bg-black/80 flex items-center inset-0 h-full justify-center">
        <div className="bg-white p-4 rounded-lg">
          <div>Are you sure you want to delete?</div>
          <div className="flex gap-2 mt-1">
            <button type="button" onClick={() => setShowCofirm(false)}>
              Cancel
            </button>
            <button
              type="button"
              className="primary"
              onClick={() => {
                onDelete();
                setShowCofirm(false);
              }}
            >
              Yes,&nbsp;delete!
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <button type="button" onClick={() => setShowCofirm(true)}>
      {label}
    </button>
  );
};

export default DeleteButton;
