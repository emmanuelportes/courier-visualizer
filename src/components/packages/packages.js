import React from 'react'


const Packages = ({items}) => {
    return (
        <div>
            <section className="card">
                {items.map(item => (
                    <div className="cards">
                        <h1>{item.courier}</h1>
                        <hr/>
                        <ul>
                            <li>
                                <strong>Supplier:</strong> {item.supplier}
                            </li>
                            <li>
                                <strong>Description:</strong> {item.description}
                            </li>
                            <li>
                                <strong>Price to Pay:</strong> {item.priceToPay}
                            </li>
                            <li>
                                <strong>Weight:</strong> {item.weight}
                            </li>
                            <li>
                                <strong>Courier Tracking:</strong> {item.courierTracking}
                            </li>
                            <li>
                                <strong>Internal Tracking:</strong> {item.internalTracking}
                            </li>
                            
                        </ul>
                    </div>
                    
                ))}
            </section>
        </div>
    )
}

export default Packages