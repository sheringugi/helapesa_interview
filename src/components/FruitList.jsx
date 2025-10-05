const FruitList = () => {
  const fruits = ["Apple", "Banana", "Mango", "Orange"];
  return (
    <div className="card">
      <h3>Fruits</h3>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}

export default FruitList
        