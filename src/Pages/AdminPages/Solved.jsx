import React, { useEffect, useState } from 'react';

export default function Solved() {
  const [solvedProblems, setSolvedProblems] = useState([]);

  // Load solved problems from localStorage when the component mounts
  useEffect(() => {
    const storedSolvedProblems = JSON.parse(localStorage.getItem('solvedProblems'));
    if (storedSolvedProblems) setSolvedProblems(storedSolvedProblems);
  }, []);

  return (
    <div>
      <div className="card p-4">
        <h2
          style={{
            backgroundImage: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
            color: 'white',
            borderRadius: '10px',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
          }}
        >
          Solved Problems
        </h2>

        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>S.No</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Regarding Date</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>SIC</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Problem ID</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Room No</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Problem Description</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {solvedProblems.map((problem, index) => (
              <tr key={problem.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.date}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.sic}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.problemId}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.roomNo}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.description}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
