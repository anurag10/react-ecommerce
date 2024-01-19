const Order = (orderData) => {
    return (
        <div>
            <h2>{orderData.id}</h2>
            <h2>{orderData.date}</h2>
            <h2>{orderData.cost}</h2>
            <h2>{orderData.orderedBy}</h2>
        </div>
    );
}