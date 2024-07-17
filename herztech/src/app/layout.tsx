import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>YouTube Downloader</title>
      </head>
      <body>
        <div className="abstract-background"></div>
        <div className="splash"></div>
        <div className="splash"></div>
        <div className="splash"></div>
        {children}
      </body>
    </html>
  );
}
