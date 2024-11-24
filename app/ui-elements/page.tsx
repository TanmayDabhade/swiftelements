'use client';
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CopyButton from '../components/CopyButton';
import { componentDataExternal } from '../data/components';

interface ComponentData {
  name: string;
  category: string;
  description: string;
  usage: string;
  code: string;
}

const componentsData: ComponentData[] = componentDataExternal;

const Components: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData | null>(componentsData[0]);
  console.log(selectedComponent)

  // Extract unique categories from components data
  const categories = Array.from(new Set(componentsData.map((comp) => comp.category)));

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-200"
    style={{
      backgroundImage: `
        linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: '40px 40px',
    }}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="flex flex-1"
      >
        {/* Sidebar */}
        <aside className="w-1/6 bg-gray-950 border-r border-gray-700 p-4">
          <h2 className="text-2xl font-semibold mb-6 uppercase tracking-wide">Categories</h2>
          {categories.map((category) => (
            <div key={category} className="mb-8">
              <h3 className="text-lg font-bold uppercase text-gray-400 mb-2">{category}</h3>
              <ul className="space-y-2">
                {componentsData
                  .filter((comp) => comp.category === category)
                  .map((comp) => (
                    <li
                      key={comp.name}
                      onClick={() => setSelectedComponent(comp)}
                      className={`cursor-pointer px-3 py-2 rounded-lg text-md font-medium hover:bg-gray-700 ${
                        selectedComponent?.name === comp.name ? 'bg-gray-700 text-white' : ''
                      }`}
                    >
                      {comp.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </aside>

        {/* Documentation Panel */}
      
        <main className="w-full flex p-6 justify-center align-top items-start">
          {selectedComponent ? (
            <div className='bg-black rounded-lg border from-white to-gray-300 p-10 w-2/3'>
              <h1 className="text-2xl font-bold mb-4">{selectedComponent.name}</h1>
              <p className="text-gray-300 mb-4 text-xl">{selectedComponent.description}</p>

              {/* Usage Section */}
              {selectedComponent.usage && (
                <div className='bg-black'>
                  <h2 className="text-md font-semibold mb-2 flex items-center">
                    Usage
                    <CopyButton code={selectedComponent.usage} />
                  </h2>
                  <pre className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-gray-200">{selectedComponent.usage}</pre>
                </div>
              )}

              {/* Code Section */}
              {selectedComponent.code && (
                <>
                  <h2 className="text-md font-semibold mb-2 flex items-center py-6">
                    <CopyButton code={selectedComponent.code} />
                  </h2>
                  <pre className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-md text-gray-200 overflow-scroll">{selectedComponent.code}</pre>
                </>
              )}
            </div>
          ) : (
            <div className='bg-black rounded-lg border from-white to-gray-300 p-10 w-1/2'>
              <h1 className="text-2xl font-bold mb-4">Select Component</h1>
              <p className="text-gray-300 mb-4">Documentation of the selected component will be displayed here for users to refer. 
                It is highly recommended to read the description thoroughly to understand the code and avoid any errors that might occur.</p>

              {/* Usage Section */}
             
                <div className='bg-black'>
                  <h2 className="text-lg font-semibold mb-2 flex items-center">
                    An infographic or resource displaying the component&#39;s functioning will be displayed here.
                    
                  </h2>
                  {/* <pre className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-gray-200">{selectedComponent.usage}</pre> */}
                </div>
            </div>
          )}
        </main>
        </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Components;
