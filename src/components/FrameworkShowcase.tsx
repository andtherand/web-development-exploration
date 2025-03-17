import React from 'react';
import { Card } from '@/components/ui/card';

export interface Framework {
  name: string;
  description: string;
  examples?: string[];
  codeExample?: string;
  users?: string[];
}

interface FrameworkShowcaseProps {
  frameworks: Framework[];
  type: "CSS" | "JavaScript";
}

const FrameworkShowcase: React.FC<FrameworkShowcaseProps> = ({ frameworks, type }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {frameworks.map((framework, index) => (
          <Card 
            key={framework.name} 
            className="animate-fade-in overflow-hidden"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                {framework.logo && (
                  <div className="text-primary">
                    {framework.logo}
                  </div>
                )}
                <h3 className="text-xl font-semibold">{framework.name}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">{framework.description}</p>
              
              {framework.examples && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Examples:</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {framework.examples.map((example, i) => (
                      <li key={i}>{example}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              {framework.users && (
                <div>
                  <h4 className="text-sm font-medium mb-2">Used by:</h4>
                  <div className="flex flex-wrap gap-2">
                    {framework.users.map((user, i) => (
                      <span 
                        key={i} 
                        className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded"
                      >
                        {user}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {framework.codeExample && (
              <div className="border-t p-4 bg-gray-50 overflow-x-auto">
                <pre className="text-xs">
                  <code>{framework.codeExample}</code>
                </pre>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FrameworkShowcase;
