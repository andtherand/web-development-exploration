
import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'sonner';

interface CodeBlockProps {
  code: string;
  language: 'html' | 'css' | 'js';
  showLineNumbers?: boolean;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language, 
  showLineNumbers = true 
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    toast.success('Code copied to clipboard');
  };

  const formattedCode = code.trim();
  const lines = formattedCode.split('\n');

  return (
    <div className="relative rounded-md overflow-hidden my-4 group">
      <div className="absolute right-2 top-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="p-2 bg-gray-800/80 rounded-md text-gray-200 hover:bg-gray-700 transition-colors"
          aria-label="Copy code"
        >
          <Copy size={16} />
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-4">
        <span className="text-xs text-gray-400 font-mono uppercase">
          {language === 'js' ? 'JavaScript' : language === 'css' ? 'CSS' : 'HTML'}
        </span>
      </div>
      <pre className={`language-${language} pt-10`}>
        <code>
          {showLineNumbers ? (
            <table className="min-w-full">
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i} className="table-row">
                    <td className="text-right pr-4 text-gray-500 select-none w-8">
                      {i + 1}
                    </td>
                    <td className="whitespace-pre">{line}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            formattedCode
          )}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
