import React, { useEffect, useState } from "react";
import { Quote } from 'lucide-react';

const fetchRandomtext = async () => {
  const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  return data;
};

function Landingpage() {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    fetchRandomtext().then((data) => setQuote(data));
  }, []);

  return (
    quote && (
      <div className="flex  justify-center  pt-56 mx-auto  relative">
        
        <div className="group mx-3 relative bg-slate-50 p-10 rounded-xl shadow-2xl  ">
        <Quote size={40} className="absolute text-purple-500 left-0 top-0" />
          <p className="text-3xl font-semibold">{quote.id}</p>
          <p className="text-xl font-semibold pt-6">{quote.quote}</p>
          <p className="pt-6">{quote.author}</p>
        </div>
      </div>
    )
  );
}

export default Landingpage;
