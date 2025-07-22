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
        {/* Определение стрелки */}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="7"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 8 3, 0 6"
              fill="currentColor"
            />
          </marker>
        </defs>
        
        {/* Изогнутые стрелочки вокруг буквы U - 4 стрелки как на рисунке */}
        
        {/* Верхняя левая стрелка */}
        <path
          d="M28 20 Q18 10, 35 18"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Верхняя правая стрелка */}
        <path
          d="M72 20 Q82 10, 65 18"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Нижняя правая стрелка */}
        <path
          d="M72 80 Q82 90, 65 82"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Нижняя левая стрелка */}
        <path
          d="M28 80 Q18 90, 35 82"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        
        {/* Заглавная буква "U" в центре */}
        <text
          x="50"
          y="62"
          textAnchor="middle"
          className="font-bold"
          style={{ 
            fontSize: '36px',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
            fontWeight: '800'
          }}
          fill="currentColor"
        >
          U
        </text>
      </svg>
    </div>
  );
}