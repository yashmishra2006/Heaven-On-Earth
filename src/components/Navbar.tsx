{/* Update the donate link in the navbar to use React Router */}
{/* Find the donate links in the component and replace them with: */}
<Link
  to="/donate"
  className={`px-4 py-2 rounded-md transition-colors duration-200 font-medium ${
    isScrolled
      ? 'bg-orange-600 text-white hover:bg-orange-700'
      : 'bg-white text-orange-600 hover:bg-orange-50'
  }`}
>
  Donate Now
</Link>