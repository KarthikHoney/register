import './index.css'

const EventItem = props => {
  const {eventData, buttonClicked} = props
  const {imageUrl, name, location, registrationStatus} = eventData

  const onClickingButton = () => {
    buttonClicked(registrationStatus)
  }

  return (
    <button type="button" onClick={onClickingButton}>
      <li className="list-container">
        <div className="container">
          <img src={imageUrl} alt={name} className="pic" />
          <h1 className="name">{name}</h1>
          <p className="location">{location}</p>
        </div>
      </li>
    </button>
  )
}
export default EventItem
