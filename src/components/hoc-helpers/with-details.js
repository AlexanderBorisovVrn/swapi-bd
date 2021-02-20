import React, {Component} from 'react';
import {Record} from '../item-details/item-details'
import '../item-details/item-details.css'
import Spinner from '../spinner/spinner';

const withDetails = (Wrapped)=>(detailsFields) => {
  return class extends Component {
    state = {
      item: null,
      error: false,
      loading: true,
      image: null
    }

    componentDidMount() {
      this.updateItem();
    }
    onError = err => this.setState({error: true})

    updateItem = () => {
      const {itemId,methods:{getItem,getItemImgUrl}} = this.props;
      if (!itemId) {return}
      getItem(itemId).then(item => {
        return this.setState({item, loading: false, image: getItemImgUrl(itemId)})
      }).catch(this.onError)
    }

    componentDidUpdate(prevprops) {
      if (this.props.itemId !== prevprops.itemId ||
        this.props.methods.getItem !== prevprops.methods.getItem) {
        this.setState({loading: true})
        this.updateItem();
      }
    }
    render() {
        const {loading, error, item, image} = this.state;
    const viewDetailsField = (detailsFields, item) => {
        return detailsFields.map(({field,label}, id) => {
          return <Record field={field} label={label} item={item} key={id}/>
        })
      }
      const content = (!loading && !error)
        ? <Wrapped item={item} image={image}>
            {viewDetailsField(detailsFields, item)}
          </Wrapped>
        : null;
      const err = (loading || error)
        ? <Spinner/>
        : null
      return (
        <div className='item-details'>
          {content}
          {err}
        </div>
      )
    }
  }
}

export default withDetails;