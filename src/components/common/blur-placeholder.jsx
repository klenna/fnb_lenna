const shimmer = () => `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#333" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) => (typeof window === 'undefined'
  ? Buffer.from(str).toString('base64')
  : window.btoa(str))

const loader = () => `data:image/svg+xml;base64,${toBase64(shimmer())}`

export default loader
