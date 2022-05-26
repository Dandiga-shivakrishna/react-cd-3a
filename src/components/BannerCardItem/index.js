import './index.css'

const BannerCardItem = props => {
  const {cardDetails, key} = props
  const {headerText, description, className} = cardDetails

  return (
    <li id={key}>
      <li className={className}>
        <div className="user-details-container">
          <h1 className="user-name"> {headerText} </h1>
          <p className="user-designation"> {description} </p>
          <button type="button">Show more</button>
        </div>
      </li>
    </li>
  )
}
export default BannerCardItem
