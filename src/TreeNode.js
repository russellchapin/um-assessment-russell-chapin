import React from 'react';

import "./TreeNode.css";

export default function TreeNode({
  node
}) {
  // Let's not render some of this metadata
  const { id, children, parent, registered, ...rest} = node;
  return (
    <div className={`node ${node.parent === "root" ? "root" : ""}`}>
      <div className="inner-node">
        {
          Object.entries(rest).map((x) => {
            return <p>
              {x[0]}: {x[1]}
            </p>
          })
        }
      </div>
    </div>
  );
}
