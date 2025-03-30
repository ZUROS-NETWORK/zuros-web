import "./ProductCard.css";
export function CardSkeleton(){
return <div className="product-card skeleton">
  <div className="product-card-image skeleton-box"></div>
  <div className="product-card-content">
    <div className="skeleton-text skeleton-label"></div>
    <div className="skeleton-text skeleton-title"></div>
    <div className="skeleton-text skeleton-description"></div>
    <div className="skeleton-price">
      <div className="skeleton-text skeleton-price-text"></div>
    </div>
    <div className="skeleton-buttons">
      <div className="skeleton-button"></div>
      <div className="skeleton-button"></div>
    </div>
  </div>
</div>

}
export function ProductCardSkeleton(){
return <>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
  <CardSkeleton/>
</>

}
