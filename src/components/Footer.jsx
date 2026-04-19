  export default function Footer() {
  return (
    <footer
      id="contact"
      className=" mt-20 flex flex-col items-center justify-around w-full py-10 text-sm text-gray-800/70 h-full"
    >
      <div>
        <div className="flex items-center mb-2 gap-2.5 flex-1">
          <div className="size-8 rounded-lg  border border-zinc-200 flex items-center justify-center">
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#a)">
                <path
                  d="M10.95 13.115a.79.79 0 0 0 .96-.24l.282-.368a1.58 1.58 0 0 1 1.266-.633h2.375a1.583 1.583 0 0 1 1.584 1.583v2.375a1.583 1.583 0 0 1-1.584 1.583 14.25 14.25 0 0 1-14.25-14.25 1.583 1.583 0 0 1 1.584-1.583h2.375a1.583 1.583 0 0 1 1.583 1.583V5.54a1.58 1.58 0 0 1-.633 1.267l-.37.278a.79.79 0 0 0-.232.976 11.1 11.1 0 0 0 5.06 5.054"
                  stroke="#45556c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h19v19H0z" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            <h4
              // COLOR FROM CONTEXT
              className="text-foreground text-base font-medium mb-0.5"
            >
              Phone
            </h4>
            <p className="text-sm text-zinc-500 leading-relaxed">
              +212 613786859
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2.5 flex-1">
          <div className="size-8 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m18.333 5.832-7.492 4.773a1.67 1.67 0 0 1-1.674 0l-7.5-4.773"
                stroke="#45556c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.667 3.332H3.333c-.92 0-1.666.746-1.666 1.667v10c0 .92.746 1.666 1.666 1.666h13.334c.92 0 1.666-.746 1.666-1.666v-10c0-.92-.746-1.667-1.666-1.667"
                stroke="#45556c"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h4
              // COLOR FROM CONTEXT
              className="text-foreground text-base font-medium mb-0.5"
            >
              Email
            </h4>
            <p
              // COLOR FROM CONTEXT

              className="text-foreground text-sm leading-relaxed"
            >
              kerchaouiamin06@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-8 text-indigo-500">
        <a
          href="https://www.linkedin.com/in/amin-kerchaoui-712788296?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="https://github.com/aaaammmmasl"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:-translate-y-0.5 transition-all duration-300"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 18c-4.51 2-5-2-7-2"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
      <p
        // COLOR FROM CONTEXT
        className="text-foreground mt-8 text-center"
      >
        © 2026 Amin Kerchaoui. Built with React.
      </p>
    </footer>
  );
}
