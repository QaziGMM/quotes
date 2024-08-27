import React, { useEffect, useState } from "react";

function Allcotes() {
  const [dataFetch, setDataFetch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Api = "https://dummyjson.com/quotes";

  const fetchProduct = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      setDataFetch(data.quotes);
    } catch (error) {
      console.log("fetching problem", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProduct(Api);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : dataFetch.length > 0 ? (
        dataFetch.map((fetc, index) => (
          
          <div className="p-4 shadow-xl gap-6  mt-12 mx-3 md:mx-12 bg-slate-50 hover:bg-purple-200 hover:text-white rounded-lg " key={index}>
            <div> 
            <p className="bg-purple-300 max-w-6  pl-2 rounded-full">{fetc.id}</p>
            <p className="pt-3">{fetc.quote}</p>
            <p className="font-bold pt-6">{fetc.author}</p>
            </div>
          </div>
        ))
      ) : (
        <p>having problem on fetching data</p>
      )}
    </div>
  );
}

export default Allcotes;
