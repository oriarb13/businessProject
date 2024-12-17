import { useState ,useEffect} from "react";
function FetchData() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);  // יקרה רק פעם אחת בעת עליית הרכיב
  
    return (
      <div>
        {data ? (
          <ul>
            {data.map(item => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

  
  export default FetchData