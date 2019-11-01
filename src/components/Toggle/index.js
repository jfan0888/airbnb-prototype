import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  componentDidMount() {
    const { value } = this.props;

    if (value) this.setState({ value: true });
  }

  clickHanlder = () => {
    this.setState(prevState => {
      return { value: !prevState.value };
    });
  };

  render() {
    const { value } = this.state;

    return (
      <button
        className="toggle-button"
        role="checkbox"
        onClick={this.clickHanlder}
      >
        <input type="hidden" value={value}></input>
        {value && <div className="filter" />}
        <div className={`mark-wrapper ${value ? 'active' : 'disable'}`}>
          {value ? (
            <div className="check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          ) : (
            <div className="close">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          )}
        </div>
      </button>
    );
  }
}

export default Toggle;
