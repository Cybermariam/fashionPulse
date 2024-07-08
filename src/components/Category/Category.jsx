import './Category.css';

export default function Category() {
  return (
    <div className="categories-container">
      <h3 className="category-heading">Related Categories </h3>
      <div className="related-categories">
        <button className="btn-category">Men&#39;s Slide</button>
        <button className="btn-category">Men&#39;s Tracksuits</button>
        <button className="btn-category">Men&#39;s Jerseys</button>
        <button className="btn-category">Men&#39;s Joggers & Sweatpants</button>
      </div>
    </div>
  );
}
