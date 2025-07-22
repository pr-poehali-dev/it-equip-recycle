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
        fill="none"
      >
        {/* Векторы по кругу вокруг буквы u - 8 векторов */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 45) - 90; // 8 векторов через каждые 45 градусов
          const radians = (angle * Math.PI) / 180;
          const x = 50 + 28 * Math.cos(radians);
          const y = 50 + 28 * Math.sin(radians);
          
          // Направление вектора (по часовой стрелке)
          const endX = 50 + 36 * Math.cos(radians);
          const endY = 50 + 36 * Math.sin(radians);
          
          return (
            <g key={i}>
              <line
                x1={x}
                y1={y}
                x2={endX}
                y2={endY}
                stroke="currentColor"
                strokeWidth="2"
              />
              {/* Наконечник вектора */}
              <circle
                cx={endX}
                cy={endY}
                r="1.5"
                fill="currentColor"
              />
            </g>
          );
        })}
        
        {/* Строчная буква "u" в центре */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          className="font-bold"
          style={{ 
            fontSize: '32px',
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