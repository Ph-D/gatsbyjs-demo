import React from 'react';
import { ItemsGrid, ItemStyle } from '../styles/Grids';

export default function ItemGrid({ items }) {
  return (
    <ItemsGrid>
      {items.map((item) => (
        <ItemStyle>
          <p>
            <span className="mark">{item.name}</span>
          </p>
          <img
            width="500"
            height="400"
            src={`${item.image.asset.url}?w=500&h=400&fit=crop`}
            alt={item.name}
            style={{
              background: `url(${item.image.asset.metadata.lqip})`,
              backgroundSize: 'cover',
            }}
          />
        </ItemStyle>
      ))}
    </ItemsGrid>
  );
}
