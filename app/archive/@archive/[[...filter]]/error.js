"use client";

// This error also happens on a client side, therefore,
// it must be handled both on the server and on the client side.
export default function FilterError({ error }) {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
}
