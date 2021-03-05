import React from 'react'

const Packages = ({items}) => {
    return (
        <div>
            <section className="cards">
                {items.map(item => (
                    <h1>{item.weight}`</h1>
                ))}
            </section>
        </div>
    )
}

export default Packages