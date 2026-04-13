"use client";

import { useState } from "react";
import { Review } from "@/lib/data"; // adjust path if needed

export default function ReviewsSection({ reviews }: { reviews: Review[] }) {
  const [selectedReviewId, setSelectedReviewId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editedText, setEditedText] = useState("");

  const handleSelect = (review: Review) => {
    setSelectedReviewId(review.id);
    setEditingId(null);
  };

  const handleEdit = (review: Review) => {
    setEditingId(review.id);
    setEditedText(review.text);
  };

  const handleSave = (reviewId: string) => {
    // NOTE: This only updates UI state (not backend)
    reviews = reviews.map((r) =>
      r.id === reviewId ? { ...r, text: editedText } : r
    );

    setEditingId(null);
  };

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          onClick={() => handleSelect(review)}
          className="border rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-bold">
              {review.author?.[0] ?? "?"}
            </div>

            <div className="flex-1">
              <p className="font-semibold text-sm">{review.author}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>

            <span className="text-yellow-500 text-sm">
              {"★".repeat(review.rating)}
            </span>
          </div>

          {/* Review Text */}
          <div className="mt-3 text-sm text-gray-700">
            {editingId === review.id ? (
              <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
                <textarea
                  className="w-full border rounded p-2 text-sm"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSave(review.id)}
                    className="px-3 py-1 bg-black text-white rounded text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="px-3 py-1 border rounded text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <p>{review.text}</p>
            )}
          </div>

          {/* Actions */}
          {selectedReviewId === review.id && (
            <div
              className="mt-3 flex gap-3 text-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => handleEdit(review)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}