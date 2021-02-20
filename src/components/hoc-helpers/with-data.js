import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import '../item-list/item-list.css';

function withData(Data) {
  return class extends Component {
    state = {
      data: null
    }
    componentDidMount() {
      this.updateData();
    }

    updateData = () => {
      let {getData} = this.props.methods;
      getData()
        .then(data => this.setState({data}))
        .catch(err => {
          return
        })
    }

    componentDidUpdate(prevprops) {
      if (this.props.methods.getData !== prevprops.methods.getData) {
        this.updateData();
      }
    }

    render() {
      let {data} = this.state;
      if (!data) {
        return <ul className='person-list'><Spinner/></ul>
      }
      return <Data {...this.props} data={data}/>
    }
  }
}

export default withData;