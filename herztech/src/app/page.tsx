'use client';

import { useState } from 'react';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState('');
  const [downloadLink, setDownloadLink] = useState('');

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder logic for generating download link
    const fakeDownloadLink = `https://fake-download-service.com/download?url=${encodeURIComponent(videoUrl)}`;
    setDownloadLink(fakeDownloadLink);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="container">
        <h1 className="text-4xl font-bold mb-6">YouTube Downloader | by HErzTech</h1>
        <form onSubmit={handleDownload}>
          <label htmlFor="video-url" className="block text-sm font-medium text-gray-700 mb-2">
            Enter YouTube Video URL:
          </label>
          <input
            type="text"
            id="video-url"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            placeholder="https://www.youtube.com/watch?v=example"
            className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download
          </button>
        </form>
        {downloadLink && (
          <div className="download-link mt-6">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Click here to download your video
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
