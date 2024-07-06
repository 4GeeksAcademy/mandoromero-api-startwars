import EntityList from './EntityList';
import useGlobalReducer from '../context/GlobalContext';

const Details = () => {
  const { entityType, uid } = useParams();
  const { store } = useGlobalReducer();
  const [entity, setEntity] = useState(null);

  useEffect(() => {
    if (entityType && uid) {
      const data = store[entityType];
      const entity = data.find(item => item.uid === parseInt(uid));
      setEntity(entity);
    }
  }, [entityType, uid, store]);

  if (entityType && uid) {
    return (
      <div className="container">
        {entity ? (
          <>
            <h1>{entity.name}</h1>
            {/* Render additional details about the entity */}
            <p>Details about the entity will go here.</p>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h1>People</h1>
      <EntityList entities={store.characters} entityType="characters" />

      <h1>Vehicles</h1>
      <EntityList entities={store.vehicles} entityType="vehicles" />

      <h1>Planets</h1>
      <EntityList entities={store.planets} entityType="planets" />
    </div>
  );
};

export default Details;