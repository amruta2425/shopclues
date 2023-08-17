import React from 'react'
import ProductsCard from './ProductsCard'

const Products = ({products}) => {
    console.log(products);

  return (
    <div className = "py-10">
        <div className = "flex flex-col items-center gap-4 ">
            <h1 className = "text-2xl bg-black text-white py-2 w-80 text-center">Shopping everyday
            </h1>
            <span className = "w-20 h-[3px] bg-black"></span>
            <p className = "max-w-[700px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis doloremque recusandae facilis corporis quod ex possimus tenetur porro mollitia, at minus nulla asperiores explicabo sapiente velit, eum fugiat quos. Est blanditiis atque ab, expedita iste molestias alias incidunt libero molestiae, modi in enim, rerum similique! Pariatur fuga, alias laudantium dolores corrupti obcaecati! Debitis rem voluptate cupiditate quaerat quis atque vero, nihil incidunt dignissimos delectus dicta! Beatae eum facilis quos aspernatur hic cupiditate in recusandae ad dicta pariatur, eius accusantium labore rem neque voluptatibus nostrum sed accusamus,

            </p>
        </div>
        <div className = "max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products.map((item) => (
             <ProductsCard key={item._id} products={item} />
        ))}

        </div>
        
    </div>
  )
}

export default Products