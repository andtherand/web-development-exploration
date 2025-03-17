
import React from 'react';
import { Card } from '@/components/ui/card';

export interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ features, columns = 3 }) => {
  const colClassName = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns];

  return (
    <div className={`grid ${colClassName} gap-6 w-full max-w-6xl mx-auto`}>
      {features.map((feature, index) => (
        <Card 
          key={index} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex flex-col p-6">
            {feature.icon && (
              <div className="mb-4 text-primary">
                {feature.icon}
              </div>
            )}
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-sm">{feature.description}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
