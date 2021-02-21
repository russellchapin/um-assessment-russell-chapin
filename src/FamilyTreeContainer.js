import { useEffect, useState } from 'react';
import FamilyTree from './FamilyTree';

import './FamilyTreeContainer.css';

export default function FamilyTreeContainer() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [tree, setTree] = useState(null);
  useEffect(() => {
    fetch('https://russellchapin.com/docs/testTree.json')
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setTree(result);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <div>
      <header>
        <h1>Family Tree</h1>
        <h3>
          Hello! This single-parent family tree can render an infinite number of
          children (or as many as this client can handle &#128578;).
        </h3>
        <h3>
        The currently ingested data is nine levels deep.
        </h3>
      </header>
      <div className="main">
        {/* Loading */}
        {!isLoaded && <p className="loading">Loading...</p>}
        {/* No Data */}
        {isLoaded && tree && !tree.length && (
          <>
            <p>No Tree Members</p>
          </>
        )}
        {/* Tree */}
        {isLoaded && tree && error === null && (
          <>
            <FamilyTree tree={tree} />
          </>
        )}
        {/* Errors */}
        {isLoaded && error !== null && <p>{`Error: ${error}`}</p>}
      </div>
    </div>
  );
}
