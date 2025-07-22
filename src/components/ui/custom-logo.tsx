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
        {/* Полукруглые векторы вокруг буквы u, повторяющие её форму */}
        
        {/* Левая вертикальная линия */}
        <line
          x1="35"
          y1="35"
          x2="35"
          y2="65"
          stroke="currentColor"
          strokeWidth="3"
        />
        
        {/* Правая вертикальная линия */}
        <line
          x1="65"
          y1="35"
          x2="65"
          y2="65"
          stroke="currentColor"
          strokeWidth="3"
        />
        
        {/* Нижняя полукруглая дуга, соединяющая линии */}
        <path
          d="M35 65 Q50 75, 65 65"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        
        {/* Дополнительные полукруглые векторы для декора */}
        
        {/* Внешняя левая дуга */}
        <path
          d="M28 40 Q28 70, 35 70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Внешняя правая дуга */}
        <path
          d="M65 70 Q72 70, 72 40"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Внешняя нижняя дуга */}
        <path
          d="M30 70 Q50 82, 70 70"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Строчная буква "u" в центре */}
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