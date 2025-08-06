import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

export default function App() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchTools = async () => {
      const { data, error } = await supabase.from('tools').select('*');
      if (error) console.error('Error:', error);
      else setTools(data);
    };
    fetchTools();
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>🧠 ArkOS AI Tool Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {tools.map((tool) => (
          <div key={tool.id} style={{ padding: '1rem', borderRadius: '8px', background: '#f5f5f5', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h3>{tool.title}</h3>
            <p>{tool.description}</p>
            <small>Method: {tool.api_method} | Auth: {tool.auth_required ? '✅' : '❌'}</small>
            <br />
            <code style={{ fontSize: '0.8rem' }}>{tool.api_url}</code>
          </div>
        ))}
      </div>
    </div>
  );
}
