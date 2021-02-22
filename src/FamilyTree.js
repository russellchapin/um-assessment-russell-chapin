import React from 'react';
import TreeNode from './TreeNode';

export default function FamilyTree({ tree = [] }) {
  return (
    <>
      {tree.map(node => {
        return (
          <>
            <div className="group">
              <TreeNode node={node} />
              {node.children && node.children.length && (
                <div className="children">
                  <FamilyTree tree={node.children} />
                </div>
              )}
            </div>
          </>
        );
      })}
    </>
  );
}
