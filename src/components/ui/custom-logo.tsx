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
      <div
        style={{ 
          width: size, 
          height: size,
          backgroundColor: '#FF8C00',
          borderRadius: '50%'
        }}
      />
    </div>
  );
}