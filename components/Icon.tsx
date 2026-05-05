type IconProps = {
  name: string;
  className?: string;
};

const ICONS: Record<string, (props: { className?: string }) => JSX.Element> = {
  arrow_forward: () => (
    <path
      d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-6z"
      fill="currentColor"
    />
  ),
  mail: () => (
    <path
      d="M4 6h16v12H4z"
      stroke="currentColor"
      strokeWidth="0"
      fill="currentColor"
    />
  ),
  call: () => (
    <path
      d="M6.6 10.2a15.05 15.05 0 006.2 6.2l1.8-1.8a1 1 0 01.9-.24c1 .25 2 .4 3 .4a1 1 0 011 1V20a1 1 0 01-1 1C9.5 21 3 14.5 3 6a1 1 0 011-1h2.4a1 1 0 011 1c0 1 .15 2 .4 3 .08.36-.02.76-.24.9l-1.96 1.3z"
      fill="currentColor"
    />
  ),
  location_on: () => (
    <>
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </>
  ),
  check_circle: () => (
    <>
      <path
        d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14l-4-4 1.4-1.4L11 13.2l5.6-5.6L18 9l-7 7z"
        fill="currentColor"
      />
    </>
  ),
  eco: () => (
    <path
      d="M12 2s5 3 5 8c0 5-5 12-5 12S7 15 7 10c0-5 5-8 5-8z"
      fill="currentColor"
    />
  ),
  recycling: () => (
    <>
      <path
        d="M21 12a9 9 0 10-2.2 5.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M21 12v-3M21 12h-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="rotate(45 18 9)"
      />
      <path
        d="M3 12a9 9 0 012.2-5.7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M3 12v3M3 12h3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        transform="rotate(-45 6 15)"
      />
    </>
  ),
  leaf: () => (
    <path
      d="M20 6c-4 4-10 6-14 10 4-4 6-10 10-14 1.5-1.5 3.5-2 4 4z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  ),
  compost: () => (
    <path
      d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 4a3 3 0 110 6 3 3 0 010-6z"
      fill="currentColor"
    />
  ),
  potted_plant: () => (
    <path
      d="M6 20h12v2H6zm3-6a3 3 0 116 0v2H9v-2zM12 4s3 2 3 5-3 5-3 5-3-2-3-5 3-5 3-5z"
      fill="currentColor"
    />
  ),

  plant_circle: () => (
    <>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
      />
      <path
        d="M12 16v-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M9 12c1-2 3-3 6-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M15 11c0-1.5-1-2.5-2-3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  camera: () => (
    <>
      <path d="M4 7h3l2-3h6l2 3h3v11H4z" fill="currentColor" />
      <circle cx="12" cy="13" r="3" fill="white" />
      <circle cx="12" cy="13" r="2" fill="currentColor" />
    </>
  ),
  video_library: () => (
    <>
      <rect x="3" y="6" width="14" height="12" rx="2" fill="currentColor" />
      <path d="M17 10l5-3v10l-5-3v-4z" fill="currentColor" />
    </>
  ),
  share: () => (
    <>
      <circle cx="18" cy="5" r="2" fill="currentColor" />
      <circle cx="6" cy="12" r="2" fill="currentColor" />
      <circle cx="18" cy="19" r="2" fill="currentColor" />
      <path
        d="M8 11l8-5M8 13l8 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  public: () => (
    <path
      d="M12 2a10 10 0 100 20 10 10 0 000-20zm5 12h-3a6 6 0 01-4 4v-3a3 3 0 003-3h4v2z"
      fill="currentColor"
    />
  ),
};

export function Icon({ name, className = "" }: IconProps) {
  const IconSvg = ICONS[name];

  return (
    <svg
      role="img"
      aria-hidden={IconSvg ? undefined : true}
      className={`inline-block align-middle ${className}`}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {IconSvg ? (
        IconSvg({ className })
      ) : (
        <text x="0" y="16" fontSize="12" fill="currentColor">
          {name}
        </text>
      )}
    </svg>
  );
}
