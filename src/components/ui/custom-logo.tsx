interface CustomLogoProps {
  size?: number;
  className?: string;
}

export default function CustomLogo({ size = 32, className = "" }: CustomLogoProps) {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="text-professional-rolexGold"
        fill="currentColor"
      >
        {/* Круг из стрелочек - 6 стрелок по кругу */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60) - 90; // Начинаем сверху
          const radians = (angle * Math.PI) / 180;
          const x = 50 + 35 * Math.cos(radians);
          const y = 50 + 35 * Math.sin(radians);
          
          return (
            <g key={i} transform={`translate(${x}, ${y}) rotate(${angle + 90})`}>
              <path
                d="M-3,0 L3,0 L3,-6 L8,0 L3,6 L3,0 Z"
                fill="currentColor"
                className="drop-shadow-sm"
              />
            </g>
          );
        })}
        
        {/* Внутренний круг фона для буквы */}
        <circle
          cx="50"
          cy="50"
          r="22"
          fill="currentColor"
          className="opacity-20"
        />
        
        {/* Буква "u" в центре */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="font-bold"
          style={{ 
            fontSize: '28px',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontWeight: '800'
          }}
          fill="currentColor"
        >
          u
        </text>
      </svg>
    </div>
  );
}