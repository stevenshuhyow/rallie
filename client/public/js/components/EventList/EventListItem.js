var React = require('react'),
	  Navigation = require('react-router').Navigation,
	  EventActions = require('../../actions/EventActions');

// EventListItem is referenced in EventList.js
// This will render each event in the event list
// this.props.event references the event that is passed in
var EventListItem = React.createClass({
  mixins: [Navigation],

  render: function() {
    return (
      <div className={'event-list-item' + (this.props.isParticipating ? ' event-list-item-participating' : '')}>
        <a href={this.makeHref('event-detail', {eventId: this.props.event.id})} onClick={this._setCurrentEvent}>
        <div className="event-list-item-name">{this.props.event.name}</div></a>
        <div className="event-list-item-location">{this.props.event.location}</div>
        <div className="event-list-item-attendee">{this.props.event.isAttendee}</div>
      </div>
    );
  },

  _setCurrentEvent: function() {
    EventActions.setCurrentEvent(this.props.event);
  }
});

module.exports = EventListItem;
