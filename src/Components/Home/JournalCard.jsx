  const JournalCard = ({ journal }) => {
      return (
        <div className="bg-white w-[340px]  rounded-lg shadow-md overflow-hidden">
          <img
            className="w-full h-64 object-cover hover:scale-105 transition-all duration-[400ms] ease"
            src={journal.image}
            alt={journal.title}
          />
          <div className="p-4">
            <h3 className="text-xl font-bold mb-2">{journal.title}</h3>
            <p className="text-green-600 font-semibold">{journal.type}</p>
            <p className="text-gray-700 mt-2">{journal.description}</p>
          </div>
        </div>
      );
    };
     
    export default JournalCard;