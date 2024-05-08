import React from 'react'
import './container.css'
import Producto from './Producto'

export const Container = () => {
  return (
		<div className="container">
			<h2 className="titulo">Nuestros productos</h2>

			<div className='producto-container'>
				<Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
        <Producto></Producto>
			</div>
		</div>
	);
}
