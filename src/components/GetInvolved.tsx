{/* Update the donate button to navigate to the donation page with the selected amount */}
{/* Find the donate button in the component and replace it with: */}
<button 
  onClick={() => navigate(`/donate?amount=${amount}`)}
  className="w-full py-2 bg-orange-600 text-white font-medium rounded hover:bg-orange-700 transition-colors"
>
  Donate Now
</button>