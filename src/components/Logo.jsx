/**
 * Site logo — "GERMÁN" wordmark with a { } development-brackets mark, amber on dark.
 *
 * Rendered as inline SVG (not an external file) so it stays crisp on the dark
 * header/footer at any size and needs no extra network request. Height is driven
 * by the `className` prop (default `h-7 md:h-8`); width scales automatically.
 */
const Logo = ({ className = 'h-7 md:h-8' }) => (
  <svg
    className={`${className} w-auto`}
    viewBox="0 0 250 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Germán — Fullstack Developer"
  >
    <title>Germán — Fullstack Developer</title>

    {/* Brackets mark */}
    <rect
      x="3"
      y="4"
      width="48"
      height="48"
      rx="13"
      stroke="#ffc107"
      strokeWidth="4"
    />
    {/* Braces placed symmetrically about the square's centre (x=27) so the
        mark stays optically centered regardless of font metrics. y is nudged
        above the geometric centre (28) because Montserrat's braces sit low in
        the em box — this evens out the top/bottom gap inside the square. */}
    <text
      x="20"
      y="25.5"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Montserrat', ui-sans-serif, system-ui, sans-serif"
      fontWeight="700"
      fontSize="27"
      fill="#ffc107"
    >
      {'{'}
    </text>
    <text
      x="34"
      y="25.5"
      textAnchor="middle"
      dominantBaseline="central"
      fontFamily="'Montserrat', ui-sans-serif, system-ui, sans-serif"
      fontWeight="700"
      fontSize="27"
      fill="#ffc107"
    >
      {'}'}
    </text>

    {/* Wordmark */}
    <text
      x="66"
      y="41"
      fontFamily="'Montserrat', ui-sans-serif, system-ui, sans-serif"
      fontWeight="800"
      fontSize="34"
      letterSpacing="0.5"
      fill="#ffc107"
    >
      GERMÁN
    </text>
  </svg>
);

export default Logo;
