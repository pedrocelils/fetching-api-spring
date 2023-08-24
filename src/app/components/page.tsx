'use client'
import { useEffect, useState } from "react";

export default function MyComponent() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/users");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao obter os dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
    {/* Exibir os dados obtidos */}
    {data && (
      <div>
        {data.map((item: any) => (
          <div key={item.id}>
            <p>ID: {item.id}</p>
            <p>Name: {item.name}</p>
            <p>Email: {item.email}</p>
            <p>Password: {item.password}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}
