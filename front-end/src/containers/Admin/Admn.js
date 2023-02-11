import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Admn = () => {
  const navigate = useNavigate();
    useEffect(() => {
        const auth = JSON.parse(localStorage.getItem("student"));
        console.warn(typeof (auth));
        if (auth === null || auth.status == "Student" || auth.status == "Recruiter") {
            navigate("/");
        }
    }, [])
  return (
    <div>
      hello admin
    </div>
  )
}

export default Admn
