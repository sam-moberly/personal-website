'use client'

import Image from 'next/image'
import { track } from '@vercel/analytics'

export default function Home() {
  return (
    <main className="container">
      <div className="photo-section">
        <Image
          src="/headshot.jpg"
          alt="Samantha Moberly"
          width={200}
          height={200}
          className="photo"
          priority
        />
      </div>
      
      <h1>Samantha Moberly</h1>
      
      <div className="section">
        <p>
          I'm currently working in business operations and strategy at{' '}
          <a
            href="https://cursor.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'cursor', location: 'bio' })}
          >
            Cursor
          </a>.{' '}
          Previously, I was a mechanical design engineer at{' '}
          <a
            href="https://www.microvu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'microvu', location: 'bio' })}
          >
            Micro-Vu
          </a>,
          and I founded a community-based{' '}
          startup out of college. 
          I love to build in environments that are fast-paced and challenge the status quo.
        </p>
      </div>

      <div className="section">
        <p>
          I studied at{' '}
          <a
            href="https://www.calpoly.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'calpoly', location: 'education' })}
          >
            Cal Poly San Luis Obispo
          </a>
          , where I earned a B.S. in Mechanical Engineering with a minor in Entrepreneurship.
        </p>
      </div>

      <div className="section">
        <p>
          During summer breaks I interned at{' '}
          <a
            href="https://www.medtronic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'medtronic', location: 'internships' })}
          >
            Medtronic
          </a>{' '}
          (2022),{' '}
          <a
            href="https://www.endologix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'endologix', location: 'internships' })}
          >
            Endologix
          </a>{' '}
          (2021), and{' '}
          <a
            href="https://www.microvu.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-link"
            onClick={() => track('link_click', { destination: 'microvu', location: 'internships' })}
          >
            Micro-Vu
          </a>{' '}
          (2017-2020).
        </p>
      </div>

      <div className="section">
        <h2>Connect</h2>
        <div className="connect-links">
          <a 
            href="https://www.linkedin.com/in/samanthamoberly/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link"
            onClick={() => track('connect_click', { destination: 'linkedin' })}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          <a 
            href="https://x.com/sam_moberly" 
            target="_blank" 
            rel="noopener noreferrer"
            className="link"
            onClick={() => track('connect_click', { destination: 'x' })}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            X
          </a>
          <a 
            href="mailto:sam.moberly99@gmail.com" 
            className="link email-link"
            onClick={() => track('connect_click', { destination: 'email' })}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </main>
  )
}
