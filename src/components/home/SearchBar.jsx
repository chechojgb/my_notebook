export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Búsqueda en tiempo real
    if (query.length > 2) {
      searchNotes(query).then(setResults);
    }
  }, [query]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Buscar en mis notas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      {results.length > 0 && (
        <SearchResults results={results} />
      )}
    </div>
  );
}