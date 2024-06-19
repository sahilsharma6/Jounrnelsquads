import JournalCard from "./JournalCard";
 
const journalData = [
  {
    id: 1,
    title: "Journal 1",
    type: "Nature",
    description: "This is a description for Journal 1.",
    image:
      "https://images.unsplash.com/photo-1529243856184-fd5465488984?q=80&w=1492&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Journal 2",
    type: "Science",
    description: "This is a description for Journal 2.",
    image:
      "https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Journal 3",
    type: "Technology",
    description: "This is a description for Journal 3.",
    image:
      "https://images.unsplash.com/photo-1631297203225-16d8f3084dbc?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Journal 4",
    type: "Technology",
    description: "This is a description for Journal 4   .",
    image:
      "https://images.unsplash.com/photo-1623039405147-547794f92e9e?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  // Add more journal data as needed
];
 
const JournalGrid = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Explore Our <span className="text-green-500">Journals</span>
        </h2>
        <div className="inline-block h-1 w-24 bg-green-500 mb-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border place-items-center gap-10">
        {journalData.map((journal) => (
          <JournalCard key={journal.id} journal={journal} />
        ))}
      </div>
    </div>
  );
};
 
export default JournalGrid;
 