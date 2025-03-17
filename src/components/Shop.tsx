import { JSX, ReactNode } from 'react';

interface ShopProps {
  children: ReactNode; // Permite que `children` sea cualquier nodo válido de React
}

export default function Shop({ children }: ShopProps): JSX.Element {
  return (
    <section id="shop">
      <h2>Elegant Clothing For Everyone</h2>
      <ul id="products">{children}</ul>
    </section>
  );
}
