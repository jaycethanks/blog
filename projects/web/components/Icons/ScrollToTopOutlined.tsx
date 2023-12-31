import React from 'react';

interface IconProps {
  className?: string
}
export default ({ className }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }} viewBox="0 0 256 256">
      <path
      className={className}
        fill="currentColor"
        d="M235.07 189.09L147.61 37.22a22.75 22.75 0 0 0-39.22 0L20.93 189.09a21.53 21.53 0 0 0 0 21.72A22.35 22.35 0 0 0 40.55 222h174.9a22.35 22.35 0 0 0 19.6-11.19a21.53 21.53 0 0 0 .02-21.72Zm-10.41 15.71a10.46 10.46 0 0 1-9.21 5.2H40.55a10.46 10.46 0 0 1-9.21-5.2a9.49 9.49 0 0 1 0-9.72l87.45-151.87a10.75 10.75 0 0 1 18.42 0l87.46 151.87a9.49 9.49 0 0 1-.01 9.72Z"
      ></path>
    </svg>
  );
};
