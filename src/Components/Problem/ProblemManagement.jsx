import React from 'react'
import Pending from '../../Pages/AdminPages/Pending';

export default function ProblemManagement() {

    const [pendingProblems, setPendingProblems] = useState([
        // Initial problems here
      ]);
    
      const [solvedProblems, setSolvedProblems] = useState([]);
    
      const handleStatusChange = (id, status) => {
        const updatedPendingProblems = pendingProblems.filter(problem => problem.id !== id);
        const solvedProblem = pendingProblems.find(problem => problem.id === id);
    
        setPendingProblems(updatedPendingProblems);
    
        if (solvedProblem) {
          setSolvedProblems([...solvedProblems, { ...solvedProblem, status }]);
        }

}

  return (

    

<div>
      <Pending pendingProblems={pendingProblems} onStatusChange={handleStatusChange} />
      <Solved solvedProblems={solvedProblems} />
    </div>
    
  )
}
