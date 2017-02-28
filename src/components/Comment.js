import React from 'react';
import Moment from 'react-moment';
import { Panel } from 'react-bootstrap';

var Comment = React.createClass({
  render: function () {
    return (
      <div className="comment">
        <Panel header={this.props.author}>
          {this.props.text}
          <p className="dateStamp"><Moment format="YYYY-MM-DD">{this.props.date}</Moment> (<Moment format="HH:mm">{this.props.date}</Moment>)</p>
        </Panel>
      </div>
    )
  }
});

module.exports = Comment;
