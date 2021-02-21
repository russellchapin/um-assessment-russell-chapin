import React from 'react';
import TreeNode from './TreeNode';

export default function FamilyTree({ tree = [], level = 0 }) {
  return (
    <React.Fragment>
      {tree.map((node, index) => {
        return (
          <>
            <div className="ancestor-group">
              <TreeNode node={node} index={index}/>
              {node.children && node.children.length && (
                <div className="children">
                  <FamilyTree tree={node.children} level={level + 1} />
                </div>
              )}
            </div>
          </>
        );
      })}
    </React.Fragment>
  );
}
