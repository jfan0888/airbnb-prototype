import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }

    componentDidMount() {
        //
    }

    componentWillReceiveProps(nextProps) {
        //
    }

    render() {
        return (
            <div>main</div>
        );
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
