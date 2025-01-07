import React, { useState, useEffect } from 'react';

export default function Pending() {
  const [pendingProblems, setPendingProblems] = useState([
    {
      id: 1,
      date: '2024-08-02',
      sic: '21BECD80',
      problemId: '123457884',
      roomNo: '101',
      description: 'Internet not working',
      status: 'Pending',
    },
    {
      id: 2,
      date: '2024-08-02',
      sic: '21BECD80',
      problemId: '214568799',
      roomNo: '102',
      description: 'Leaking faucet',
      status: 'Pending',
    },
  ]);

  useEffect(() => {
    const storedPendingProblems = JSON.parse(localStorage.getItem('pendingProblems'));
    if (storedPendingProblems) setPendingProblems(storedPendingProblems);
  }, []);

  const handleStatusChange = (id, status) => {
    const updatedPendingProblems = pendingProblems.filter(problem => problem.id !== id);
    const solvedProblem = pendingProblems.find(problem => problem.id === id);

    setPendingProblems(updatedPendingProblems);
    localStorage.setItem('pendingProblems', JSON.stringify(updatedPendingProblems));

    if (solvedProblem) {
      const updatedSolvedProblems = JSON.parse(localStorage.getItem('solvedProblems')) || [];
      updatedSolvedProblems.push({ ...solvedProblem, status: 'Solved' });
      localStorage.setItem('solvedProblems', JSON.stringify(updatedSolvedProblems));
    }
  };

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
          Registered Problems
        </h2>
        <form>
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
              {pendingProblems.map((problem) => (
                <tr key={problem.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.date}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.sic}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.problemId}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.roomNo}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{problem.description}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                    <select
                      value={problem.status}
                      onChange={(e) => handleStatusChange(problem.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Solved">Solved</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}
