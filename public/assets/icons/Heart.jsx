export const Heart = ({ heartColor='white' }) => (
  <svg
    className="text-red-500 w-50 h-50"
    width='34'
    data-e2e=""
    height='34'
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#LikeShadowColor_filter0_d)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 4.5C21 4.5 24 8.5 24 8.5C24 8.5 27 4.5 33 4.5C40 4.5 45 9.99998 45 17C45 25 38.4622 32.1314 32.5 37.5C28.8191 40.8144 26 43 24 43C22 43 19.101 40.7978 15.5 37.5C9.63898 32.1325 3 25 3 17C3 9.99998 8 4.5 15 4.5Z"
        fill={heartColor}
        fillOpacity="0.9">
      </path>
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.80371 24.3995C7.17815 29.3932 11.5185 33.8538 15.4999 37.4999C19.1009 40.7978 21.9999 42.9999 23.9999 42.9999C25.9999 42.9999 28.819 40.8144 32.4999 37.4999C38.4621 32.1314 44.9999 24.9999 44.9999 16.9999C44.9999 16.8252 44.9968 16.6513 44.9906 16.4785C41.1344 27.3238 27.3575 37 23.5001 37C20.6255 37 11.2219 31.6262 4.80371 24.3995Z"
      fill="black"
      fillOpacity="0.03">
    </path>
    <defs>
      <filter id="LikeShadowColor_filter0_d"
        x="0.6"
        y="3.3"
        width="46.8"
        height="43.3" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood
          floodOpacity="0" result="BackgroundImageFix">
        </feFlood>
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0">
        </feColorMatrix>
        <feOffset dy="1.2">
        </feOffset><feGaussianBlur stdDeviation="1.2">
        </feGaussianBlur>
        <feColorMatrix type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0">
        </feColorMatrix>
        <feBlend
          mode="normal"
          in2="BackgroundImageFix" result="effect1_dropShadow">
        </feBlend>
        <feBlend
          mode="normal"
          in="SourceGraphic" in2="effect1_dropShadow"
          result="shape">
        </feBlend>
      </filter>
    </defs>
  </svg>
)